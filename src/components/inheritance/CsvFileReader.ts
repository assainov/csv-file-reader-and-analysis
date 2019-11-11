import fs from 'fs';

export default abstract class CsvFileReader<T> {
    constructor() {}
    abstract mapRow(row: string[]): T;
    abstract filename: string;

    data: T[] = [];

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string): string[] => row.split(','))
            .map(this.mapRow);
    }
}
