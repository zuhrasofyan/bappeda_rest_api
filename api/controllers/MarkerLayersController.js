/**
 * MarkerLayersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	
	saveMarker: function(req, res) {
		var layer = req.param('layer'),
				lat = req.param('lat'),
				lng = req.param('lng'),
				userId = req.param('userId'),
				pointId = req.param('pointId'),
				message = req.param('message');

		var thisMarker = {
			layer: layer,
			lat: lat,
			lng:lng,
			userId: userId,
			pointId: pointId,
			message: message
		}

		MarkerLayers.findOne({pointId:pointId}).exec(function(err, result){
			if (err) {
				res.serverError(err);
			} else {
				if (!result) {
					MarkerLayers.create(thisMarker).exec(function(err, result){
						if (err) {
							return res.serverError(err);
						} else {
							return res.ok();
						}
					});
				} else if (result) {
					MarkerLayers.update({pointId: pointId}, thisMarker).exec(function(err, result){
						if (err) {
							return res.serverError(err);
						} else {
							return res.ok();
						}
					});
				} else {
					return res.serverError(err);
				}
			}
		})	
	},

	deleteMarker: function(req, res) {
		var userId = req.param('userId');
		var pointId = req.param('pointId');

		MarkerLayers.destroy({userId: userId, pointId: pointId}).exec(function(err){
			if (err) {
		    return res.negotiate(err);
		  }
		  sails.log('Any marker with specific (userid and pointId) have now been deleted, if there were any.');
		  return res.ok();
		})
	},

	getUserMarkers: function(req, res) {
		var userId = req.param('id');
		MarkerLayers.find({userId: userId}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.json(result);
			}
		})
	}

};

