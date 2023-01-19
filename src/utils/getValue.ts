export const getValue = (stringData: string): number => {
    const value: number = +stringData.slice(stringData.indexOf(' ')).trim();
    return value;
}