import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import MatchesServices from '../services/MatchesService';

const matchesService = new MatchesServices();
const matchesController = new MatchesController(matchesService);
const matchesRouter = Router();

matchesRouter.get('/', matchesController.getMatches);

export default matchesRouter;
