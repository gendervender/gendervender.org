<template>
    <div class="shop__checkout container">
        <h2>Check out</h2>
        <div class="shop__checkout-wrapper row">
            <div class="shop__checkout-payment">
                <h3>Order information</h3>
                <div class="shop__checkout-card">
                    <OrderForm
                        v-bind="$data"
                        :handleForm="handleForm"
                    />
                </div>
                <br/>
                <h3>How it works</h3>
                <div class="shop__checkout-card shop__checkout-info" v-if="payment_instructions">
                    <div class="shop__checkout-info-item center" v-for="item in payment_instructions">
                        <prismic-image :field="item.icon" />
                        <prismic-rich-text :field="item.content" />
                    </div>
                </div>
            </div>
            <div class="shop__checkout-summary">
                <h3>Order summary</h3>
                <div class="shop__checkout-card">
                    <div class="shop__checkout-card-block">
                        <h4>Your box</h4>
                        <span> {{selectedBox}} </span>
                    </div>
                    <div class="shop__checkout-total">
                        <div class="shop__checkout-card-block row">
                            <h5>Subtotal</h5>
                            <span> ${{price.base}} </span>
                         </div>
                        <div class="shop__checkout-card-block row">
                            <h5>Shipping</h5>
                            <span> ${{price.shipping}} </span>
                         </div>
                        <div class="shop__checkout-card-block row">
                            <h5><strong>Total</strong></h5>
                            <span><strong> ${{calcTotal()}} </strong></span>
                        </div>
                        <vue-recaptcha 
                            v-if="recaptchaKey"
                            type="v2 Checkbox"
                            @verify="onVerify"
                            :loadRecaptchaScript="true"
                            :sitekey="recaptchaKey"
                            class="field"
                        />
                        <Agreement/>
                        <input
                            form="order-form"
                            class="button"
                            type="submit"
                            value="place order"
                        />
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
      payment_instructions: Array
  },
  data(){
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
  methods: {
      calcTotal(){
          return parseFloat(this.price.base) + parseFloat(this.price.shipping);
      }
  },
  created(){
      this.recaptchaKey = process.env.VUE_APP_SITE_RECAPTCHA_KEY;
  }
}

</script>
<style lang="scss">
    .shop__checkout{
        h2{
            margin-bottom: 1rem;
        }
        h3{
            margin-bottom: 0.8rem;
            font-size: $font-size-s;
        }
        h4, h5{
            font-size: $font-size-xs;
        }
        h4{
            margin-bottom: 0.4rem;
        }
        &-payment{
            flex: 2;
            margin-right: 4%;
        }
        &-summary{
            flex: 1;
        }
        &-card{
            border-radius: 4px;
            border: 1px $border solid;
            background-color: white;
            box-sizing: border-box;
            padding: 20px;
            &-block{
                margin-bottom: 8%;
            }
        }
        &-total{
            border-top: 1px $border solid;
            padding-top: 24px;
            .row{
                justify-content: space-between;
                align-items: center;
            }
            .button{
                margin-top: 4%;
                width: 100%;
            }
        }
        &-info{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 20px;
            &-item{
                flex-direction: column;
                justify-content: flex-start;
                text-align: center;
                img{
                    width: 50px;
                }
            }
        }
    }
</style>