<template>
  <div class="page-divider">
    <div class="background" :style="{ 'background-image': `url(${imageUrl})` }"/>
    <div class="overlay" style="opacity: 0.4"/>
  </div>
</template>

<script>
export default {
  name: 'PageDivider',
  props: {
    imageUrl: String
  }
}
</script>

<style scoped lang="scss">
    .page-divider{
        position: relative;
        height: 60vh;
        width: 100%;
    }
</style>
