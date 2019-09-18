import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    company: {
        type: String
    },
    isActive: {
        type: Boolean
    }
}, {
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('User', userSchema);
export default User;