<template>
  <section id="products">
  <div class="container center products">
    <prismic-rich-text :field="title"/>
    <prismic-rich-text :field="content"/>
    <div class="products__wrapper">
        <div class="products__info center" v-if="windowWidth > 1023">
            <prismic-image
              v-for="(item, index) in items"
              :field="item.image_product"
              :style="[item.product_id === 'gender-vender' ? {'width': '100%'} : {'width': '40%'}]"
              :class="index === selected ? 'products__info-show' : 'products__info-hide'
            "/>
            <div
              class="products__info-text"
              v-for="(item, index) in items"
              v-if="item.product_id !== 'gender-vender'"
              :class="index === selected ? 'products__info-show' : 'products__info-hide' "
            >
                <h3>{{item.business_name}}</h3>
                <prismic-rich-text :field="item.product_description" />
                <router-link
                  class="button"
                  :to="`/stories/${item.product_id}`">
                    READ STORY
                </router-link>
            </div>
        </div>
        <div class="products__selection row center" v-if="windowWidth > 1023">
            <div
                v-for="(item, key) in items" @click="selectProduct(key)"
                v-bind:class="{
                    'products__selection-logo products__selection-logo-selected center': selected === key,
                    'products__selection-logo center': selected !== key
                }"
            >
                <img v-if="item.image_logo.url" :src="item.image_logo.url"/>
                <span v-else>{{item.business_name}}</span>
            </div>
        </div>
        <div class="products__image__mobile" v-if="windowWidth <= 1023">
          <prismic-image
            v-for="(item, index) in items"
            :field="item.image_product"
            :class="index === selected ? 'products__info-show' : 'products__info-hide'
          "/>
        </div>
        <div class="products__selection__mobile row" v-if="windowWidth <= 1023">
          <button @click="handleOnClick(-1)" class="button">&lt;</button/>
          <div class="products__selection__mobile-info">
            <h3>{{items[selected].business_name}}</h3>
          </div>
          <button @click="handleOnClick(1)" class="button">&gt;</button>
        </div>
        <div class="products__info__mobile center" v-if="windowWidth <= 1023">
            <prismic-rich-text :field="items[selected].product_description" />
            <router-link
              class="button"
              v-if="items[selected].product_id !== 'gender-vender'"
              :to="`/stories/${items[selected].product_id}`">
              READ STORY
            </router-link>
        </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return{
      windowWidth: window.innerWidth,
      title: [],
      content: [],
      items: [],
      selected: 0
    }
  },
  methods: {
    selectProduct(index){
      this.selected = index;
    },
    resizeHandler(){
      this.windowWidth = window.innerWidth;
    },
    handleOnClick(value){
      const updatedValue = this.selected + value;
      const itemsLength = this. items.length;
      this.selected = updatedValue >= itemsLength ? 0 : updatedValue <= 0 ? itemsLength - 1 : updatedValue;
    },
  },
  created(){
      const data = this.$store.state.products;
      this.title = data.products_title;
      this.content = data.products_content;
      this.items = data.product_items;
  },
  mounted() {
    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  },
}
</script>

<style lang="scss">
.products {
  &__wrapper {
    margin: 4% 0%;
    width: 100%;
  }

  &__info {
    width: 80%;
    margin: auto;
    height: 60vh;
    position: relative;
    img, &-text{
      transition: opacity 0.4s;
      position: absolute;
      top: 0%;
    }
    img {
      left: 0;
      height: 100%;
      object-fit: cover;
    }
    &-show{
      opacity: 1;
    }
    &-hide{
      opacity: 0;
    }
    &-text {
      right: 0;
      height: 100%;
      width: 60%;
      box-sizing: border-box;
      padding: 8%;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }

  &__selection {
    margin-top: 32px;
  }

  &__selection-logo {
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin: 0% 12px;
    border: 2px transparent solid;
    padding: 12px;
    background-color: white;
    span {
      text-align: center;
      display: block;
      font-weight: 600;
      line-height: 1.4;
      font-size: $font-size-xs;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &:hover,
    &:focus {
      border-color: $secondary;
    }
  }

  &__selection-logo-selected {
    border-color: $secondary;
  }

  &__selection__mobile{
    margin-top: 24px;
    width: 90%;
    margin: 12px 5%;
    align-items: center;
    justify-content: space-between;
    .button{
      line-height: 0;
      padding: 0;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
  }
  &__image__mobile, &__info__mobile{
    width: 90%;
    margin: 0 5%;
  }
  &__image__mobile{
    height: 40vh;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__info__mobile{
    p{
      margin-top: 0%;
    }
    text-align: center;
    flex-direction: column;
  }
}
</style>
