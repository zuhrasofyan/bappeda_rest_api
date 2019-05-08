/**
 * LayersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	addLayer: function (req, res) {
		var name = req.param('name');
		var	userId = req.param('userId');

		Layers.create({
			name: name,
			userId: userId
		}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.ok();
			}
		});
	},

	editLayer: function (req, res) {
		var layerId = req.param('layerId');
		var newLayerName = req.param('newLayerName');
		Layers.findOne({id: layerId}).exec(function(err, layer) {
				if (err) {
						return res.negotiate(err);
				} else if (!layer) {
						return res.notFound('Layer tidak dapat ditemukan');
				} else {
						// TODO: Do patching the data
						Layers.update(layerId, {name: newLayerName}).exec(function(err, result){
							if (err) {
									return res.serverError(err);
							} else {
									return res.ok('Nama layer berhasil diubah');
							}
						})
						// return res.json(layer);

				}
		})
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
	},

	getUserLayersMarkers: function(req, res) {
		var userId = req.param('id');
		User.find({id: userId}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				Layers.find({userId: userId}).populate('markers').exec(function(error, resultMarkers){
					if (error) {
						return res.serverError(error);
					} else {
						return res.json(resultMarkers);
					}
				})
			}
		})
	}
};

