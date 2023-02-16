const baseUrl = 'https://www.basketball-reference.com';

function getSeasonUrl(season) {
  return `${baseUrl}/leagues/${season}.html`;
}

function getTeamStatsUrl(season, statType = 'per_game') {
  return `${baseUrl}/leagues/${season}/team-${statType}.html`;
}

function getPlayerStatsUrl(season, statType = 'per_game') {
  return `${baseUrl}/leagues/${season}/players/${statType}.html`;
}

function getGameLogUrl(team, season) {
  return `${baseUrl}/teams/${team}/${season}/gamelog/`;
}

function getPlayerUrl(playerId, season) {
  return `${baseUrl}/players/${playerId}/${season}.html`;
}

export { getSeasonUrl, getTeamStatsUrl, getPlayerStatsUrl, getGameLogUrl, getPlayerUrl };
