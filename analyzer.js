require('dotenv').config();

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  version_date: '2016-05-19'
});
 
tone_analyzer.tone(
  {
    tone_input: 'Greetings from Watson Developer Cloud!',
    content_type: 'text/plain'
  },
  function(err, tone) {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(tone, null, 2));
    }
  }
);