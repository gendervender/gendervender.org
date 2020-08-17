<template>
  <form
    id="order-form"
    class="form"
    :name="formName"
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
    <div class="field field-half">
      <label for="email">Email *</label>
      <input
        required
        v-model="form.email"
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        name="email"
      />
    </div>
    <div class="field field-half">
      <label for="phone">Phone number</label>
      <input
        placeholder="123-456-7890"
        type="tel"
        name="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
    </div>
    <div class="field">
      <label for="address">Address *</label>
      <input
        required
        v-model="form.address"
        name="address"
      >
    </div>
    <div class="field field-third">
      <label for="state">State *</label>
      <input
        required
        v-model="form.state"
        name="state"
      />
    </div>
    <div class="field field-third">
      <label for="zip">Zip code *</label>
      <input
        required
        v-model="form.zip"
        name="zip"
      />
    </div>
    <div class="field field-half">
      <label for="city">City *</label>
      <input
        required
        v-model="form.city"
        name="city"
      />
    </div>
    <div class="field field-half">
      <label for="paymentMethod">Payment method *</label>
      <select v-model="form.paymentMethod" name="paymentMethod" required>
        <option disabled value="">Please select one</option>
        <option value="venmo">Venmo</option>
        <option value="zelle">Zelle</option>
        <option value="cash app">Cash App</option>
        <option value="paypal">Paypal</option>
      </select>
    </div>
      <div class="field field-half">
      <label for="paymentUsername">Payment username/email for request *</label>
      <input
        required
        v-model="form.paymentUsername"
        name="paymentUsername"
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
      place order
    </button>
    <p class="form-message" :class="{'form-message-error': !status.success}">{{status.msg}}</p>
  </form>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import formHandler from '@/utils/formHandler';

export default {
  name: 'OrderForm',
  mixins: [formHandler],
  components: { VueRecaptcha },
  data() {
    return {
      recaptchaKey: null,
      verified: false,
      form: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          paymentMethod: "",
          paymentUsername: ""
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
      this.recaptchaKey = process.env.VUE_APP_SITE_RECAPTCHA_KEY;
  }
}
</script>

<style lang="scss">
  #order-form{
    width: 100%;
    input,textarea,select{
      border-color: $border;
      &:focus{
        border-color: $secondary;
      }
    }
  }
</style>