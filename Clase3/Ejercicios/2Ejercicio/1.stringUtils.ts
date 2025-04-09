export function capitalize(txt: string): string {
    if (txt.length === 0) return txt;
    return txt.charAt(0).toUpperCase() + txt.slice(1);
}


export function reverse(txt: string): string {
    return txt.split("").reverse().join("");
}