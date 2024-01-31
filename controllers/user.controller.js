module.exports={
getAvailableGrocery:getAvailableGrocery,
bookgrocery:bookgrocery
}


function getAvailableGrocery(req,res){
    connection.connect((err)=>{
        if(err) throw err;
         const query = "SELECT * FROM grocerys WHERE stock > 0";
         connection.query(sqlquery,(err,result)=>{
            if(err) throw err;
            res.send(result);
         })
    })
}

function bookgrocery(req, res) {
    const { userId, groceryList } = req.body.bookingDetails;

    connection.connect((err) => {
        if (err) throw err;

        const query = "UPDATE user SET bookingItemlist = ? WHERE id = ?";
        
        connection.query(sqlquery, [groceryList, userId], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    });
}
