import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    currentModule: {
        type: Number,
        default: 1,
        max: 11,
    },
    roles: {
        type: Array,
    },
    tests: {
        type: Array,
    },
    readyforexam: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
})

export default mongoose.model('User', UserSchema)