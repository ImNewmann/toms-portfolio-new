// store.js
import Vue from 'vue'
import Vuex from 'vuex';
import { endPoint } from '@/constants/endpoint.js';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    posts: [],
    // pages: [],
  },

  actions: {
    async loadPosts({ commit }){
      const response = await fetch (`${endPoint}/posts`);
      let posts = await response.json();
      commit('SET_POSTS', posts);
    },

    // async loadPages({ commit }){
    //   const response = await fetch (`${endPoint}/pages`);
    //   let pages = await response.json();
    //   commit('SET_PAGES', pages);
    // },
  },

  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts;
    },

    // SET_PAGES (state, pages) {
    //   state.pages = pages;
    // }
  },
});