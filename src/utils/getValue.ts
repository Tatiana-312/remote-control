export const getValue = (stringData: string): number[] => {
    let value: number;
    let arrData = stringData.split(' ');
    if (arrData.length === 3) {
        return [+arrData[1], +arrData[2]]
    } else {
        value = +stringData.slice(stringData.indexOf(' ')).trim();
    }
    
    if (value) {
        return [value];
    }
    return [];
}