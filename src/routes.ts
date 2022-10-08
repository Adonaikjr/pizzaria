import { Router } from "express";

import { Controller_UserCreate } from './Controllers/user/create_user_controller'
import { Controller_UserAuthCreate } from "./Controllers/user/create_auth_user_controller";

const router = Router();

router.post('/users', new Controller_UserCreate().Play)
router.post('/session', new Controller_UserAuthCreate().Play)

export { router };
