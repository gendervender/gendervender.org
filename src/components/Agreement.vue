<template>
    <p class="form-agreement">
        By submitting this form, you agreed to our website's
        <router-link to="/privacy-policy"> privacy policy</router-link>.
    </p>
</template>
<script>
export default {
  name: 'Agreement'
}
</script>
<style lang="scss">
.form-agreement{
    display: block;
    width: 100%;
    text-align: left;
}
</style>