import bgLandscapeWebp from '../../images/bg-landscape.conv.jpg?webp';
import bgPortraitWebp from '../../images/bg-portrait.conv.jpg?webp';
import {appendLink} from "./appendLink";

export function preloadImage(options) {
    appendLink({
        rel: 'preload',
        as: 'image',
        ...options,
    });
}

export function preloadImages() {
    preloadImage({
        href: bgLandscapeWebp,
        media: '(orientation:landscape)',
    });

    preloadImage({
        href: bgPortraitWebp,
        media: '(orientation:portrait)',
    });
}
