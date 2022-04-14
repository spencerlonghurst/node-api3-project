// Users = require('./api/users')

function logger(req, res, next) {
  console.log('logger middleware')
  console.log(`[${new Date().toLocaleString()}] ${req.method} to ${req.url} `)
  next()
}

function validateUserId(req, res, next) {
  console.log('validateUserId')
  next()
}

function validateUser(req, res, next) {
  console.log('validateUser')
  next()
}

function validatePost(req, res, next) {
  console.log('validatePost')
  next()
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}