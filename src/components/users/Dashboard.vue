<template>
  <div class="row">
        <div class="col-md-12 ">
            <div class="container ">
                <div class="row">
                    <div class="col-md">
                        <div class="jumbotron">
                            <div class="row align-items-center">
                                <div class="col-md">
                                    <h1 class="display-5">Welcome to myBlog!</h1>
                                    <p class="lead ">
                                        Please feel to signin or signup <span class="text-muted">(if you are new here)</span> to post/read amazing articles or get inspiration from the community of like minded.
                                    </p>
                                    <hr class="my-4">
                                    <!-- <p>You can sign in with following options</p> -->
                                    <!-- <v-btn class="ma-2" outlined color="indigo">
                                        <v-icon>mdi-gmail</v-icon> Gmail
                                    </v-btn>
                                    or
                                    <v-btn class="ma-2" outlined color="indigo">
                                        <v-icon>mdi-git</v-icon>  Github
                                    </v-btn> -->
                                </div>
                                <div class="col-md">
                                    <img src="@/assets/images/img1.svg" class="w-100" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row bg-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-md">
                                <p class="lead purple darken-2 text-center">
                                    Articles from the Community
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md">
                                <template>
                                    <v-card
                                        class="mx-auto"
                                        color=""
                                        max-width="400"
                                    >
                                        <v-card-title>
                                            <span class="title font-weight-light">Create a todo app using VueJs</span>
                                            <v-rating 
                                                v-model="rating" 
                                                size="20"
                                                background-color="blue lighten-3"
                                                color="blue"
                                            ></v-rating>
                                        </v-card-title>

                                        <v-card-text class="headline font-weight-bold">
                                            Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.
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
                                                    <v-list-item-title>Evan You</v-list-item-title>
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
                            
                            <div class="col-md">
                                <template>
                                    <v-card
                                        class="mx-auto"
                                        color=""
                                        max-width="400"
                                    >
                                        <v-card-title>
                                            <span class="title font-weight-light">How use Bootstrap Efficiently</span>
                                            <v-rating 
                                                v-model="rating" 
                                                size="20"
                                                background-color="blue lighten-3"
                                                color="blue"
                                            ></v-rating>
                                        </v-card-title>

                                        <v-card-text class="headline font-weight-bold">
                                            Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.
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
                                                    <v-list-item-title>Mark John</v-list-item-title>
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

                            <div class="col-md">
                                <template>
                                    <v-card
                                        class="mx-auto"
                                        color=""
                                        max-width="400"
                                    >
                                        <v-card-title>
                                            <span class="title font-weight-light">Learn PHP CRUD App</span>
                                                    <v-rating 
                                                        v-model="rating" 
                                                        size="20"
                                                        background-color="blue lighten-3"
                                                        color="blue"
                                                    ></v-rating>
                                            <template>
                                                <div class="">
                                                </div>
                                            </template>
                                        </v-card-title>

                                        <v-card-text class="headline font-weight-bold">
                                            Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.
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
                                                    <v-list-item-title>Jason Startham</v-list-item-title>
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
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                rating: 3
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