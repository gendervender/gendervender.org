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
            const form = this.form;
            const validation = this.validate(form);
            // if (validation.success){
            //     this.submitForm();
            // }
            this.status.msg = validation.msg;
        },
        validate(form){
            for (const field in form) {
                if (form[field].length === 0){
                    console.log('field ' + field + ' is empty')
                    return {success: false, msg: "Please enter your " + field.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()};
                }
            }
            if(!this.validateEmail(form.email)){
                return{success: false, msg: "Please enter a valid email address."}
            }
            if(!this.verified){
                return {success: false, msg: "Please verify yourself with recaptcha"}
            }
            return {success: true, msg: ""};
        },
        
        validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        async submitForm() {
          this.status.msg = "Submitting your message...";
          try {
              const config = {
                header: {"Content-Type": "application/x-www-form-urlencoded"}
              }
              let res = await axios.post( "/", 
                this.encode({
                  "form-name": this.formName,
                  ...this.form
                }),
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
            this.status.msg = error.msg;
          }
        }
    }
}