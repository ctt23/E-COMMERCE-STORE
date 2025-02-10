import mongoose from "mongoose";
import bcrytpjs from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [6, "Password must be at least 6 characters"],
    },
    cartItems: [{
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        }
    }],
    role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer"
    }
}, 
{
    timestamps: true,
});

const User = mongoose.model("User", userSchema) //hashing user's password

//pre-save hook to hash passwords before saving to the database
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();

    try {
        const salt = await bcrytpjs.genSalt(10);
        this.password = await bcrytpjs.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function(password) {
    return bcrytpjs.compare(password, this.password);
};
    
export default User;