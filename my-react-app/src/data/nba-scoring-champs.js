// NBA Scoring Champion (PPG leader) by season, 2010-11 to 2025-26
//From basketball-reference: https://www.basketball-reference.com/leaders/pts_per_g_yearly.html

export const scoringLeaders = [
  { season: "2010-11", player: "Kevin Durant", team: "OKC", ppg: 27.7 },
  { season: "2011-12", player: "Kevin Durant", team: "OKC", ppg: 28.0 },
  { season: "2012-13", player: "Carmelo Anthony", team: "NYK", ppg: 28.7 },
  { season: "2013-14", player: "Kevin Durant", team: "OKC", ppg: 32.0 },
  { season: "2014-15", player: "Russell Westbrook", team: "OKC", ppg: 28.1 },
  { season: "2015-16", player: "Stephen Curry", team: "GSW", ppg: 30.1 },
  { season: "2016-17", player: "Russell Westbrook", team: "OKC", ppg: 31.6 },
  { season: "2017-18", player: "James Harden", team: "HOU", ppg: 30.4 },
  { season: "2018-19", player: "James Harden", team: "HOU", ppg: 36.1 },
  { season: "2019-20", player: "James Harden", team: "HOU", ppg: 34.3 },
  { season: "2020-21", player: "Stephen Curry", team: "GSW", ppg: 32.0 },
  { season: "2021-22", player: "Joel Embiid", team: "PHI", ppg: 30.6 },
  { season: "2022-23", player: "Joel Embiid", team: "PHI", ppg: 33.1 },
  { season: "2023-24", player: "Luka Doncic", team: "DAL", ppg: 33.9 },
  { season: "2024-25", player: "Shai Gilgeous-Alexander", team: "OKC", ppg: 32.7 },
  { season: "2025-26", player: "Luka Doncic", team: "LAL", ppg: 33.5 },
];

// Amount of scoring titles per player, sorted by highest to lowest
export const titlesPerPlayer = [
  { player: "Kevin Durant", titles: 3 },
  { player: "James Harden", titles: 3 },
  { player: "Russell Westbrook", titles: 2 },
  { player: "Joel Embiid", titles: 2 },
  { player: "Stephen Curry", titles: 2 },
  { player: "Luka Doncic", titles: 2 },
  { player: "Carmelo Anthony", titles: 1 },
  { player: "Shai Gilgeous-Alexander", titles: 1 },
].sort((a, b) => b.titles - a.titles);