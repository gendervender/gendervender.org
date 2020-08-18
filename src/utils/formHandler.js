import axios from 'axios';

export default {
    methods: {
        onVerify(){
          this.verified = true;
        },
        encode(data) {
          return Object.keys(data)
          .map(
              key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
            )
            .join("&");
        },
        handleForm(){
            if(!this.verified){
              this.status.msg = "Please verify yourself with reCaptcha";
            }else{
              this.submitForm();
            }
        },
        async submitForm() {
          this.status.msg = "Submitting your form...";
          const processedForm = {
            "form-name": this.formName,
            ...this.form,
            ... this.selectedBox && {boxPref: this.selectedBox}
          }
          console.log(processedForm);
          try {
              const config = {
                header: {"Content-Type": "application/x-www-form-urlencoded"}
              }
              let res = await axios.post( "/", 
                this.encode(processedForm),
                config
              )
              if(res.status === 200) {
                this.status.success = true;
                this.status.msg = 'Thank you! Your form has been submitted.';
              }
              else {
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