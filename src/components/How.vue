<template>
  <div id="hiw" class="home-block hiw">
    <div class="container center">
        <prismic-rich-text v-if="hiw_header" :field="hiw_header"/>
        <prismic-rich-text v-if="hiw_content" :field="hiw_content"/>
        <div class="hiw__wrapper">
            <div class="hiw__block center" v-for="(item,key) in hiw_items" :key="`hiw-step-${key+1}`">
                <div class="hiw__block-text">
                <div class="hiw__block-text-header">
                    <span>{{key+1}}.</span>
                    <prismic-rich-text :field="item.header"/>
                </div>
                    <prismic-rich-text class="hiw__block-text-content" :field="item.content"/>
                </div>
                <prismic-image class="hiw__block-image" :field="item.image"/>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HIW',
  props: {
      hiw_header: Array,
      hiw_content: Array,
      hiw_items: Array
  }
}
</script>

<style lang="scss">
    .hiw{
        &__wrapper{
            margin-bottom: 8%;
            width: 90%;
        }
        &__block{
            display: flex;
            flex-direction: row;
            &-text{
                width: 55%;
                box-sizing: border-box;
                padding: 0 4%;
                position: relative;
                &-header{
                    *{
                        display: inline;
                        line-height: 1;
                    }
                }
                span{
                    font-size: $font-size-xxl * 1.5;
                    font-weight: 600;
                    color: darken($site-bg, 10%);
                    margin-right: 1rem;
                }
                &-content{
                    padding-left: $font-size-xxl * 1.5 + 0.6;
                }
            }
            &-image{
                width: 45%;
                object-fit: contain;
            }
            &:nth-child(even){
                flex-direction: row-reverse;
            }
        }
    }
</style>
