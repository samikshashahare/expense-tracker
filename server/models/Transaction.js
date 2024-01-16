import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
    amount: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['credit', 'debit'],
        required: true
    },
    category: {
        type: String,
        enum: ['food', 'entertainment', 'rent', 'shopping', 'travel', 'education','salary', 'freelancing','side-buisness', 'others'],
        default: 'other'
    },
    description: {
        type: String
    }
},{
    timestamps:true
});

const Transaction = model('Transaction', transactionSchema);
export default Transaction;