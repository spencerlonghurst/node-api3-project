const User = require('../users/users-model')

function logger(req, res, next) {
  console.log(`[${new Date().toLocaleString()}] ${req.method} to ${req.url} `)
  next()
}

async function validateUserId(req, res, next) {
  try {
    const user = await User.getById(req.params.id)
    if (!user) {
      res.status(404).json({ message: "user not found" })
    } else {
      req.user = user
      next()
    }
  } catch {
    res.status(500).json({
    message: 'Error retrieving the user',
  });
  }
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