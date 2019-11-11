import { MatchResult } from '../enums/MatchResult';
import { dateStringToDate } from '../utils/dateStringToDate';

interface DataReader {
    read(): void;
    data: string[][];
}

type MatchData = [Date, string, string, number, number, MatchResult, string];

export default class MatchFileReader {
    constructor(public reader: DataReader) {}

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
