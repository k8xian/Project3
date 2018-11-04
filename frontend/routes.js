const routes = require('next-routes')

module.exports = routes()  
.add('profile', '/profile/:id', 'profile')

//can also be used routes.add(object)