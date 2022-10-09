import { Router } from "express";
import multer from "multer";

import { Controller_UserCreate } from './Controllers/user/create_user_controller'
import { Controller_UserAuthCreate } from "./Controllers/user/create_auth_user_controller";
import { Controller_DetailUser } from "./Controllers/user/create_detail_user_controller";
import { Middle_auth } from "./middlewares/middle_auth";
import { Controller_Category } from "./Controllers/category/create_category_Controller";
import { Controller_SearchCategory } from "./Controllers/category/create_search_category_Controller";
import { Controller_Product } from "./Controllers/product/create_product_Controller";

import uploadConfig from './configs/multer'


const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));


//rotas users
router.post('/users', new Controller_UserCreate().Play)
router.post('/session', new Controller_UserAuthCreate().Play)
router.get('/profile', Middle_auth, new Controller_DetailUser().Play)

//rotas category
router.post('/category', Middle_auth, new Controller_Category().Play)
router.get('/category', Middle_auth, new Controller_SearchCategory().Play)
//routes product
router.post('/product', Middle_auth, upload.single('file') , new Controller_Product().Play)



export { router };



