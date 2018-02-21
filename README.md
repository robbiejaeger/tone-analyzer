# 14er Tone Analyzer

This application goes through 14er hiking [trip reports](https://www.14ers.com/php14ers/peakstatus_main.php) and analyzes the tone of the reports, grouped by peak.

---

## Technology

### Tone Analyzer

The [Watson Natural Language Processing](https://www.ibm.com/watson/services/natural-language-understanding/) API is used for the tone analysis.

### Web Scraping

The [nightmare](https://github.com/segmentio/nightmare) JavaScript library was used for web scraping. The web scraping files are in the `scrapers` directory, and the raw data from web scraping is in the `data` directory.

## Usage

If you want to run this code on your own, then you will have to create an IBM Watson API account, get your API keys, and set them as environment variables (`WATSON_USERNAME` and `WATSON_PASSWORD` as seen in the `analyzer.js` file). For this, I like to use the npm package `dot-env`. Once you have those environment variables set up:

1. Change into the `tone-analyzer` directory root level.

2. Scrape data from the trip report sites using the command `node scrapers/trip-reports.js` in your terminal.

3. Analyze the trip report data using the command `node analyzer.js` from your terminal.

4. To view sorted tone data, there is a sample script you can run from your terminal: `node results/sort-peaks.js`

### Acknowledgments

Thanks to [this blog post](https://hackernoon.com/nightmarishly-good-scraping-with-nightmare-js-and-async-await-b7b20a38438f), which helped guide me through using async/await with Nightmare.