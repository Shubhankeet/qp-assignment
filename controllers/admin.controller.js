const connnection = require('../connection')
module.exports={
    addItem:addItem,
    getGrocery:getGrocery,
    removeGrocery:removeGrocery,
    updateItem:updateItem,
}

function addItem(req,res){
    const {itemName,stock,price} =req.body.goceryDetails;
    connnection.connect((err)=>{
        if(err) throw err;
         const query = "INSERT INTO grocerys(itemName,stock,price) VALUES('"+itemName+"','"+stock+"','"+price+"')";
         connnection.query(query,(err,result)=>{
            if(err) throw err;
            res.send("Grocery added successfully"+result.insertId);
         })
    })

}

function getGrocery(req,res){
    connnection.connect((err)=>{
        if(err) throw err;
         const query = "SELECT * FROM grocerys";
         connnection.query(query,(err,result)=>{
            if(err) throw err;
            res.send(result);
         })
    })
}

function removeGrocery(req,res){
    const itemId=req.query.itemId;
    connnection.connect((err)=>{
        if(err) throw err;
         const query = "DELETE FROM grocerys WHERE ID=?";
         connnection.query(query,[itemId],(err,result)=>{
            if(err) throw err;
            res.send("Grocery removed successfully"+result.insertId);
         })
    })
}

function updateItem(req,res){
    const {itemName,price,itemId} =req.body.goceryDetails;
    connnection.connect((err)=>{
        if(err) throw err;
         const query = "UPDATE grocerys set itemName=?,price=? WHERE id=?";
         connnection.query(query,[itemName,price,itemId],(err,result)=>{
            if(err) throw err;
            res.send("Grocery updated successfully"+result);
         })
    })
}

