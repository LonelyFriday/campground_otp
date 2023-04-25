const express = require('express');
const {getCampgrounds, getCampground, createCampground, editCampground, deleteCampground} = require('../controllers/campgrounds');
const router = express.Router();

router.route('/').get(getCampgrounds).post(createCampground);
router.route('/:id').get(getCampground).put(editCampground).delete(deleteCampground);

module.exports = router;