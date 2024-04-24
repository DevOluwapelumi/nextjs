import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "FirstName is required"]
    },
    lastName: {
        type: String,
        required: [true, "LastName is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
});



// Check if the model has already been defined to prevent overwriting
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
