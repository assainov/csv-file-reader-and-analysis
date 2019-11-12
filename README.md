# Generic CSV Reader and Analysis Tool - TypeScript

## Getting started
1. **Install**
```shell
   npm install

```
2. **Run the local bundler**
```shell
   npm start

```
3. **How to use**
```javascript
   import MatchFileReader from './components/MatchFileReader';
   import Summary from './components/Summary';
   import WinsAnalysis from './components/analyzers/WinsAnalysis';
   import HtmlReport from './components/reports/HtmlReport';

   const matchReader = MatchFileReader.fromCsv('football.csv');
   matchReader.load();

   const summary = new Summary(new WinsAnalysis('Chelsea'), new HtmlReport());
   summary.produceReport(matchReader.data);

```

In the case above, we use HtmlReport class, but we can easily swap it with another report generator. Same goes for the WinsAnalysis class, which can be replaced with another analysis type.

Finally, CsvFileReader can be used not only to parse Football match data, but any other csv file with different structure. To use it for another purpose, a new class needs to be created with definitions on parsing the new structure.