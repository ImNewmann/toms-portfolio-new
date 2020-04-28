import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta'

// Components
import FrontPage from '@/templates/FrontPage.vue';
import Post from '@/templates/Post.vue';
import Contact from '@/templates/Contact.vue';

Vue.use(Router);
Vue.use(VueMeta)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage,
    },
    {
      path: '/info',
      name: 'Contact',
      component: Contact,
    },
    {
      // Assuming you're using the default permalink structure for posts
      path: '/:postSlug',
      name: 'Post',
      component: Post,
    },
  ],
  mode: 'history',
  base: '',

  // Prevents window from scrolling back to top
  // when navigating between components/views
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.afterEach((to) => { // (to, from)
  if (to.path !== '/') {
    document.body.classList.add('page');
  } else {
    document.body.classList.remove('page');
  }
});

export default router;