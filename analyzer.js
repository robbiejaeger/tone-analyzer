require('dotenv').config();

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const tone_analyzer = new ToneAnalyzerV3({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  version_date: '2017-02-27'
});

const params = {
  tone_input: 'Greetings from Watson Developer Cloud!',
  content_type: 'text/plain'
};

tone_analyzer.tone(params, (err, tone) => {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(tone, null, 2));
    }
  }
);