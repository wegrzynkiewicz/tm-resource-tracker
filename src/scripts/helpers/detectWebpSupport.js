const feature = "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==";

export async function detectWebpSupport() {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = function () {
            const result = (image.width > 0) && (image.height > 0);
            result ? resolve() : reject();
        };
        image.onerror = function () {
            reject();
        };
        image.src = "data:image/webp;base64," + feature;
    });
}
