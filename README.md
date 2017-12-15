# 14ner Tone Analyzer

This application goes through 14ner hiking [trip reports](https://www.14ers.com/php14ers/peakstatus_main.php) and analyzes the tone of the reports, grouped by peak.

---

## Technology

### Tone Analyzer

The [Watson Natural Language Processing](https://www.ibm.com/watson/services/natural-language-understanding/) API is used for the tone analysis.

### Web Scraping

The [nightmare](https://github.com/segmentio/nightmare) JavaScript library was used for web scraping. The web scraping files are in the `scrapers` directory, and the raw data from web scraping is in the `data` directory.