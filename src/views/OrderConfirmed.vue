<template>
  <section class="order-confirmed">
    <div class="container center" v-if="data">
      <img :src="icon" />
      <div class="order-confirmed__message center column">
        <h2>Thank you!</h2>
        <p>An order confirmation has been sent to your email. Please allow up to 24 hours for it to deliver into your
          inbox. If you have any questions or concerns, please contact us at
          <a href="mailto:infogendervender@gmail.com" target="_blank">infogendervender@gmail.com</a>
        </p>
      </div>
      <div class="order-confirmed__info">
        <h3>Order summary</h3>
        <div class="order-confirmed__info__grid">
          <div class="order-confirmed__info__grid-item">
            <h4>Your box</h4>
            <span>{{data.boxPref}}</span>
          </div>
          <div class="order-confirmed__info__grid-item">
            <h4>Email</h4>
            <span>{{data.email}}</span>
          </div>
          <div class="order-confirmed__info__grid-item">
            <h4>Delivery address</h4>
            <span>{{data.address}}</span><br/>
            <span>{{data.city.charAt(0).toUpperCase() + data.city.slice(1)}}, {{data.state.toUpperCase()}} {{data.zip}}</span>
          </div>
          <div class="order-confirmed__info__grid-item">
            <h4>Order number</h4>
            <span>#{{data.orderNumber}}</span>
          </div>
          <div class="order-confirmed__info__grid-item">
            <h4>Payment</h4>
            <span>{{data.paymentMethod}}: {{data.paymentUsername}}</span>
          </div>
          <div class="order-confirmed__info__grid-item">
            <h4>Additional notes/instructions</h4>
            <span>{{data.notes}}</span>
          </div>
        </div>
        <div class="order-confirmed__info__price">
          <div class="row">
            <h5>Subtotal</h5>
            <span>${{data.price.subTotal}}</span>
          </div>
          <div class="row">
            <h5>Shipping/Handling fee</h5>
            <span>${{data.price.shipping}}</span>
          </div>
          <div class="row">
            <h5><strong>Total</strong></h5>
            <span><strong>${{data.price.total}}</strong></span>
          </div>
        </div>
      </div>
    </div>
    <div class="container center" v-else>
      <div class="order-confirmed__message center column">
      <h2>You haven't placed a box order!</h2>
      <p>There's no order information at this time. If you have placed an order previously, check your email inbox. If you have any questions or concerns, please
      don't hesitate and reach out to us at <a href="mailto:infogendervender@gmail.com" target="_blank">infogendervender@gmail.com</a>
      </p>
      <router-link to="/shop" class="button button-secondary button-dark">go to shop</router-link>
      </div>
    </div>
  </section>
</template>
<script>
import ICON_CHECK    from '@/assets/icon-check.svg';

export default {
  name: 'OrderConfirmed',
  data(){
    return {
      icon: ICON_CHECK,
      data: this.$store.state.formData
    }
  }
}
</script>
<style lang="scss">
  .order-confirmed{
    img{
      width: 4rem;
    }
    &__message{
      text-align: center;
      width: 80%;
    }
    &__info{
      width: 80%;
      background-color: white;
      border-radius: 8px;
      margin-top: 2rem;
      padding: 2rem;
      -webkit-box-shadow: 0px 5px 20px 0px rgba($text, 0.05);
      -moz-box-shadow: 0px 5px 20px 0px rgba($text, 0.05);
      box-shadow: 0px 5px 20px 0px rgba($text, 0.05);
      &__grid{
        margin: 2rem 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1.5fr;
        row-gap: 1rem;
        column-gap: 1rem;
        @include tablet{
          grid-template-columns: 1fr;
        }
      }
      h3{
        font-size: $font-size-m;
      }
      h4, h5{
        font-size: $font-size-xs;
      }
      &__price{
        padding: 1rem 0;
        border-top: 1px solid $border;
        .row{
          justify-content: space-between;
          margin-top: 0.4rem;
        }
      }
    }
    @include tablet{
      &__info, &__message{
        width: 90%;
      }
    }
  }
</style>