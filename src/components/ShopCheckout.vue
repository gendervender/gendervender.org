<template>
    <div class="shop__checkout container">
      <h2>Check out</h2>
      <div class="shop__checkout-wrapper row">
        <div class="shop__checkout-payment">
          <h3>Delivery information</h3>
          <div class="shop__checkout-card">
            <OrderForm v-bind="$data" :handleForm="handleForm" />
          </div>
          <br />
          <h3>Payment information</h3>
          <div class="shop__checkout-card">
            <h4>Choose a service</h4>
            <div class="shop__checkout-service">
              <button @click="form.paymentMethod = service"
                :class="form.paymentMethod === service ? 'button' : 'button button-secondary button-dark'"
                v-for="service in payment_services.split(/[ ,]+/)">
                {{service}}
              </button>
            </div>
            <h4>Enter username/email for payment request</h4>
            <input class="field field-half" name="paymentUsername" v-model="form.paymentUsername" />
            <h4>How it works</h4>
            <div class="shop__checkout-info" v-if="payment_instructions">
              <div class="shop__checkout-info-item center" v-for="(item, index) in payment_instructions">
                <img :src="icons[index]" />
                <prismic-rich-text :field="item.content" />
              </div>
            </div>
          </div>
        </div>
        <div class="shop__checkout-summary">
          <h3>Order summary</h3>
          <div class="shop__checkout-card">
            <div class="shop__checkout-card-block">
              <h4 style="font-weight: 400">Your box</h4>
              <b> {{selectedBox}} </b>
            </div>
            <div class="shop__checkout-card-block">
              <prismic-rich-text :field="payment_content" />
            </div>
            <div class="shop__checkout-total">
              <div class="shop__checkout-card-block row">
                <h5>Subtotal</h5>
                <span> ${{price.base}} </span>
              </div>
              <div class="shop__checkout-card-block row">
                <h5>Shipping/Handling fee</h5>
                <span> ${{price.shipping}} </span>
              </div>
              <div class="shop__checkout-card-block row">
                <h5><strong>Total</strong></h5>
                <span><strong> ${{calcTotal()}} </strong></span>
              </div>
              <vue-recaptcha v-if="recaptchaKey" type="v2 Checkbox" @verify="onVerify" :loadRecaptchaScript="true"
                :sitekey="recaptchaKey" class="field" />
              <Agreement />
              <input form="order-form" class="button" type="submit" value="place order" />
              <p class="form-message" :class="{'form-message-error': !status.success}">{{status.msg}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import OrderForm     from '@/components/OrderForm';
import Agreement     from '@/components/Agreement';
import formHandler   from '@/utils/formHandler';
import VueRecaptcha  from 'vue-recaptcha';
import ICON_SEND     from '@/assets/icon-send.svg';
import ICON_MAIL     from '@/assets/icon-mail.svg';
import ICON_CHECK    from '@/assets/icon-check.svg';

export default {
  name: 'ShopCheckout',
    mixins: [formHandler],
    components: {
      Agreement,
      OrderForm,
      VueRecaptcha
    },
    props: {
      selectedBox: String,
      price: Object,
      payment_instructions: Array,
      payment_services: String,
      payment_content: Array,
    },
    data() {
      return {
        icons: [ICON_SEND, ICON_MAIL, ICON_CHECK],
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
          paymentUsername: "",
          notes: "",
        },
        formName: "order",
        formInitiated: false,
        status: {
          success: false,
          msg: ""
        }
      }
    },
    methods: {
      calcTotal() {
        return (parseFloat(this.price.base) + parseFloat(this.price.shipping)).toFixed(2);
      }
    },
    created() {
      this.recaptchaKey = process.env.VUE_APP_SITE_RECAPTCHA_KEY;
    }
}

</script>
<style lang="scss">
  .shop__checkout {
    padding-top: 8vh;
    h2 {
      margin-bottom: 1rem;
    }

    h3 {
      margin-bottom: 0.8rem;
      font-size: $font-size-s;
    }

    h4,
    h5 {
      font-size: $font-size-xs;
    }

    h4 {
      margin-bottom: 0.4rem;
    }

    &-payment {
      flex: 4;
      margin-right: 4%;
    }

    &-service {
      margin-bottom: 4%;

      button {
        margin-right: 8px;
      }
    }

    &-summary {
      flex: 1
    }

    &-card {
      border-radius: 4px;
      border: 1px $border solid;
      background-color: white;
      box-sizing: border-box;
      padding: 20px;

      &-block {
        margin-bottom: 16px;
        p{
          font-size: $font-size-xs;
        }
      }
    }

    &-total {
      border-top: 1px $border solid;
      padding-top: 24px;

      .row {
        justify-content: space-between;
        align-items: center;
      }

      .button {
        margin-top: 4%;
        width: 100%;
      }
    }

    &-info {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 20px;
      margin-top: 4%;

      &-item {
        flex-direction: column;
        justify-content: flex-start;
        text-align: center;

        img {
          width: 50px;
        }
      }
    }
    @include tablet{
      &-wrapper{
        flex-direction: column;
      }
      &-payment{
        margin: 0%;
      }
      &-summary{
        margin-top: 4%;
      }
      &-service{
        button{
          margin: 0 8px 8px 0;
        }
      }
      &-info{
        grid-template-columns: 1fr;
        &-item{
          flex-direction: row;
          text-align: left;
          align-items: flex-start;
          margin-bottom: 12px;
          p{
            margin: 0%;
          }
          img{
            margin-right: 20px;
          }
        }
      }
    }
    @include mobile{
      .field{
        width: 100%;
      }
    }
  }
</style>