import mongoose from "mongoose";

const ModuleSchema = new mongoose.Schema({
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        contentURL: {
            type: String, // adobe pdg url
            required: true,
        }
    }
)

export default mongoose.model('Module', ModuleSchema)