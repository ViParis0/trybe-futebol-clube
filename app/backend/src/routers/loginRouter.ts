import { Router } from 'express';
import LoginController from '../controllers/LoginController';

import LoginService from '../services/LoginService';

const loginService = new LoginService();
const loginController = new LoginController(loginService);
const loginRouter = Router();

loginRouter.post('/', loginController.makeLogin);
loginRouter.get('/validate', loginController.verifyLogin);

export default loginRouter;
