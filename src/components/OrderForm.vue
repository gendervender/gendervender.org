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
        placeholder="10 digits phone number"
        v-model="form.phone"
        type="tel"
        pattern="[0-9]{10}"
        name="phone"
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
    <div class="field field-half">
      <label for="city">City *</label>
      <input
        required
        v-model="form.city"
        name="city"
      />
    </div>
    <div class="field field-third">
      <label for="state">State *</label>
      <input
        style="text-transform:uppercase"
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
  </form>
</template>

<script>
export default {
  name: 'OrderForm',
  props: {
    handleForm: Function,
    verified: Boolean,
    form: {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        address: String,
        city: String,
        state: String,
        zip: String
    },
    formName: String,
    formInitiated: Boolean,
    status: {
      success: Boolean,
      msg: String
    }
  }
}
</script>

<style lang="scss">
  #order-form{
    width: 100%;
  }
</style>