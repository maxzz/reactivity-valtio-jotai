export function remove<T>(data: T[], index: number): T[] {
    return data.filter((item, idx) => idx !== index);
}

export function swap<T>(data: T[], indexA: number, indexB: number): void {
    data[indexA] = [data[indexB], (data[indexB] = data[indexA])][0];
}
