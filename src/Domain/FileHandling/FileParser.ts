export interface FileParser {
    parse(fileRows: string[]): Array<any>;
}
