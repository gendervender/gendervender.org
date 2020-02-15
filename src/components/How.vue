<template>
  <div id="how">
    <div class="container center">
        <prismic-rich-text class="title" v-if="howFields.title" :field="howFields.title"/>
        <prismic-rich-text class="text desc" v-if="howFields.description" :field="howFields.description"/>
        <div
            v-for="(block, index) in howFields.blocks"
            class="how-block"
        >
            <div class="left">
                <prismic-rich-text class="block-title" v-if="block.block_title" :field="block.block_title"/>
                <prismic-rich-text class="text block-desc" v-if="block.block_description" :field="block.block_description"/>
            </div>
            <div class="right">
                <div class="background" :style="`background-image: url(${block.block_image.url})`" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    howFields: Object
  }
}
</script>

<style scoped lang="scss">
    #how{
        background-color: rgba($text, 0.05);
        padding: 20vh 0;
    }
    .container{
        flex-direction: column;
    }
    .title{
        font-size: 1.2rem;
        margin-bottom: 12px;
    }
    .desc{
        margin-bottom: 100px;
    }
    .how-block{
        background: white;
        height: 90vh;
        width: 100%;
        margin-bottom: 100px;
        display: flex;
        flex-direction: row;
        .left,.right{
            flex: 1;
            position: relative;
        }
        .left{
            padding: 6%;
            box-sizing: border-box;
            .block-title{
                font-size: 0.8rem;
                font-weight: 500;
                margin-bottom: 20px;
            }
            .block-desc{
               font-size: 0.92rem;
            }
        }
        .background{
            z-index: 0;
        }
    }
</style>
