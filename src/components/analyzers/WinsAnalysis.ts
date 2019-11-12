import { Analyzer } from '../Summary';
import { MatchData } from '../../aliases/MatchData';
import { MatchResult } from '../../enums/MatchResult';

export default class WinsAnalysis implements Analyzer {
    constructor(public team: string) {}

    run(matches: MatchData[]): string {
        let teamWins = 0;

        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult.HomeWin)
                teamWins++;
            else if (
                match[2] === 'Man United' &&
                match[5] === MatchResult.AwayWin
            )
                teamWins++;
        }

        return `${this.team} won ${teamWins} games`;
    }
}
