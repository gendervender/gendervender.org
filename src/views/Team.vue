<template>
    <section id="team" v-if="members.length>0">
      <div class="container">
          <prismic-rich-text v-if="page_title" :field="page_title"/>
          <prismic-rich-text class="text" v-if="page_description" :field="page_description"/>
          <div class="members-container">
            <Card
              v-for="member in members"
              v-if="member.status == 'current'"
              :primary="member.name"
              :secondary="member.role"
              :description="member.description"
              :image="member.photo"
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
              :image="member.photo"
              :links="[{name: 'linkedin', url: member.linkedin.url},{name: 'email', url: member.email.url},{name: 'link', url: member.website.url}]"
            />
          </div>
      </div>
    </section>
</template>
<style lang="scss" scoped>
  #team{
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
      margin: 1rem 0 4rem 0;
      width: 60%;
    }
    @include tablet{
      .text{
        margin: 16px 0 24px 0;
        width: 100%;
      }
      .members-container{
        grid-template-columns: 1fr 1fr;
      }
    }
    @include mobile{
      .members-container{
        grid-template-columns: 1fr;
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
      page_title: null,
      page_description: null,
      members: []
    }
  },
  methods: {
    assignContent(){
      const data = this.$store.state.teamPage;
      Object.assign(this, data);
    }
  },
  created(){
    this.assignContent();
  }
}
</script>