const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required:[true,'请输入内容'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Goal',goalSchema)