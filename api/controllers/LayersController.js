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
				Layers.publishCreate(result);
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
						Layers.update(layerId, {name: newLayerName}).exec(function(err, result){
							if (err) {
									return res.serverError(err);
							} else {
									return res.ok('Nama layer berhasil diubah');
							}
						})
				}
		})
	},

	// Soft delete layer (make it inactive)
	deactivateLayer: function (req, res) {
		var layerId = req.param('layerId');
		Layers.findOne({id: layerId}).exec(function(err, layer) {
				if (err) {
						return res.negotiate(err);
				} else if (!layer) {
						return res.notFound('Layer tidak dapat ditemukan');
				} else {
						Layers.update(layerId, {isDeleted: true}).exec(function(err, result){
							if (err) {
								return res.serverError(err);
							} else {
								return res.ok('layer berhasil di nonaktifkan');
							}
						})
				}
		})
	},

	// Undelete layer (make it active)
	activateLayer: function (req, res) {
		var layerId = req.param('layerId');
		Layers.findOne({id: layerId}).exec(function(err, layer) {
				if (err) {
						return res.negotiate(err);
				} else if (!layer) {
						return res.notFound('Layer tidak dapat ditemukan');
				} else {
						Layers.update(layerId, {isDeleted: false}).exec(function(err, result){
							if (err) {
									return res.serverError(err);
							} else {
									return res.ok('layer berhasil diaktifkan kembali');
							}
						})
				}
		})
	},

	// Change layer status (only `draft`, `review` and `final` are allowed)
	changeStatusLayer: function (req, res) {
		var layerId = req.param('layerId');
		var layerStatus = req.param('layerStatus');
		if (layerStatus === 'draft' || layerStatus === 'review' || layerStatus === 'final ') {
			Layers.findOne({id: layerId}).exec(function(err, layer) {
				if (err) {
						return res.negotiate(err);
				} else if (!layer) {
						return res.notFound('Layer tidak dapat ditemukan');
				} else {
						Layers.update(layerId, {status: layerStatus}).exec(function(err, result){
							if (err) {
									return res.serverError(err);
							} else {
									return res.ok('layer status berhasil diubah');
							}
						})
				}
			})
		} else {
			return res.badRequest('permintaan anda salah!');
		}
	},

	// all layers
	allLayerList: function(req, res) {
		var userId = req.param('id');
		Layers.find({
			userId: userId,
		}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.json(result);
			}
		})
	},

	// only for active layers
	layerList: function(req, res) {
		var userId = req.param('id');
		Layers.find({
			userId: userId,
			isDeleted: false
		}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.json(result);
			}
		})
	},
	//  for inactive (soft deleted) layers
	deletedLayerList: function(req, res) {
		var userId = req.param('id');
		Layers.find({
			userId: userId,
			isDeleted: true
		}).exec(function(err, result){
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
	},

	subscribe: function(req, res) {
    if( !req.isSocket) {
      return res.badRequest();
    }
    Layers.find().exec(function (err, layers) {
      if (err) {
        return res.serverError({ status: 'SERVER_ERROR' });
      }
      /**
       * subscribe the Layers model to connected client sockets
       */
      Layers.subscribe(req, _.pluck(layers, 'id'));
      Layers.watch(req);
      return res.ok({ status: 'SUBSCRIBED' });
    });
  },

	// //test socket
	// hello: function(req, res) {

  //   // Make sure this is a socket request (not traditional HTTP)
  //   if (!req.isSocket) {
  //     return res.badRequest();
  //   }

  //   // Have the socket which made the request join the "funSockets" room.
  //   sails.sockets.join(req, 'funSockets');

  //   // Broadcast a notification to all the sockets who have joined
  //   // the "funSockets" room, excluding our newly added socket:
	// 	sails.sockets.broadcast('funSockets', 'hello', { howdy: 'hi there!'}, req);
	// 	var socketId = sails.sockets.getId(req);
	// 	// => "BetX2G-2889Bg22xi-jy"

	// 	sails.log('My socket ID is: ' + socketId);

  //   // ^^^
  //   // At this point, we've blasted out a socket message to all sockets who have
  //   // joined the "funSockets" room.  But that doesn't necessarily mean they
  //   // are _listening_.  In other words, to actually handle the socket message,
  //   // connected sockets need to be listening for this particular event (in this
  //   // case, we broadcasted our message with an event name of "hello").  The
  //   // client-side code you'd need to write looks like this:
  //   // 
  //   //   io.socket.on('hello', function (broadcastedData){
  //   //       console.log(data.howdy);
  //   //       // => 'hi there!'
  //   //   }
  //   // 

  //   // Now that we've broadcasted our socket message, we still have to continue on
  //   // with any other logic we need to take care of in our action, and then send a
  //   // response.  In this case, we're just about wrapped up, so we'll continue on

  //   // Respond to the request with a 200 OK.
  //   // The data returned here is what we received back on the client as `data` in:
  //   // `io.socket.get('/say/hello', function gotResponse(data, jwRes) { /* ... */ });`
  //   return res.json({
  //     anyData: 'we want to send back'
  //   });

	// }
};

