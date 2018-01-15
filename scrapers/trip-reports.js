const Nightmare = require('nightmare');
const fs = require('fs');

const peakUrls = require('../data/peak-urls.js');

const goToPageAndGetData = async (pageLink) => {
  try {
    const nightmare = new Nightmare({ show: false });

    const result = await nightmare
      .goto(pageLink)
      .wait('#main_list')
      .evaluate(() => {
        const peakName = document.querySelector('.BldHdr2').innerText.trim();

        const tripReportRows = [...document.querySelectorAll('tr')].slice(2);

        tripReports = tripReportRows.map((row) => {
          const date = row.querySelector('div.buttonf a').innerText;
          const report = row.querySelector('td div:nth-child(2)').innerText.split('Info:').pop().slice(1).trim();
          return {date, report};
        })

        return {peakName, tripReports};
      })
      .end();

      return result;
  } catch(e) {
    console.error(e);
  }
};

console.log(`Scraping trip reports for ${peakUrls.length} peaks. This might take a couple minutes...`);

const data = peakUrls.reduce(async (acc, pageLink, idx) => {
  const dataArray = await acc;
  const peakReports = await goToPageAndGetData(pageLink);

  console.log(`${idx + 1}. ${peakReports.peakName} scraped`);
  dataArray.push(peakReports);
  return dataArray;
}, Promise.resolve([]));


data.then(result => {
  const output = JSON.stringify(result, null, 2);
  const fileNameToSave = 'trip-reports.json';

  fs.writeFile(`./data/${fileNameToSave}`, output, 'utf8', (err) => {
    if (err) throw err;
    console.log(`Scraped trip report data saved to file: data/${fileNameToSave}`);
  });
});