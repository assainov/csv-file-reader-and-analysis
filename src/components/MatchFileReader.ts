import { MatchResult } from '../enums/MatchResult';
import { dateStringToDate } from '../utils/dateStringToDate';
import { MatchData } from '../aliases/MatchData';
import CsvFileReader from './CsvFileReader';

interface DataReader {
    read(): void;
    data: string[][];
}

export default class MatchFileReader {
    constructor(public reader: DataReader) {}

    // Shortcut for initializing an instance of MatchFileReader with CsvFileReader
    static fromCsv(filename: string): MatchFileReader {
        return new MatchFileReader(new CsvFileReader(filename));
    }

    data: MatchData[] = [];

    load(): void {
        this.reader.read();

        this.data = this.reader.data.map(
            (row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ];
            }
        );
    }
}
