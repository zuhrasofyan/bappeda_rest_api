/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': {
  //   view: 'homepage'
  // }

  /* This is, combined with disabling blueprints will restrict access to the required action based on controller */
  'POST /auth/login': 'AuthController.login',
  'GET /auth/validate_token' : 'AuthController.validate_token',
  'GET /auth/logout': 'AuthController.logout',
  'POST /register' : 'UserController.register',
  'GET /activation/:verificationNumber': 'UserController.validateUser',
  'GET /quote/open' : 'QuoteController.getQuote',
  'GET /quote/protected' : 'QuoteController.getProtectedQuote',
  
  
  // USER MANAGEMENT. FOR REGISTER 
  'PATCH /user/profil/:id' : 'UserController.editUser',
  'PATCH /user/avatar/:id' : 'UserController.uploadAvatar',
  'GET /user/avatar/:id' : 'UserController.getAvatar',
  'GET /user/profil/:id' : 'UserController.getUser',
  'PATCH /user/change-password/:id' : 'UserController.changeUserPassword',

  // Admin and officers
  'GET /admin/get-roles' : 'UserRoleController.getRoles',
  'PATCH /admin/change-user-role/:id' : 'UserRoleController.changeRole',
  'GET /officer/get-all-user' : 'UserController.getAllUser',


  'GET /desa/all-desa': 'DesaController.getDesa',
  'GET /kecamatan/all-kecamatan': 'KecamatanController.getKecamatan',
  'GET /kecamatan/kecamatan-desa': 'KecamatanController.getKecamatanDesa',

  'GET /lokasi': 'LokasiController.getLokasi',
  'GET /lokasi/:kategori': 'LokasiController.getLokasiOnKategori',
  'GET /lokasi/:kategori/:subKategori': 'LokasiController.getLokasiOnSubKategori',

  // RENAKSI
  'POST /renaksi/tambah-data' : 'RenaksiController.addRenaksi',
  'PATCH /renaksi/edit-data/:id' : 'RenaksiController.editRenaksi',
  'GET /renaksi/get-rad-data/:tahun' : 'RenaksiController.getRadDataTahunan',
  'GET /renaksi/get-rad-tahun/:tahun' : 'RenaksiController.getRadDataTahun',
  'POST /renaksi/kategori' : 'RenaksiController.addRadKategori',
  'GET /renaksi/kategori' : 'RenaksiController.getRadKategori',
  'POST /renaksi/tahun': 'RenaksiController.addRadTahun',
  'GET /renaksi/tahun':'RenaksiController.getRadTahun',
  'POST /renaksi/skpd': 'RenaksiController.addSkpd',
  'GET /renaksi/skpd': 'RenaksiController.getSkpdList',

  'POST /renaksi/bukti-rad/:id' : 'RenaksiController.uploadBuktiRad',
  'GET /renaksi/list-bukti-rad/:id' : 'RenaksiController.getListImageBukti',
  'GET /renaksi/bukti-rad/:imageName': 'RenaksiController.getImageBukti',

  // SIGAP
  // layer
  'POST /sigap/tambah-layer/:id' : 'LayersController.addLayer', 
  'PATCH /sigap/edit-layer/:id/:layerId' : 'LayersController.editLayer', 
  'GET /sigap/all-layer-list/:id' : 'LayersController.allLayerList',
  'GET /sigap/layer-list/:id' : 'LayersController.layerList',
  'GET /sigap/deleted-layer-list/:id' : 'LayersController.deletedLayerList',
  'GET /sigap/user-marker-per-layer/:id' : 'LayersController.getUserLayersMarkers',
  'PATCH /sigap/layer-deactivate/:id/:layerId' : 'LayersController.deactivateLayer',
  'PATCH /sigap/layer-activate/:id/:layerId' : 'LayersController.activateLayer',
  'PATCH /sigap/layer-status/:id/:layerId' : 'LayersController.changeStatusLayer',

  // marker
  'POST /sigap/save-marker/:id' : 'MarkerLayersController.saveMarker',
  'POST /sigap/delete-marker/:id' : 'MarkerLayersController.deleteMarker',
  'GET /sigap/marker-list/:id' : 'MarkerLayersController.getUserMarkers',

  // FORM SURVEY
  // 'POST /survey/tambah-data-layak-huni' : 'SurveyLayakHuniController.addLayakHuni',
  'GET /survey/pertanyaan-kategori' : 'SurveyPertanyaanLayakController.getPertanyaanKategori',
  'GET /survey/jawaban-all' : 'SurveyLayakHuniController.getAllLayakHuni',
  'POST /survey/tambah-data-layak-huni' : 'SurveyJawabanController.addJawaban',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
