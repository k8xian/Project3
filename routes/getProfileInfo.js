const router = require("express").Router();

const getProfileInfo = require("../controllers/getProfileInfoController");

//This matches /api/userAccount
router.route("/:id")
  .get(getProfileInfo.getProfileInformation);

module.exports = router;
