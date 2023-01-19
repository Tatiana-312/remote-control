export const getCommand = (stringData: string): string => {
    const command: string = stringData.slice(stringData.indexOf('_') + 1, stringData.indexOf(' '));
    return command;
}