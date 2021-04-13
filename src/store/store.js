import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
export const store=new Vuex.Store({
    state:{
        postList:[],
    },
    getters:{   
        getPostList(state){
            return [...state.postList]
        }   
    },
    mutations:{
        setPostList(state,value){
            state.postList=value
        }
    },
    actions:{
        async loadPostList({commit}){
           return await  axios.post()
            .then(Response=>{
                let arr;
                commit("setPostList",arr)               
                //console.log(arr)
                console.log(Response)
            })
        }
    }
})