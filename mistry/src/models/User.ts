import mongoose, {Document} from "mongoose";

export interface Message extends Document{
    content: string;
    createdAt: Date;
}

const MessageSchema: mongoose.Schema<Message> = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content is required"]
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    messages: Message[];
}

const UserSchema: mongoose.Schema<User> = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please use a valid email address"
        ],
        lowercase: true,
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
    },

    verifyCode: {
        type: String,
        trim: true,
        minlength: [6, "Verify code must be 6 digits long"],
        maxlength: [6, "Verify code must be 6 digits long"],
    },

    verifyCodeExpiry: {
        type: Date,
        default: Date.now
    },

    isVerified: {
        type: Boolean,
        default: false,
    },

    isAcceptingMessages: {
        type: Boolean,
        default: true,
    },

    messages: {
        type: [MessageSchema],
        default: [],
    },
})


const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", UserSchema);

export default UserModel;
