const Nightmare = require('nightmare');
const fs = require('fs');

const pageLinks = [
  'https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=500&type=14ers&start=0',
  'https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=110&type=14ers&start=0'
];

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
          const report = row.querySelector('td div:nth-child(2)').innerText.split("Info:").pop().slice(1).trim();
          return {date, report};
        })

        return {peakName, tripReports};
      })
      .end();

      return result;
  } catch(e) {
    console.error(e);
  }
}


const data = pageLinks.reduce(async (acc, pageLink) => {
  const dataArray = await acc;
  const peakReports = await goToPageAndGetData(pageLink);

  dataArray.push(peakReports);
  return dataArray;
}, Promise.resolve([]));


data.then(result => {
  const output = JSON.stringify(result, null, 2);

  fs.writeFile('./data/trip-reports.json', output, 'utf8', (err) => {
    if (err) throw err;
    console.log('File was saved.');
  })
})