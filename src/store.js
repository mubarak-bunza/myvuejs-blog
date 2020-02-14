import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'

import router from './router/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null,
        articles: null
    },
    getters: {
        user(state){
            return state.user
        },
        isAuthenticated(state){
            return state.idToken !== null
        },
        articles(state){
            return state.articles
        }
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token,
            state.userId = userData.userId
        },
        storeUser(state, user){
            state.user = user
        },
        clearAuthData(state){
            state.idToken =null,
            state.userId = null
            state.user = null
        },
        fetchArticles(state, articlesData){
            state.articles = articlesData
        }
    },
    actions: {
        setLogoutTimer({dispatch}, expirationTime){
            setTimeout(()=>{
                dispatch('signout')
            }, expirationTime * 1000)
        },
        signup ({commit, dispatch}, payload){
            axios.post('/signupNewUser?key=AIzaSyAizwKKXANWZp4Exv-LUkDr4ylAldB2Kvo', {
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
            .then(res => {
                console.log(res)
                commit('authUser', {
                    token: res.data.idToken,
                    userId: res.data.localId
                })
                // const now = new Date()
                // const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
                // localStorage.setItem('token', res.data.idToken)
                // localStorage.setItem('userId', res.data.localId)
                // localStorage.setItem('expirationDate', expirationDate)
                dispatch('storeUser', payload) 
                // dispatch('setLogoutTimer', res.data.expiresIn)
                router.replace('/signin')
            }).catch(error => {
                console.log(error);
            });
        },
        signin ({commit, dispatch}, payload){
            axios.post('/verifyPassword?key=AIzaSyAizwKKXANWZp4Exv-LUkDr4ylAldB2Kvo', {
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
            .then(res => {
                console.log(res)
                const now = new Date()
                const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
                localStorage.setItem('token', res.data.idToken)
                localStorage.setItem('userId', res.data.localId)
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userEmail', payload.email)
                commit('authUser', {
                    token: res.data.idToken,
                    userId: res.data.localId
                })
                router.replace('/homepage')
                dispatch('setLogoutTimer', res.data.expiresIn)
            }).catch(error => {
                console.log(error);
            });
        },
        tyrAutoLogging({commit}){
            const token = localStorage.getItem('token');
            if(!token){
                return
            }
            const expirationDate = localStorage.getItem('expirationDate')
            const now = new Date()
            if(now >= expirationDate){
                return
            }
            const userId = localStorage.getItem('userId')
            commit('authUser', {
                token: token,
                userId: userId
            })
        },
        signout ({commit}){
            commit('clearAuthData')
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('expirationDate')
            localStorage.removeItem('userEmail')
            router.replace('/signin')
        },
        storeUser({commit, state}, userData){
            if(!state.idToken){
                return
            }
            globalAxios.post('https://myvuejs-blog.firebaseio.com/users.json'+'?auth='+state.idToken, userData)
            .then(res => {
                console.log(res)
            }).catch(error => {
                console.log(error)
            });
        },
        fetchUser({commit, state}){
            if(!state.idToken){
                return
            }
            globalAxios.get('https://myvuejs-blog.firebaseio.com/users.json'+'?auth='+state.idToken)
            .then(res => {
                console.log(res)
                const data = res.data
                let user = {}
                const uEmail = localStorage.getItem('userEmail')
                for(let key in data){
                    const person = data[key]
                    // user.id = key
                    // users.push(user)
                    if(uEmail == person.email){
                        user = person
                    }
                }
                console.log(user)
                // const userIndex = users.email.indexOf(uEmail)
                // console.log(userIndex)
                commit('storeUser', user)
            }).catch(error =>{
                console.log(error);
            })
        },
        storeArticle({state},userData){
            if(!state.idToken){
                return
            }
            globalAxios.post('https://myvuejs-blog.firebaseio.com/posts.json'+'?auth='+state.idToken, userData)
            .then(res => {
                console.log(res)
            }).catch(error => {
                console.log(error)
            });
        },
        fetchArticles({state, commit}){
            if(!state.idToken){
                return
            }
            globalAxios.get('https://myvuejs-blog.firebaseio.com/posts.json'+'?auth='+state.idToken)
            .then(res => {
                console.log(res)
                const data = res.data
                const articles = []
                for(let key in data){
                    const article = data[key]
                    article.id = key
                    articles.push(article)
                }
                console.log(articles)
                commit('fetchArticles', articles)
            }).catch(error =>{
                console.log(error);
            })
        }
    }
})