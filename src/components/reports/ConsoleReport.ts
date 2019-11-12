import { OutputTarget } from '../Summary';

export default class ConsoleReport implements OutputTarget {
    produce(report: string) {
        console.log(report);
    }
}
