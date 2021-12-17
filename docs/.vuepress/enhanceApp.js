import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({Vue, options, router}) => {
    Vue.use(Element);
    router.beforeEach((to, from, next) => {
        if (typeof _hmt != "undefined") {
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
            }
        }
        next();
    });
};
