<template>
  <section id="shop" class="shop">
        <div class="banner" v-if="!toggleCheckout">
          <prismic-image :field="banner" />
        </div>
        <div class="container" v-if="!toggleCheckout">
            <prismic-rich-text :field="shop_header" v-if="shop_header"/>
            <prismic-rich-text :field="shop_content" v-if="shop_content"/>
            <div class="shop__boxes">
              <div
                class="shop__boxes-item" 
                v-for="item in boxes"
                :key="`box-${item.name}`"
              >
                <div class="shop__boxes-item-image">
                  <prismic-image :field="item.image"/>
                </div>
                <div class="shop__boxes-item-info">
                  <h3>{{item.name}} <span>({{item.amount}} items)</span></h3>
                  <prismic-rich-text :field="item.description"/>
                  <h4>${{item.price}}</h4>
                  <span><strong>${{item.shipping}}</strong> shipping</span>
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
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1.8fr;
      margin: 4rem 0;
      border: 1px $border solid;
      border-radius: 8px;
      box-sizing: border-box;
      background-color: white;
      &-info{
        flex: 1;
        align-items: flex-start;
        padding: 3rem;
        box-sizing: border-box;
      }
      h3 {
        font-size: $font-size-m;
      }
      &-image{
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      div>span{
        display: block;
        margin-bottom: 2rem;
      }
    }
    @include tablet {
      &-item{
        grid-template-columns: 1fr;
        &-image{
          height: 36vh;
        }
      }
    }
  }
}
</style>