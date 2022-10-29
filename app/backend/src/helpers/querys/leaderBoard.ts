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

const leaderBoardAwayQ = `SELECT
t.team_name as "name",
SUM(IF(m.away_team_goals > m.home_team_goals, 3, 0) +
IF(m.home_team_goals = m.away_team_goals, 1, 0)) as "totalPoints",
COUNT(t.team_name) as "totalGames",
SUM(IF(m.away_team_goals > m.home_team_goals, 1, 0)) as "totalVictories",
SUM(IF(m.away_team_goals = m.home_team_goals, 1, 0)) as "totalDraws",
SUM(IF(m.away_team_goals < m.home_team_goals, 1, 0)) as "totalLosses",
SUM(m.away_team_goals) as "goalsFavor",
SUM(m.home_team_goals) as "goalsOwn",
SUM(away_team_goals - home_team_goals) as "goalsBalance",
ROUND(SUM(IF(m.away_team_goals > m.home_team_goals, 3, 0) +
IF(m.away_team_goals = m.home_team_goals, 1, 0)) / (COUNT(t.team_name) * 3) * 100, 2)
 as "efficiency"
FROM TRYBE_FUTEBOL_CLUBE.matches m
JOIN TRYBE_FUTEBOL_CLUBE.teams t
ON m.away_team = t.id
WHERE m.in_progress = 0
GROUP BY t.team_name
ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn ASC;`;

const totalLeaderBoard = `SELECT
HTL.name as "name",
SUM(HTL.totalPoints + ATL.totalPoints) as "totalPoints",
SUM(HTL.totalGames + ATL.totalGames) as "totalGames",
SUM(HTL.totalVictories + ATL.totalVictories) as "totalVictories",
SUM(HTL.totalDraws + ATL.totalDraws) as "totalDraws",
SUM(HTL.totalLosses + ATL.totalLosses) as "totalLosses",
SUM(HTL.goalsFavor + ATL.goalsFavor) as "goalsFavor",
SUM(HTL.goalsOwn + ATL.goalsOwn) as "goalsOwn",
SUM((HTL.goalsFavor + ATL.goalsFavor) - (HTL.goalsOwn + ATL.goalsOwn)) as "goalsBalance",
ROUND((HTL.totalPoints + ATL.totalPoints) / ((HTL.totalGames + ATL.totalGames) * 3) * 100, 2)
 as "efficiency"
 FROM (
SELECT
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
GROUP BY t.team_name) as HTL
JOIN (SELECT
t.team_name as "name",
SUM(IF(m.away_team_goals > m.home_team_goals, 3, 0) +
IF(m.home_team_goals = m.away_team_goals, 1, 0)) as "totalPoints",
COUNT(t.team_name) as "totalGames",
SUM(IF(m.away_team_goals > m.home_team_goals, 1, 0)) as "totalVictories",
SUM(IF(m.away_team_goals = m.home_team_goals, 1, 0)) as "totalDraws",
SUM(IF(m.away_team_goals < m.home_team_goals, 1, 0)) as "totalLosses",
SUM(m.away_team_goals) as "goalsFavor",
SUM(m.home_team_goals) as "goalsOwn",
SUM(away_team_goals - home_team_goals) as "goalsBalance",
ROUND(SUM(IF(m.away_team_goals > m.home_team_goals, 3, 0) +
IF(m.away_team_goals = m.home_team_goals, 1, 0)) / (COUNT(t.team_name) * 3) * 100, 2)
 as "efficiency"
FROM TRYBE_FUTEBOL_CLUBE.matches m
JOIN TRYBE_FUTEBOL_CLUBE.teams t
ON m.away_team = t.id
WHERE m.in_progress = 0
GROUP BY t.team_name) as ATL ON HTL.name = ATL.name
GROUP BY HTL.name
ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn ASC;`;

export default leaderBoardHomeQ;
export { leaderBoardAwayQ, totalLeaderBoard };
