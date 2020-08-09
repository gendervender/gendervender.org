<template>
  <form
    class="form"
    :name="formName"
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
      place order
    </button>
    <p class="form-message" :class="{'form-message-error': !status.success}">{{status.msg}}</p>
  </form>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import formHandler from '@/utils/formHandler';

export default {
  name: 'ContactForm',
  mixins: [formHandler],
  components: { VueRecaptcha },
  data() {
    return {
      recaptchaKey: null,
      verified: true,
      form: {
          firstName: "",
          lastName: "",
          email: ""
      },
      formName: "order",
      formInitiated: false,
      status: {
        success: false,
        msg: ""
      }
    }
  },
  created: function() {
      //initiate form
      this.recaptchaKey = process.env.VUE_APP_SITE_RECAPTCHA_KEY;
  }
}
</script>