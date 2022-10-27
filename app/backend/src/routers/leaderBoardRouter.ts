import { Router } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';
import LeaderBoardService from '../services/LeaderBoardService';

const leaderBoardService = new LeaderBoardService();
const leaderBoardController = new LeaderBoardController(leaderBoardService);
const leaderBoardRouter = Router();

leaderBoardRouter.get('/home', leaderBoardController.getLeaderBoardHome);

export default leaderBoardRouter;
