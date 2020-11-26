export function createLabel() {
    const chars = new Set();
    const $label = (text) => {
        for (const char of text.split('').filter(char => char !== ' ')) {
            chars.add(char);
        }
        return text;
    };
    $label.chars = chars;
    return $label;
}
