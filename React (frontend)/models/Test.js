import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    quiz: [{
        question: String,
        incorrectAnswers: [{type: String}],
        correctAnswer: String,
    }]
})


export default mongoose.model('Test', TestSchema)