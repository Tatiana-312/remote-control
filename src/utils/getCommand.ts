export const getCommand = (stringData: string): string => {
    let command: string;

    if (stringData.split(' ').length === 1) {
        command = stringData;
    } else {
        command = stringData.slice(0, stringData.indexOf(' '));
    }

    return command.trim();
}