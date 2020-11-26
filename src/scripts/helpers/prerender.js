import Vue from 'vue';
import App from '../../components/App';
import {default as mainStyles} from '../../styles/main.scss';
import {preloadImages} from "./preloadImages";
import {createLabel} from "./createLabel";
import {appendLink} from "./appendLink";
import {createShortcut} from "./createShortcut";

const $label = createLabel();

async function bootstrap() {
    Vue.prototype.$shortcut = createShortcut();
    Vue.prototype.$label = $label;
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

const query = new URLSearchParams();
$label('0123456789+-');
query.set('family', 'Goldman');
query.set('text', [...$label.chars.keys()].map(s => s.toString().toUpperCase()).sort().join(''));
query.set('display', 'swap');

appendLink({
    rel: 'preload',
    as: 'style',
    href: `https://fonts.googleapis.com/css?${query.toString()}`,
    onload: `this.setAttribute('rel', 'stylesheet')`,
})
