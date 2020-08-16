<template>
  <div>
    <StoriesGrid :stories="stories" v-if="!viewMode"/>
    <StoriesView :data="currentStory" :moreStories="moreStories" v-if="viewMode" />
  </div>
</template>

<script>
import StoriesGrid from '@/components/StoriesGrid';
import StoriesView from '@/components/StoriesView';

export default {
  name: 'Stories',
  components: {
      StoriesGrid,
      StoriesView
  },
  data(){
    return{
      stories: [],
      viewMode: false,
      currentStory: null,
      moreStories: []
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