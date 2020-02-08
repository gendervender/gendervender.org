<template>
  <div id="contact">
        <div class="banner" v-bind:style="{ 'background-image': `url(${fields.contact_image})` }"/>
        <prismic-rich-text class="text title" v-if="fields.contact_title" :field="fields.contact_title"/>
        <prismic-rich-text class="text body" v-if="fields.contact_description" :field="fields.contact_description"/>
        <div class="center container">
            <form name="contact_form">
                <div class="form-half">
                    <label>First Name *</label>
                    <input name="first_name" type="text"/>
                </div>
                <div class="form-half">
                    <label>Last Name *</label>
                    <input name="last_name" type="text"/>
                </div>
                <div class="form-full">
                    <label>Email *</label>
                    <input name="email" type="text"/>
                </div>
                <div class="form-full">
                    <label>Message *</label>
                    <textarea name="message"/>
                </div>
                <button class="button" v-on:click="handleForm">
                    Submit
                </button>
                <p class="form-message" :class="{'form-message-error': !formStatus.sent}">{{formStatus.message}}</p>
            </form>
        </div>
  </div>
</template>
<script>
export default {
  name: 'Contact',
  data() {
    return{
        fields: {
            contact_image: null,
            contact_title: null,
            contact_description: null
        },
        formStatus: {
            message: "",
            sent: false
        }
    }
  },
  methods: {
    async getContent(){ 
       const content = await this.$prismic.client.getSingle('contact');
       this.assignContent(content.data);
    },
    assignContent(data){
       this.fields = {
        contact_image: data.contact_image.url,
        contact_title: data.contact_title,
        contact_description: data.contact_description
       }
    },
    handleForm(e){
        e.preventDefault();
        const form = document.contact_form;
        const validated = this.formValidation(form);
        this.formStatus = {
            message: validated.message,
            sent: validated.status
        };
        if(validated){
            var url = "../mail.php";
            var request = new XMLHttpRequest();
            request.open('POST', url, true);
            request.onload = function() {
                this.formStatus = {
                    message: "Thank you for reaching out, your message has been sent!",
                    sent: true
                }
            };
            request.onerror = function() {
                this.formStatus = {
                    message: "There was an error sending this message, please try again later.",
                    sent: false
                }
            };
            request.send(new FormData(form));
            e.preventDefault();
        }
    },
    formValidation(form){
        if(form.first_name.value == "" || form.last_name.value == ""){
            return{status: false, message: "Please fill out your name."}
        }else if(form.email.value == ""){
            return{status: false, message: "Please enter your email address."}
        }else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value) == false){
            return{status: false, message: "Please enter a valid email address."}
        }else if(form.message.value == ""){
            return{status: false, message: "Please enter a message."}
        }else{
            return{status: true, message: ""}
        }
    }
  },
  created(){
    this.getContent();
  }
}
</script>
<style lang="scss" scoped>
    #contact{
        margin-top: 10vh;
        min-height: 100vh;
        padding-bottom: 20vh;
        form{
            width: 50%;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            flex-direction: row;
            .form-message{
                width: 100%;
                text-align: left;
                color: $secondary;
            }
            .form-message-error{
                color: $primary;
            }
            input, textarea{
                outline: none;
                width: 100%;
                padding: 16px;
                font-size: 1rem;
                box-sizing: border-box;
                background-color: rgba($secondary, 0.12);
                border: 2px solid transparent;
                &:focus{
                    border-color: $secondary;
                }
            }
            textarea{
                resize: none;
                height: 240px;
                line-height: 1.8;
            }
            .form-full, .form-half{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-bottom: 24px;
            }
            .form-full{
                width: 100%;
            }
            .form-half{
                width: 48%;
                &:first-of-type{
                    margin-right: 4%;
                }
            }
            label{
                margin-bottom: 4px;
                font-size: 0.9rem;
            }
        }
        .title{
            font-size: 2.4rem;
            font-weight: 600;
        }
        .body{
            font-size: 1.2rem;
            margin: 0px 0px 52px 0px;
        }
        .banner{
            width: 100%;
            height: 44vh;
            background-size: cover;
            background-position: center;
            margin-bottom: 20vh;
        }
    }
</style>