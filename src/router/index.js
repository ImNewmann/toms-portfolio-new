import Vue from 'vue';
import Router from 'vue-router';

// Components
import FrontPage from '@/templates/FrontPage.vue';
import Post from '@/templates/Post.vue';
import Contact from '@/templates/Contact.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage,
    },
    {
      path: '/about-me',
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
  let path = to.path === '/' ? 'Creative Director' : to.path;
  if (to.path !== '/') {
    document.body.classList.add('page');
    path = path.slice(1).charAt(0).toUpperCase() + path.slice(2).split('-').join(' ');
  } else {
    document.body.classList.remove('page');
  }
  document.title = `Tom Newman - ${path}`
});

export default router;