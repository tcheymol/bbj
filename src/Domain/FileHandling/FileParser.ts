export interface FileParser {
    parse(fileRows: string[]): object;
}
