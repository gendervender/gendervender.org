<template>
  <section id="shop" class="shop">
        <div class="center container" v-if="!toggleCheckout">
            <prismic-rich-text :field="shop_header" v-if="shop_header"/>
            <prismic-rich-text :field="shop_content" v-if="shop_content"/>
            <div class="shop__boxes row">
              <div class="shop__boxes-item" v-for="item in boxes" :key="`box-${item.name}`">
                <h3>{{item.name}} <span>({{item.amount}} items)</span></h3>
                <prismic-rich-text :field="item.description"/>
                <div class="shop__boxes-item-price center">
                  <h4>${{item.price}}</h4>
                  <p><strong>${{item.shipping}}</strong> shipping</p>
                  <button class="button" @click="selectBox(item)" >SELECT THIS BOX</button>
                </div>
              </div>
            </div>
        </div>
        <ProductsDiscover v-if="!toggleCheckout" />
        <ShopCheckout 
          v-if="toggleCheckout"
          :selectedBox="selectedBox"
          :payment_instructions="payment_instructions"
          :price="selectedPrice"
        />
  </section>
</template>
<script>
import ProductsDiscover from '@/components/ProductsDiscover';
import ShopCheckout     from '@/components/ShopCheckout';

export default {
  name: 'Shop',
  components: {
    ProductsDiscover,
    ShopCheckout
  },
  data() {
    return {
      toggleCheckout: false,
      selectedBox: "",
      selectedPrice: {
        base: 0,
        shipping: 0
      },
      boxes: [],
      payment_instructions: [],
      shop_content: null,
      shop_header: null
    }
  },
  methods: {
    assignContent(){
      const data = this.$store.state.shopPage;
      Object.assign(this, data);
    },
    selectBox(box){
      this.selectedBox = box.name;
      this.setPrice(box.price, box.shipping);
      this.toggleCheckout = true;
    },
    setPrice(base, shipping){
      this.selectedPrice = { base, shipping }
    }
  },
  created(){
    this.assignContent();
  }
}

</script>
<style lang="scss" scoped>
  .shop{
    &__boxes{
      &-item{
        width: 28vw;
        margin: 0 12px;
        background-color: white;
        border: 1px $border solid;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 32px 24px;
        &-price{
          border-top: 1px $border solid;
          margin-top: 20px;
          padding-top: 12px;
          flex-direction: column;
          p{
            margin: 0
          }
          .button{
            margin-top: 12px;
          }
        }
      }
    }
  }
</style>