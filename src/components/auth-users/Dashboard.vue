<template>
  <div class="row">
        <div class="col-md-3">
            <app-sidebar />
        </div>
        <div class="col-md-9 ">
            <div class="container">
                <div class="row">
                    <div class="col-md">
                        <div class="jumbotron mt-n3">
                            <div class="row">
                                <div class="col-md-6">
                                    <form>
                                        <v-col cols="12 py-0" md="12">
                                            <v-text-field 
                                                label="Title of the Article" 
                                                v-model="articleData.title"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12 py-0" md="12">
                                            <v-textarea
                                            v-model="articleData.article"
                                            label="Article"
                                            counter="500"
                                            ></v-textarea>
                                        </v-col>
                                        <v-col cols="12 py-0" md="12">
                                            <v-btn v-if="!editStatus" @click.prevent="postArticle" type="submit" class="ma-2" outlined>Post</v-btn>
                                            <v-btn v-else @click.prevent="updateArticle" type="submit" class="ma-2" outlined>Update</v-btn>
                                        </v-col>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 " v-for="(post, index) in posts" :key="index">
                        <template v-if="post.author == user.name">
                            <v-card
                                class="mx-auto"
                                color=""
                                width="100%"
                            >
                                <v-card-title>
                                    <p class="title font-weight-light">{{post.title}} </p> 
                                    
                                    <v-rating 
                                        v-model="post.rating" 
                                        size="18"
                                        background-color="blue lighten-3"
                                        color="blue"
                                        class=""
                                    ></v-rating>
                                </v-card-title>

                                <v-card-text class="headline font-weight-bold">
                                    {{post.article}}
                                    <br />
                                    <br />
                                    <a class="btn" @click="editArticle(index)">Edit</a>
                                    <a class="btn" @click="deleteArticle(post.id)">Delete</a>
                                </v-card-text>
                                    <hr>
                                    <!-- <v-divider :inset="true"></v-divider> -->
                                <v-card-actions>
                                    <v-list-item class="grow">
                                        <v-list-item-avatar color="grey darken-3">
                                        <v-img
                                            class="elevation-6"
                                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                        ></v-img>
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title>{{post.author}}</v-list-item-title>
                                        </v-list-item-content>

                                        <!-- <v-row
                                        align="center"
                                        justify="end"
                                        > -->
                                            <v-icon class="">mdi-heart</v-icon>
                                            <span class="subheading">56</span>
                                            <span class="mx-2">·</span>
                                            <v-icon class="">mdi-share-variant</v-icon>
                                            <span class="subheading">4</span>
                                        <!-- </v-row> -->
                                    </v-list-item>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </div>
                    
                </div>
            </div>           
        </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/auth-users/Sidebar.vue'
    // import firebase from 'firebase'
    // import { db } from '@/main.js'
    
    export default {
        components: {
            'app-sidebar': Sidebar
        },
        data(){
            return {
                updateId: null,
                editStatus: false,
                articleData: {
                    title: null,
                    article: null,
                    rating: 0,
                }
            }
        },
        computed: {
            user(){
                return !this.$store.getters.user ? false : this.$store.getters.user
            },
            posts(){
                return !this.$store.getters.articles ? false : this.$store.getters.articles
            }
        },
        created(){
            this.$store.dispatch('fetchUser')
            this.$store.dispatch('fetchArticles')
        },
        methods: {
             postArticle () {
            //     const createdAt = new Date()
            //     db.collection('blog-posts').doc('post').add({ title, article })
            //     // Clear values
            //     this.title = ''
            //     this.article = ''
               
                this.articleData.userId = this.user.id
                this.articleData.author = this.user.name
                this.$store.dispatch('storeArticle', this.articleData)
                this.title = null
                this.article = null
                
            },
            editArticle(index){
                this.editStatus = true
                // this.articleData.title = this.posts[index].title 
                // this.articleData.article = this.posts[index].article
                // this.updateId = this.posts[index].id
                this.articleData = this.posts[index]
            },
            updateArticle(){
                this.articleData.userId = this.user.id
                this.articleData.author = this.user.name
                this.$store.dispatch('updateArticle', this.articleData)
            },
            deleteArticle(id){
                this.$store.dispatch('deleteArticle', id)
            }
        }
    }
</script>

<style lang="scss" scoped>

    .create-account {
      border: 2px solid rgb(20, 20, 187);
      padding: 3px 10px;

      &:hover {
        background-color: rgb(229, 229, 236);
      }
  }
</style>