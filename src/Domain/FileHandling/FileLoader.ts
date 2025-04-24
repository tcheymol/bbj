import { FileParser } from "./FileParser";

export class FileLoader {
    reader: FileReader;
    fileContent: Array<any>;

    constructor() {
        this.reader = new FileReader();
        this.fileContent = [];
        
        this.reader.onload = (event) => {
            if (event.target) {
                const text = event.target.result?.toString(); 
                if (text && text.length > 0) {
                    this.fileContent = text.split('/\r?\n/');
                }
            }
        };
    }

    read(file: File): string[] {
        return [];
    }

    parse(parser: FileParser): Array<any> {
        return parser.parse(this.fileContent);
    }
}
