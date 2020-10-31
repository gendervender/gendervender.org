import axios from 'axios';

export default {
  methods: {
    onVerify() {
      this.verified = true;
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    generateOrderNumber() {
      return Math.floor(100000000 + Math.random() * 900000000);
    },
    handleForm() {
      let validated = true;
      //validate shop data
      if (this.formName === 'order') {
        if (this.form.paymentMethod === "") {
          validated = false;
          this.status.success = false;
          this.status.msg = "Please choose a payment service";
        } else if (this.form.paymentUsername === "") {
          validated = false;
          this.status.success = false;
          this.status.msg = "Please enter your username/email for payment request";
        }
      }
      //general validation
      if (!this.verified) {
        validated = false;
        this.status.success = false;
        this.status.msg = "Please verify yourself with reCaptcha";
      }

      // validated && 
      this.submitForm();
    },
    async submitForm() {
      this.status.msg = "Submitting your form...";
      const orderNumber = this.generateOrderNumber();
      const processedForm = {
        "form-name": this.formName,
        ...this.form,
        ...this.selectedBox && {
          boxPref: this.selectedBox,
          orderNumber
        }
      }
      try {
        const config = {
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
        let res = await axios.post("/",
          this.encode(processedForm),
          config
        )
        if (res.status === 200) {
          this.status.success = true;
          this.status.msg = 'Thank you! Your form has been submitted.';
          if (this.formName === 'order') {
            const confirmedData = {
              formData: {
                ...this.form,
                boxPref: this.selectedBox,
                orderNumber,
                price: {
                  subTotal: parseFloat(this.price.base),
                  shipping: parseFloat(this.price.shipping),
                  total: (parseFloat(this.price.base) + parseFloat(this.price.shipping)).toFixed(2)
                }
              }
            }
            this.$store.dispatch('setData', confirmedData);
            this.$router.push('/order-confirmed');
          }
        } else {
          this.status.success = false;
          this.status.msg = 'Something went wrong... please try again later or email us at infogendervender@gmail.com.';
        }
      } catch (error) {
        this.status.success = false;
        this.status.msg = error.message;
      }
    }
  }
}
