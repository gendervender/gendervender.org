<template>
  <section id="order">
        <div class="center container">
            <h1>Donate through ordering</h1>
            <OrderForm />
        </div>
  </section>
</template>
<script>
import OrderForm from '@/components/OrderForm'

export default {
  name: 'Order',
  components: {
    OrderForm
  }
}
</script>
<style lang="scss" scoped>

</style>