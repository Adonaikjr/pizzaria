import prismaClient from "../../prisma";

interface type_item_delete_request {
    item_id:string;
}

class CreateDeleteItem {
    async Play( {item_id} : type_item_delete_request ) {
        
        const order = await prismaClient.item.delete({
            where:{
                id: item_id
            }
        })
        return order;

    }
}
export { CreateDeleteItem }