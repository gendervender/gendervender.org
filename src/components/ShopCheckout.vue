<template>
    <div class="shop__checkout container">
        <h2>Check out</h2>
        <div class="shop__checkout-wrapper row">
            <div class="shop__checkout-payment">
                <h3>Order information</h3>
                <div class="shop__checkout-card">
                    <OrderForm />
                </div>
                <br/>
                <h3>How it works</h3>
                <div class="shop__checkout-card">
                </div>
            </div>
            <div class="shop__checkout-summary">
                <h3>Order summary</h3>
                <div class="shop__checkout-card">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import OrderForm        from '@/components/OrderForm';

export default {
  name: 'ShopCheckout',
  components: {
    OrderForm
  },
  props: {
      selectedBox: String
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
        }
    }
</style>