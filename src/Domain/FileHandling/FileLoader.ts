import { FileParser } from "./FileParser";

export class FileLoader {
    reader: FileReader;
    parser: FileParser;
    fileContent: Array<any>;

    constructor(parser: FileParser) {
        this.reader = new FileReader();
        this.parser = parser;
        this.fileContent = [];
    }

    async read(file: File): Promise<void> {
        return new Promise((resolve, reject) => {
            if (file && file.type === 'text/plain') {
                this.reader.onload = (event) => {
                    if (!event.target) return;
                    const text = event.target.result?.toString();
                    if (!text) return;
                    const linesArray = text.split(/\r?\n/); // prend en compte \n et \r\n
                    this.fileContent = linesArray;

                    resolve();
                };

                this.reader.onerror = reject;
                this.reader.readAsText(file);
            }
        });
    }

    parse(): any {
        return this.parser.parse(this.fileContent);
    }
}
