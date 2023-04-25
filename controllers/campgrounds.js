// Logic for GET, CREATE, EDIT, DELETE 
// Campground

// @desc    Get all Campgrounds
// @route   GET /api/v1/campgrounds
// @access  Public
exports.getCampgrounds = (req, res, next) => {
    res.status(200).json({success:true, msg: "show all Campgrounds" });
};

// @desc    Get 1 Campgrounds
// @route   GET /api/v1/campgrounds/:id
// @access  Public
exports.getCampground = (req, res, next) => {
    res.status(200).json({success:true, msg: `show just 1 campground here ${req.params.id}`});
};

// @desc    Create 1 Campgrounds
// @route   POST /api/v1/campgrounds
// @access  Public
exports.createCampground = (req, res, next) => {
    res.status(200).json({success:true, msg: "ตรงนี้เราจะแสดง campground สร้างเสร็จแล้ว"});
};

// @desc    Edit all Campgrounds
// @route   PUT /api/v1/campgrounds/:id
// @access  Public
exports.editCampground = (req, res, next) => {
    res.status(200).json({success:true, msg: `Edit this ${req.params.id} Campground`});
};

// @desc    Delete 1Campgrounds
// @route   DELETE /api/v1/campgrounds/:id
// @access  Public
exports.deleteCampground = (req, res, next) => {
    res.status(200).json({success:true, msg: `Delete this ${req.params.id} Campground`});
};