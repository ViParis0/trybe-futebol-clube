const leaderBoardHomeQ = `SELECT
t.team_name as "name",
SUM(IF(m.home_team_goals > m.away_team_goals, 3, 0) +
IF(m.home_team_goals = m.away_team_goals, 1, 0)) as "totalPoints",
COUNT(t.team_name) as "totalGames",
SUM(IF(m.home_team_goals > m.away_team_goals, 1, 0)) as "totalVictories",
SUM(IF(m.home_team_goals = m.away_team_goals, 1, 0)) as "totalDraws",
SUM(IF(m.home_team_goals < m.away_team_goals, 1, 0)) as "totalLosses",
SUM(m.home_team_goals) as "goalsFavor",
SUM(m.away_team_goals) as "goalsOwn",
SUM(home_team_goals - away_team_goals) as "goalsBalance",
ROUND(SUM(IF(m.home_team_goals > m.away_team_goals, 3, 0) +
IF(m.home_team_goals = m.away_team_goals, 1, 0)) / (COUNT(t.team_name) * 3) * 100, 2)
 as "efficiency"
FROM TRYBE_FUTEBOL_CLUBE.matches m
JOIN TRYBE_FUTEBOL_CLUBE.teams t
ON m.home_team = t.id
WHERE m.in_progress = 0
GROUP BY t.team_name
ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn ASC;`;

export default leaderBoardHomeQ;
