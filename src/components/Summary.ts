import { MatchData } from '../aliases/MatchData';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    produce(report: string): void;
}

export default class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    produceReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);

        this.outputTarget.produce(output);
    }
}
