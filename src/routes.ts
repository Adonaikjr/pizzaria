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
import { Controller_ListCategory } from "./Controllers/product/create_list_category_Controller";
import { Controller_Order } from "./Controllers/order/create_order_Controller";
import { Controller_DeleteOrder } from "./Controllers/order/create_delete_order_Controller";
import { Controller_AddItem } from "./Controllers/order/create_add_item_Controller";
import { Controller_DeleteItem } from "./Controllers/order/create_delete_item_Controller";
import { Controller_SendItem } from "./Controllers/order/create_send_item_Controller";
import { Controller_ListOrder } from "./Controllers/order/create_list_order_service";
import { Controller_DetailsOrder } from "./Controllers/order/crete_details_order_Controller";
import { Controller_FinishOrder } from "./Controllers/order/create_finish_order_Controller";


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
router.post('/product', Middle_auth, upload.single('file'), new Controller_Product().Play)
router.get('/category/product', Middle_auth, new Controller_ListCategory().Play)

//routes order
router.post('/order', Middle_auth, new Controller_Order().Play)
router.delete('/order', Middle_auth, new Controller_DeleteOrder().Play)
router.post('/order/add', Middle_auth, new Controller_AddItem().Play)
router.delete('/order/delete', Middle_auth, new Controller_DeleteItem().Play)
router.put('/order/send', Middle_auth, new Controller_SendItem().Play)
router.get('/orders', Middle_auth, new Controller_ListOrder().Play)
router.get('/order/details', Middle_auth, new Controller_DetailsOrder().Play)
router.put( '/order/finish', Middle_auth, new Controller_FinishOrder().Play )
export { router };



