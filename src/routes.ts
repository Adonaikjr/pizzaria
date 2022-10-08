import { Router } from "express";

import { ControllerUserCreate } from './Controllers/user/create_user_controller'
import { ControllerUserAuthCreate } from "./Controllers/user/create_auth_user_controller";

const router = Router();

router.post('/users', new ControllerUserCreate().Play)
router.post('/session', new ControllerUserAuthCreate().Play)

export { router };
