const routes = require('next-routes')

module.exports = routes()  
.add('profile', '/profile/:id', 'profile')
.add('test-area')

//can also be used routes.add(object)