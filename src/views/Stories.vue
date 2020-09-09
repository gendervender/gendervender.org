<template>
  <div>
    <StoriesGrid :stories="stories" v-if="!viewMode"/>
    <StoriesView :data="currentStory" :moreStories="moreStories" v-if="viewMode && dataReady" />
    <LoadScreen  :isLoading="!dataReady && viewMode"/>
  </div>
</template>

<script>
import StoriesGrid from '@/components/StoriesGrid';
import StoriesView from '@/components/StoriesView';
import LoadScreen from '@/components/LoadScreen';

export default {
  name: 'Stories',
  components: {
      StoriesGrid,
      StoriesView,
      LoadScreen
  },
  data(){
    return{
      stories: [],
      viewMode: false,
      currentStory: null,
      moreStories: [],
      dataReady: false
    }
  },
  watch:{
    '$route' (to, from){
      this.checkRouteParams();
    }
  },
  methods: {
    checkRouteParams() {
      if (this.$route.params.id && this.stories.length > 0){
        this.dataReady = false;
        this.assignData(this.$route.params.id);
      }else if (this.$route.params.id && this.stories.length <= 0) {
        this.getContent();
      }else{
        this.viewMode = false;
      }
    },
    getContent(){
      this.stories = this.$store.state.stories;
      this.checkRouteParams();
    },
    assignData(storyId) {
      let found = this.stories.find(s => s.uid == storyId);
      if (found) {
        this.viewMode = true;
        this.currentStory = found;
        let index = this.stories.findIndex(s => s.uid == storyId);
        let curIndex = index+1;
        let moreStories = [];
        while (moreStories.length < 3){
            if(curIndex >= this.stories.length){
                curIndex = 0;
            }
            if (curIndex !== index){
                moreStories.push(this.stories[curIndex])
            }
            curIndex++;
        }
        this.moreStories = moreStories;
        Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
          this.dataReady = true;
        });
      }else{
        this.$router.push('/404');
      }
    }
  },
  created(){
    this.getContent();
  }
}
</script>