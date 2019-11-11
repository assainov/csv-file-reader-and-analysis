import MatchFileReader from './components/MatchFileReader';
import CsvFileReader from './components/CsvFileReader';
import { MatchResult } from './enums/MatchResult';

const csvReader = new CsvFileReader('football.csv');

const matchReader = new MatchFileReader(csvReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
        manUnitedWins++;
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
        manUnitedWins++;
}

console.log(`Manchester United won ${manUnitedWins} games`);
