export const getValue = (stringData: string): number => {
    const value: number = +stringData.slice(stringData.indexOf(' ')).trim();
    if (value) {
        return value;
    }
    return 0;
}