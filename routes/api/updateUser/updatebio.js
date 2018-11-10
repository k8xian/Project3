const router = require("express").Router();
const updateBio = require("../../../");

router.route("/")
    .put(updateBio);