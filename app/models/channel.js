const {model, Schema, models} = require('mongoose');

const channelSchema = new Schema({
        id_channel: {
            type: String,
            required: true,
        },
        name_channel: {
            type: String,
            required: true,
        },
        url_channel: {
            type: String,
            required: true,
        },
        url_video_present: {
            type: String,
            required: true,
        },
        subcribe: {
            type: Number,
            required: true,
            default: 0,
        },
        thumbnail_channel: {
            type: String,
            required: true,
        },
        description_channel: {
            type: String,
            required: true,
        },
        twitter: {
            type: String
        },
        enable_channel: {
            type: Boolean,
            required: true,
            default: true,
        },
        hololive: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = models.Channel || model("Channel", channelSchema)
