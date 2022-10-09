import { Router } from "express";

import { Controller_UserCreate } from './Controllers/user/create_user_controller'
import { Controller_UserAuthCreate } from "./Controllers/user/create_auth_user_controller";
import { Controller_DetailUser } from "./Controllers/user/create_detail_user_controller";
import { Middle_auth } from "./middlewares/middle_auth";


const router = Router();

router.post('/users', new Controller_UserCreate().Play)
router.post('/session', new Controller_UserAuthCreate().Play)
router.get('/profile', Middle_auth, new Controller_DetailUser().Play)
export { router };
