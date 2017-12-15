const Nightmare = require('nightmare');
const fs = require('fs');

const pageLinks = [
  'https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=500&type=14ers&start=0'
];

const goToPageAndGetData = async (pageLink) => {
  try {
    const nightmare = new Nightmare({ show: false });

    const result = await nightmare
      .goto(pageLink)
      .wait('#main_list')
      .evaluate(() => {
        const tripReportRows = [...document.querySelectorAll('tr')].slice(2);

        tripReportData = tripReportRows.map((row) => {
          const date = row.querySelector('div.buttonf a').innerText;
          const info = row.querySelector('td div:nth-child(2)').innerText;
          return {date, info};
        })

        return tripReportData;
      })
      .end();

      return result;
  } catch(e) {
    console.error(e);
  }
}


const data = pageLinks.reduce(async (acc, pageLink) => {
  const dataArray = await acc;
  const result = await goToPageAndGetData(pageLink);

  dataArray.push(...result);
  return dataArray;
}, Promise.resolve([]));

data.then(result => {
  const output = JSON.stringify(result, null, 2);

  fs.writeFile('./data/trip-reports.json', output, 'utf8', (err) => {
    if (err) throw err;
    console.log('File was saved.');
  })
})