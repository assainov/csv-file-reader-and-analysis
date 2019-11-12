import fs from 'fs';
import { OutputTarget } from '../Summary';

export default class HtmlReport implements OutputTarget {
    produce(report: string): void {
        const html = `
            <div>
                <h1>Analysis Report</h1>
                <p>${report}</p>
            </div>
        `;

        fs.writeFileSync('report.html', html);
    }
}
