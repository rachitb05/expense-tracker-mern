const Transaction = require("../models/Transaction");
const transaction = require("../models/Transaction");
// desc-get all transactions
// route- /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await transaction.find();
    return res.status(200).json({
      sucess: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      sucess: false,
      error: "Server error",
    });
  }
};
// desc-add the transactions
// route- /api/v1/transactions
exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({ sucess: true, data: transaction });
  } catch (err) {
    if (err.name === "ValidationError") {
      console.log(err);
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        sucess: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        sucess: false,
        error: "Server error",
      });
    }
  }
};
// desc-dlt the transactions
// route- /api/v1/transactions/:id
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        sucess: false,
        error: "No transaction found",
      });
    }
    await transaction.remove();
    return res.status(200).json({
      sucess: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      sucess: false,
      error: "Server error",
    });
  }
};
