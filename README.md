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
    import CsvFileReader from './components/CsvFileReader';

    const csvReader = new CsvFileReader('football.csv');

    const matchReader = new MatchFileReader(csvReader);
    matchReader.read();



    //Analysis tool to be added
```

Where, `MatchFileReader` must delegate the `read(): void` method to the `CsvFileReader`.