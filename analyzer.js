require('dotenv').config();

const tripReportData = require('./data/trip-reports.json');

const condensedPeakReports = tripReportData.map((peak) => {
  const condensedReports = peak.tripReportData.map((trip) => {
    return trip.report;
  }).join(' ');
  return {name: peak.peakName, text: condensedReports};
})

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const tone_analyzer = new ToneAnalyzerV3({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  version_date: '2017-02-27'
});

const requestToneAnalysis = (text) => {
  const params = {
    tone_input: text,
    content_type: 'text/plain',
    sentences: false
  };

  return new Promise((resolve, reject) => {
    tone_analyzer.tone(params, (err, toneResults) => {
      if (err) {
        reject(err);
      } else {
        resolve(toneResults);
      }
    });
  })
};

const groupedAnalysis = condensedPeakReports.reduce(async (acc, peak) => {
  const dataArray = await acc;
  const peakToneAnalysis = await requestToneAnalysis(peak.text);

  dataArray.push({name: peak.name, toneAnalysis: peakToneAnalysis});
  return dataArray;
}, Promise.resolve([]));

groupedAnalysis.then(result => console.log(JSON.stringify(result, null, 2)))