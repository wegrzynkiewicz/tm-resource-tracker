export function appendLink(options) {
    const link = document.createElement("link");
    for (const [key, value] of Object.entries(options)) {
        link.setAttribute(key, value.toString());
    }
    document.head.append(link);
}
