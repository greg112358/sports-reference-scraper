import { getGameLogUrl, getPlayerUrl, getPlayerStatsUrl, getSeasonUrl, getTeamStatsUrl } from './basketballReferenceURLs.js';

describe('basketballReferenceURLs', function() {
  describe('getSeasonUrl', function() {
    it('should return the URL for the given NBA season', function() {
      expect(getSeasonUrl('NBA_2022')).toEqual('https://www.basketball-reference.com/leagues/NBA_2022.html');
    });
  });

  describe('getTeamStatsUrl', function() {
    it('should return the URL for the team stats page for the given NBA season', function() {
      expect(getTeamStatsUrl('NBA_2022')).toEqual('https://www.basketball-reference.com/leagues/NBA_2022/team-per_game.html');
    });

    it('should return the URL for the team advanced stats page for the given NBA season', function() {
      expect(getTeamStatsUrl('NBA_2022', 'advanced')).toEqual('https://www.basketball-reference.com/leagues/NBA_2022/team-advanced.html');
    });
  });

  describe('getPlayerStatsUrl', function() {
    it('should return the URL for the player stats page for the given NBA season', function() {
      expect(getPlayerStatsUrl('NBA_2022')).toEqual('https://www.basketball-reference.com/leagues/NBA_2022/players/per_game.html');
    });

    it('should return the URL for the player advanced stats page for the given NBA season', function() {
      expect(getPlayerStatsUrl('NBA_2022', 'advanced')).toEqual('https://www.basketball-reference.com/leagues/NBA_2022/players/advanced.html');
    });
  });

  describe('getGameLogUrl', function() {
    it('should return the URL for the game log page for the given NBA team and season', function() {
      expect(getGameLogUrl('LAL', '2022')).toEqual('https://www.basketball-reference.com/teams/LAL/2022/gamelog/');
    });
  });

  describe('getPlayerUrl', function() {
    it('should return the URL for the player page for the given NBA player ID and season', function() {
      expect(getPlayerUrl('jamesle01', '2022')).toEqual('https://www.basketball-reference.com/players/jamesle01/2022.html');
    });
  });
});
