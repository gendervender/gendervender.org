<template>
  <form
    id="contact-form"
    class="form"
    name="contact"
    method="POST"
    data-netlify-recaptcha="true"
    data-netlify="true"
    @submit.prevent="handleForm"
    ref="form"
  > 
    <div class="field field-half">
      <label for="firstName">First Name *</label>
      <input
        required
        v-model="form.firstName"
        type="text"
        name="firstName"
      />
    </div>
    <div class="field field-half">
      <label for="lastName">Last Name *</label>
      <input
        required
        v-model="form.lastName"
        type="text"
        name="lastName"
      />
    </div>
    <div class="field">
      <label for="email">Email *</label>
      <input
        required
        v-model="form.email"
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        name="email"
      />
    </div>
    <div class="field">
      <label for="message">Your Message</label>
      <textarea
        required
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
    <Agreement />
    <input
      form="contact-form"
      class="button"
      type="submit"
      value="send message"
    />
    <p class="form-message" :class="{'form-message-error': !status.success}">{{status.msg}}</p>
  </form>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import formHandler  from '@/utils/formHandler';
import Agreement    from '@/components/Agreement';

export default {
  name: 'ContactForm',
  mixins: [formHandler],
  components: { VueRecaptcha, Agreement },
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
      formName: "contact",
      formInitiated: false,
      status: {
        success: false,
        msg: ''
      }
    }
  },
  created: function() {
      this.recaptchaKey = process.env.VUE_APP_SITE_RECAPTCHA_KEY;
  }
}
</script>
