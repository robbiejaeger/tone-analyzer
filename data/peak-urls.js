const urls = [
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=150&type=14ers", // Castle Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=320&type=14ers", // Maroon Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=390&type=14ers", // Capitol Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=430&type=14ers", // Snowmass Mountain
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=510&type=14ers", // Conundrum Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=660&type=14ers", // Pyramid Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=700&type=14ers", // North Maroon Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=110&type=14ers", // Grays Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=130&type=14ers", // Torreys Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=160&type=14ers", // Mt. Evans
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=200&type=14ers", // Longs Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=400&type=14ers", // Pikes Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=500&type=14ers", // Mt. Bierstadt
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=140&type=14ers", // Quandary Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=100&type=14ers", // Mt. Lincoln
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=220&type=14ers", // Mt. Cameron
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=290&type=14ers", // Mt. Bross
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=360&type=14ers", // Mt. Democrat
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=600&type=14ers", // Mt. Sherman
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=70&type=14ers", // Uncompahgre Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=210&type=14ers", // Mt. Wilson
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=310&type=14ers", // El Diente Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=350&type=14ers", // Mt. Sneffels
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=440&type=14ers", // Mt. Eolus
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=450&type=14ers", // Windom Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=530&type=14ers", // Sunlight Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=540&type=14ers", // Handies Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=580&type=14ers", // North Eolus
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=610&type=14ers", // Redcloud Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=670&type=14ers", // Wilson Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=680&type=14ers", // Wetterhorn Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=690&type=14ers", // San Luis Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=730&type=14ers", // Sunshine Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=40&type=14ers", // Blanca Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=90&type=14ers", // Crestone Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=250&type=14ers", // Crestone Needle
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=300&type=14ers", // Kit Carson Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=460&type=14ers", // Challenger Point
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=490&type=14ers", // Humboldt Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=550&type=14ers", // Culebra Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=560&type=14ers", // Ellingwood Point
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=570&type=14ers", // Mt. Lindsey
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=590&type=14ers", // Little Bear Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=10&type=14ers", // Mt. Elbert
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=20&type=14ers", // Mt. Massive
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=30&type=14ers", // Mt. Harvard
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=60&type=14ers", // La Plata Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=120&type=14ers", // Mt. Antero
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=230&type=14ers", // Mt. Shavano
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=240&type=14ers", // Mt. Princeton
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=260&type=14ers", // Mt. Belford
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=270&type=14ers", // Mt. Yale
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=330&type=14ers", // Tabeguache Peak
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=340&type=14ers", // Mt. Oxford
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=470&type=14ers", // Mt. Columbia
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=480&type=14ers", // Missouri Mountain
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=710&type=14ers", // Mt. of the Holy Cross
  "https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=720&type=14ers" // Huron Peak
]

module.exports = urls;