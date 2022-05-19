export function isNullOrEmpty(array: any[]): boolean {
    return array == undefined || array == null || array.length > 0;
}

export function getMegaBytes(bytes: number): string {
    return (bytes / 1000000).toPrecision(2);
}

export function getLocalDateTime(date: Date): string {
    return date.toLocaleDateString().concat(' ').concat(date.toLocaleTimeString());
}