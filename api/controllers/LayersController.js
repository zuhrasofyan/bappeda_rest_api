/**
 * LayersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	addLayer: function (req, res) {
		var layer = req.param('layer');
		var	userId = req.param('id');

		Layers.create({
			name: layer,
			userId: userId
		}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.ok();
			}
		});
	},
	
	layerList: function(req, res) {
		var userId = req.param('id');
		Layers.find({userId: userId}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.json(result);
			}
		})
	}
};

