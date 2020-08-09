<template>
  <form
    class="form"
    name="contact"
    method="POST"
    data-netlify-recaptcha="true"
    data-netlify="true"
    @submit.prevent="handleForm"
    ref="form"
  > 
    <div class="field field-half">
      <label for="firstName">First Name</label>
      <input
        v-model="form.firstName"
        type="text"
        name="firstName"
      >
    </div>
    <div class="field field-half">
      <label for="lastName">Last Name</label>
      <input
        v-model="form.lastName"
        type="text"
        name="lastName"
      >
    </div>
    <div class="field">
      <label for="email">Email</label>
      <input
        v-model="form.email"
        name="email"
      >
    </div>
    <div class="field">
      <label for="message">Your Message</label>
      <textarea
        v-model="form.message"
        name="message"
      />
    </div>
    <vue-recaptcha v-if="recaptchaKey"
      type="v2 Checkbox"
      @verify="onVerify"
      :loadRecaptchaScript="true"
      :sitekey="recaptchaKey"
      class="field"
    />
    <button
      type="submit"
      class="button"
    >
      Send
    </button>
    <p class="form-message" :class="{'form-message-error': !status.success}">{{status.msg}}</p>
  </form>
</template>

<script>
import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';
export default {
  name: 'ContactForm',
  components: { VueRecaptcha },
  data() {
    return {
      recaptchaKey: null,
      verified: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },
      status: {
        success: false,
        msg: ''
      }
    }
  },
  created: function() {
      this.recaptchaKey = process.env.VUE_APP_SITE_RECAPTCHA_KEY;
  },
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
        if (validation.success){
            this.submitForm();
        }
        this.status.msg = validation.msg;
    },
    validate(form){
        if(form.firstName == "" || form.lastName == ""){
            return{success: false, msg: "Please fill out your name."}
        }else if(form.email == ""){
            return{success: false, msg: "Please enter your email address."}
        }else if(!this.validateEmail(form.email)){
            return{success: false, msg: "Please enter a valid email address."}
        }else if(form.message == ""){
            return{success: false, msg: "Please enter a message."}
        }else if(!this.verified){
          return {success: false, msg: "Please verify yourself with recaptcha"}
        }else{
            return{success: true, msg: ""}
        }
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
              "form-name": "contact",
              ...this.form
            }),
            config
          )
          if(res.status === 200) {
            this.status.success = true;
            this.status.msg = 'Thank you! Your message has been submitted.';
            this.form = {
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            }
          }
          else {
            this.status.success = false;
            this.status.msg = 'Something went wrong... please try again later.';
          }
      } catch (error) {
        this.status.success = false;
        this.status.msg = error.msg;
      }
    }
  }
}
</script>
