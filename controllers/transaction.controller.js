import { Transaction } from "../models/transaction.model.js";

// admin post krega job
export const postTrans = async (req, res) => {
    try {
        const { type,amount, category,description } = req.body;
        const userId = req.id;

        if (!type || !amount || !category || !description ) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            })
        };
        const transactions = await Transaction.create({
            type,
           
           amount,
            category,
            description,
            created_by: userId
        });
        return res.status(201).json({
            message: "New Transaction created successfully.",
            transactions,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}





export const getTransaction = async (req, res) => {
    try {
        const userId = req.id; // logged in user id
        const transactions = await Transaction.find({ userId });
        if (!transactions) {
            return res.status(404).json({
                message: "Transaction not found.",
                success: false
            })
        }
        return res.status(200).json({
            transactions,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}






export const getTransactionById = async (req, res) => {
    try {
        const transactionId = req.params.id;
        const transactions = await Transaction.findById(transactionId);
        if (!transactions) {
            return res.status(404).json({
                message: "Transaction not found.",
                success: false
            })
        }
        return res.status(200).json({
            transactions,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}



export const updateTrans = async (req, res) => {
    try {
        const { type,amount,category,description } = req.body;
 
      
    
        const updateData = { type, amount,category,description };

        const transaction = await Transaction.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!transaction) {
            return res.status(404).json({
                message: "Transaction not found.",
                success: false
            })
        }
        return res.status(200).json({
            message:"Transaction information updated.",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}



const deleteTransById = async(req, res) => {
    try {
        const Transaction = req.params.transactionId;

        const TransactionProduct = await Transaction.findByIdAndDelete(transactionId);

        if (!TransactionProduct) {
            return res.status(404).json({ error: "No Transaction found" })
        }
        res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" })
    }
}