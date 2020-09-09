<template>
  <section id="shop" class="shop">
        <div class="banner" v-if="!toggleCheckout">
          <prismic-image :field="banner" />
        </div>
        <div class="center container" v-if="!toggleCheckout">
            <prismic-rich-text :field="shop_header" v-if="shop_header"/>
            <prismic-rich-text :field="shop_content" v-if="shop_content"/>
            <div class="shop__boxes row">
              <div
                class="shop__boxes-item" 
                v-for="item in boxes"
                :key="`box-${item.name}`"
              >
                <prismic-image class="shop__boxes-item-image" :field="item.image"/>
                <img class="shop__boxes-item-graphics" :src="boxBg[item.size]"/>
                <div class="shop__boxes-item-info">
                  <h3>{{item.name}} <span>({{item.amount}} items)</span></h3>
                  <prismic-rich-text :field="item.description"/>
                </div>
                <div class="shop__boxes-item-price center">
                  <h4>${{item.price}}</h4>
                  <p><strong>${{item.shipping}}</strong> shipping</p>
                  <router-link class="button" @click.native="selectBox(item)"
                  :to="`/shop/${item.name.toLowerCase().replace(/ +/g, '-')}`" >
                    SELECT THIS BOX
                  </router-link>
                </div>
              </div>
            </div>
        </div>
        <ShopCheckout 
          v-if="toggleCheckout"
          :selectedBox="selectedBox"
          :payment_instructions="payment_instructions"
          :payment_services="payment_services"
          :payment_content="payment_content"
          :price="selectedPrice"
        />
  </section>
</template>
<script>
import ShopCheckout     from '@/components/ShopCheckout';
import BOX_BG_SMALL     from '@/assets/box-small-bg.png';
import BOX_BG_LARGE     from '@/assets/box-large-bg.png';

export default {
  name: 'Shop',
  components: {
    ShopCheckout
  },
  watch:{
    '$route' (to, from){
      this.toggleCheckout = this.$route.params.id ? true : false;
    }
  },
  data() {
    return {
      toggleCheckout: false,
      selectedBox: "",
      selectedPrice: {
        base: 0,
        shipping: 0
      },
      banner: {},
      boxes: [],
      payment_instructions: [],
      payment_content: [],
      payment_services: "",
      shop_content: null,
      shop_header: null,
      boxBg: {
        small: BOX_BG_SMALL,
        large: BOX_BG_LARGE
      }
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
    },
    setPrice(base, shipping){
      this.selectedPrice = { base, shipping }
    },
    checkRoute(){
      if(this.$route.params.id){
        this.$router.push("/shop");
      }
    }
  },
  created(){
    this.assignContent();
    this.checkRoute();
  }
}

</script>
<style lang="scss" scoped>
.shop {
  padding-top: 0;
  &__boxes {
    &-item {
      width: 40vw;
      margin: 0 12px;
      border: 1px $border solid;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      padding-bottom: 2rem;
      background-color: white;
      &-info, &-price{
        box-sizing: border-box;
        padding: 1rem 2rem 0;
      }
      &-info{
        flex: 1;
        align-items: flex-start;
      }
      h3 {
        font-size: $font-size-m;
      }
      img{
        width: 100%;
      }
      &-image{
        height: 32vh;
        object-fit: cover;
      }
      &-price {
        border-top: 1px $border solid;
        padding-top: 12px;
        flex-direction: column;

        p {
          margin: 0
        }

        .button {
          margin-top: 12px;
        }
      }
    }
    @include desktop{
      &-item{
        width: 32vw;
      }
    }
    @include tablet {
      flex-direction: column;

      &-item {
        width: 100%;
        margin: 12px 0;
      }
    }
  }
}
</style>