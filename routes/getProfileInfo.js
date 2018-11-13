const router = require("express").Router();

const getProfileInfo = require("../controllers/getProfileInfoController");

//This matches /api/userAccount
router.route("/")
    .get(getProfileInfo.getProfileInformation);

module.exports = router;
