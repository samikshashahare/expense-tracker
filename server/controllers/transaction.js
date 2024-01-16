import Transaction from "./../models/Transaction.js";
import User from './../models/User.js';
import { responder } from "./../util.js";

const postApiTransaction = async (req, res) => {
    const { amount, type, category, description } = req.body;

    const transaction = new Transaction({
        amount,
        type,
        category,
        description
    });
    try {
        const savedTransaction = await transaction.save();

        return responder({
            res,
            success: true,
            message: 'Transaction saved',
            data: savedTransaction
        });
    } catch (err) {
        return responder({
            res,
            success: false,
            message: err.message
        });
    }
}

const getApiTransactions = async (req, res) => {
    const allTransactions = await Transaction.find();

    return res.json({
        success: true,
        message: 'successfully fetched all transactions',
        data: allTransactions
    });
}

const postApiSignUp = async (req, res) => {
    const { name, email, password, address, mobile } = req.body;
    const user = new User({
        name,
        email,
        password,
        address,
        mobile

    });
    try {
        const savedUser = await user.save();
        return responder({
            res,
            success: true,
            data: savedUser,
            message: 'signUp Successfully'

        })
    }
    catch (err) {
        return responder({
            success: false,
            message: err.message
        })

    }

}

const postApiLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        email: email,
        password: password
    })
    if (user) {
        return responder({
            res,
            success: true,
            data: user,
            message: 'login successfully'
        })
    }
    else {
        return responder({
            success: false,
            message:'invalid credentials'

        })
    }
}

export { postApiTransaction, getApiTransactions, postApiSignUp, postApiLogin }