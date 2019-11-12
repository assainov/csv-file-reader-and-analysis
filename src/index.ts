import MatchFileReader from './components/MatchFileReader';
import Summary from './components/Summary';
import WinsAnalysis from './components/analyzers/WinsAnalysis';
// import ConsoleReport from './components/reports/ConsoleReport';
import HtmlReport from './components/reports/HtmlReport';

// using static method
const matchReader = MatchFileReader.fromCsv('football.csv');
matchReader.load();

// using proper composition
const summary = new Summary(new WinsAnalysis('Chelsea'), new HtmlReport());
summary.produceReport(matchReader.data);
