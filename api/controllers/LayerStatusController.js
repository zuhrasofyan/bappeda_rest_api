/**
 * LayerStatusController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  getLayerStatus: function (req, res) {
    Layer_status.find().exec(function(err, result){
        if (err) {
            return res.notFound();
        } else {
            return res.json(result);
        }
    });
},

// Change user role
changeLayerStatus: function (req, res) {
    var layerId = req.param('layerId'), 
        userId = req.param('id'), 
        status = req.param('status');
    // first, check if status is available from layer_status table
    Layer_status.find({name:status}).exec(function(error, response){
        if (error) {
            return res.notFound('Status yang anda inginkan tidak terdaftar');
        // if exist, update status of a layer
        } else {
            Layers.update({id:layerId}, {status: status})
            .exec(function(err, result){
                if (err) {
                    return res.serverError();
                } else {
                    return res.ok('status berhasil diubah.');
                }
            });
        }
    })
}

};

