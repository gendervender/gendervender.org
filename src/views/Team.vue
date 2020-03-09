<template>
    <section id="team" v-if="members.length>0">
      <div class="container">
          <prismic-rich-text v-if="title" :field="title"/>
          <prismic-rich-text class="text" v-if="description" :field="description"/>
          <div class="members-container">
            <Card
              v-for="member in members"
              v-if="member.status == 'current'"
              :primary="member.name"
              :secondary="member.role"
              :description="member.description"
              :imageURL="member.photo.url"
              :links="[{name: 'linkedin', url: member.linkedin.url},{name: 'email', url: member.email.url},{name: 'link', url: member.website.url}]"
            />
          </div>
          <h5>Past Members</h5>
          <div class="members-container">
            <Card
              v-for="member in members"
              v-if="member.status == 'past'"
              :primary="member.name"
              :secondary="member.role"
              :description="member.description"
              :imageURL="member.photo.url"
              :links="[{name: 'linkedin', url: member.linkedin.url},{name: 'email', url: member.email.url},{name: 'link', url: member.website.url}]"
            />
          </div>
      </div>
    </section>
</template>
<style lang="scss" scoped>
  #team{
    padding: 16vh 0;
    .members-container{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 32px;
      column-gap: 24px;
    }
    h5{
      margin: 6rem 0 2rem 0;
    }
    .text{
      margin: 1rem 0 6rem 0;
      width: 60%;
    }
    @include mobile{
      .text{
        width: 100%;
      }
      .members-container{
        grid-template-columns: 1fr;
      }
    }
    @include tablet{
      .text{
        width: 100%;
      }
      .members-container{
        grid-template-columns: 1fr 1fr;
      }
    }
  }
</style>
<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Team',
  components: {
    Card
  },
  data(){
    return{
      title: null,
      description: null,
      members: []
    }
  },
  methods: {
    async getContent(){ 
       const content = await this.$prismic.client.getSingle('team');
       this.assignContent(content.data);
    },
    assignContent(data){
      this.title = data.page_title;
      this.description = data.page_description;
      this.members = data.members;
    }
  },
  created(){
    this.getContent();
  }
}
</script>