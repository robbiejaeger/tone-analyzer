const toneData = require('../data/tone-analysis.json');

const joyData = toneData.map((peak) => {
  return {name: peak.name, joyScore: peak.toneAnalysis.document_tone.tone_categories[0].tones[3].score}
});

const sortedJoyData = joyData.sort((a, b) => {
  return a.joyScore - b.joyScore;
});

console.log(sortedJoyData);