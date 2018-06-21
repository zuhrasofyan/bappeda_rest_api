/**
 * MarkerLayersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	
	addMarker: function(req, res) {
		var layer = req.param('layer'),
				lat = req.param('lat'),
				lng = req.param('lng'),
				userId = req.param('userId'),
				pointId = req.param('pointId'),
				message = req.param('message');

		MarkerLayers.create({
			layer: layer,
			lat: lat,
			lng:lng,
			userId: userId,
			pointId: pointId,
			message: message
		}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.ok();
			}
		})
	}  

};

