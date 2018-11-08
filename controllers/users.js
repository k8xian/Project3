module.exports = {
    signUp: async (req, res, next) => {
        // Email & Password
        // req.value.body. If there's an error, this controller won't even called.
      console.log(".signUp() called!");
      console.log('contents of req.value.body', req.value.body)
    },
    signIn: async (req, res, next) => {
        // Generate Token
      console.log(".signIn() called!");
    },
    secret: async (req, res, next) => {
      console.log(".secret() called!");
    }
  };