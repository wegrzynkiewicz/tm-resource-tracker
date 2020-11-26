import Vue from 'vue';
import App from '../components/App';
import {default as mainStyles} from '../styles/main.scss';
import {preloadImages} from "./preloadImages";
import {createShortcut} from "./createShortcut";

async function bootstrap() {
    Vue.prototype.$shortcut = createShortcut;
    Vue.prototype.$styles = {
        ...mainStyles,
    };

    return new Promise((resolve) => {
        new Vue({
            el: '#app',
            render: h => h(App),
            mounted() {
                resolve();
            }
        });
    })
}

(async () => {
    await Promise.all([
        preloadImages(),
        bootstrap(),
    ]);
    document.dispatchEvent(new Event('prerender-ready'))
})();

document.currentScript.remove();
