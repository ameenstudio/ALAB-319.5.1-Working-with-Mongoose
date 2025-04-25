import mongoose from "mongoose";
const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    seatingCapacity: {
        type: Number,
        required: true,
        min: 2,
    },
    color: {
        type: String,
        required: true,
    },
});


export default mongoose.model("Car", carSchema);
