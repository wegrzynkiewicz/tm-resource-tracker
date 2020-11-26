import bgLandscapeWebp from '../images/bg-landscape.conv.jpg?webp';
import bgPortraitWebp from '../images/bg-portrait.conv.jpg?webp';
import pointsWebp from '../images/points.conv.png?webp';

export function preloadImage(options) {
    const link = document.createElement("link");
    link.setAttribute('rel', 'preload')
    link.setAttribute('as', 'image');
    for (const [key, value] of Object.entries(options)) {
        link.setAttribute(key, value.toString());
    }
    document.head.append(link);
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

    preloadImage({href: pointsWebp});
}
