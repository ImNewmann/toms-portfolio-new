import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

// Components
import FrontPage from '@/templates/FrontPage.vue';
import Post from '@/templates/Post.vue';
import Contact from '@/templates/Contact.vue';

Vue.use(Router);
Vue.use(VueMeta);

const router = new Router({
    routes: [
        {
            path: '/info',
            name: 'Contact',
            component: Contact,
        },
        {
            path: '/',
            name: 'FrontPage',
            component: FrontPage,
            children: [
                {
                    path: '/:postSlug',
                    name: 'Post',
                    component: Post,
                    props: true,
                    meta: {
                        showModal: true,
                    },
                },
            ],
        },
    ],
    mode: 'history',
    base: '',

    // Prevents window from scrolling back to top
    // when navigating between components/views
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition;
    //     } else {
    //         return { x: 0, y: 0 };
    //     }
    // },
});

router.afterEach((to) => {
    // (to, from)
    if (to.path === '/info') {
        document.body.classList.add('page');
    } else {
        document.body.classList.remove('page');
    }

    if (to.name === 'Post') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

export default router;
