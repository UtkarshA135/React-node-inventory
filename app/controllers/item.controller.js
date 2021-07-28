const Item = require('../models/item.model.js');
 
// POST a Item
exports.createItem = (req, res) => {
  console.log('====================================');
  console.log(req.body);
  console.log('====================================');
    const item = new Item({
                          name: req.body.name,
                          item_id: req.body.item_id,
                       
                          category: req.body.category,
                          limit_stock: req.body.limit_stock,
                          open_stock: req.body.open_stock,
                          price: req.body.price,
                        });
 
    // Save a Item in the MongoDB
    item.save().then(data => {
                    res.status(200).json(data);
                }).catch(err => {
                    res.status(500).json({
                      message: "Fail!",
                      error: err.message
                    });
                });
};
  
// FETCH all Items
exports.items = (req, res) => {
    Item.find().select('-__v').then(itemInfos => {
          res.status(200).json(itemInfos);
        }).catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
};
//Fetch only limited items
exports.getLimitedItems=(req, res) => {
  Item.find().select('-__v').then(itemInfos => {
    var limitlist=[];
    itemInfos.forEach((item)=>{
      if(item.open_stock<item.limit_stock)
      limitlist.push(item);
    })
    JSON.stringify(limitlist);
    res.status(200).json(limitlist);
  }).catch(error => {
    // log on console
    console.log(error);

    res.status(500).json({
        message: "Error!",
        error: error
    });
  });
}

// get a Item by Id
exports.getItem = (req, res) => {
  Item.findById(req.params.id).select('-__v')
      .then(item => {
        res.status(200).json(item);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Item not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving Item with id " + req.params.id,
              error: err
          });
      });
};
 
// UPDATE a Item
exports.updateItem = (req, res) => {
    // Find item and update it
    console.log('====================================');
    console.log(req.body_id);
    console.log('====================================');
    Item.findByIdAndUpdate(
                      req.body._id, 
                      {
                        name: req.body.name,
                        category: req.body.category,
                        limit_stock: req.body.limit_stock,
                      open_stock: req.body.open_stock,
                      price: req.body.price,
                      }, 
                        {new: true}
                    ).select('-__v')
        .then(item => {
            if(!item) {
                return res.status(404).send({
                    message: "Error -> Can NOT update a item with id = " + req.params.id,
                    error: "Not Found!"
                });
            }

            res.status(200).json(item);
        }).catch(err => {
            return res.status(500).send({
              message: "Error -> Can not update a item with id = " + req.params.id,
              error: err.message
            });
        });
};

// DELETE a Item
exports.deleteItem = (req, res) => {
    let itemId = req.params.id

    Item.findByIdAndRemove(itemId).select('-__v -_id')
        .then(item => {
            if(!item) {
              res.status(404).json({
                message: "Does Not exist a Item with id = " + itemId,
                error: "404",
              });
            }
            res.status(200).json({});
        }).catch(err => {
            return res.status(500).send({
              message: "Error -> Can NOT delete a item with id = " + itemId,
              error: err.message
            });
        });
};