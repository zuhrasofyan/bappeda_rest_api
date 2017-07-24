# Bappeda REST API

A fork from sails-passport with the intention of providing required data and REST API service to Bappeda Kota Banda Aceh.

## HOW TO:
* Clone this repo and `cd` to your destined folder
* Make sure your MySQL server is running
* Rename `/config/connections_example.js` to `/config/connections.js` and change the value of `mysqlServer` in `/config/connections` to reflect your own MySQL setup conf (make sure to use new dedicated database since it will alter the database, unless you change the config in connections.js )
* Rename `/config/email_example.js` to `/config/email.js` and uncomment the lines while filling it with correct credential. This is needed to activate actavating registered user via email
* run `npm install`
* run `sails lift`

### Error Info:
* if you have `npm install` with `bcrypt` error such as `node-gyp` build error, it is okay, since I already subtitute bcrypt with `bcrypt-nodejs` in the app implementation. If you are perfectionist, just delete `bcrypt` from `package.json` dependency and you all set.

### DISCLAIMER! 
This is as minimal as it can be. Use it as your boilerplate to startup your REST API server, and as your playground to understand sailsjs concept + setup Passport authentification in server.
For Accessing the functionality, you can use postman or better yet, download my other repo [angular-passport](https://github.com/zuhrasofyan/angular-passport).
[MIT License](https://github.com/angular/angular.js/blob/master/LICENSE)

Copyright &copy; 2016 Zuhra Sofyan




