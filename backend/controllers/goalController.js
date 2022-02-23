const asyncHandler = require('express-async-handler')

// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler( async (req,res) => {
    res.status(200).json({message:'Get goals'})
})

// @desc   Set goals
// @route  POST /api/goals
// @access Private
const setGoals = asyncHandler( async (req,res) => {
    // console.log(req.body)
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add text')
    }
    res.status(200).json({message:'Set Goals'})
})

// @desc   Update goals
// @route  PUT /api/goals
// @access Private
const updateGoals = asyncHandler( async (req,res) => {
    res.status(200).json({message:`Update goal ${req.params.id}`})
})

// @desc   Delete goals
// @route  DELETE /api/goals
// @access Private
const deleteGoals = asyncHandler( async (req,res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}