export function toTitleCase(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
