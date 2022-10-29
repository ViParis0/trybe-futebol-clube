import { Router } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';
import LeaderBoardService from '../services/LeaderBoardService';

const leaderBoardService = new LeaderBoardService();
const leaderBoardController = new LeaderBoardController(leaderBoardService);
const leaderBoardRouter = Router();

leaderBoardRouter.get('/', leaderBoardController.getTotalLeaderBoard);
leaderBoardRouter.get('/home', leaderBoardController.getLeaderBoardHome);
leaderBoardRouter.get('/away', leaderBoardController.getLeaderBoardAway);

export default leaderBoardRouter;
