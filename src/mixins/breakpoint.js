// import { throttle } from 'throttle-debounce';

export const MOBILE = 'mobile';
export const TABLET = 'tablet';
export const DESKTOP = 'desktop';

export const breakpointMixin = {
    data: () => ({
        breakpoint: MOBILE,
    }),

    mounted() {
        this.breakpoint = this.getBreakpoint();
        window.addEventListener('resize', () => {
            this.breakpoint = this.getBreakpoint();
        });
    },

    methods: {
        // throttleResize() {
        //     throttle(200, true, () => {
        //         console.log('hi');
        //     });
        // },

        getBreakpoint() {
            if (window.innerWidth < 768) return MOBILE;
            if (window.innerWidth < 1024) return TABLET;
            if (window.innerWidth >= 1024) return DESKTOP;
        },
    },
};
