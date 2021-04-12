import React from "react";
import TransactionCard from "./TransactionCard";

class ViewTransaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }
  updateTransactions = () => {};
  render() {
    const bottomRightStyle = {
      position: "fixed",
      right: "3%",
      bottom: "3%",
      borderRadius: "100%"
    };
    return (
      <div className="container">
        <h1 className="title" style={{ marginBottom: "3%" }}>
          <b>Transactions</b>
        </h1>
        <div className="columns is-multiline">
          {this.state.data.actual_chain[1].transactions.map((transaction) => (
            <TransactionCard
              sender={transaction.sender}
              receiver={transaction.receiver}
              amount={transaction.amount}
            />
          ))}
          <TransactionCard sender="Mahesh" receiver="Suresh" amount="200" />
          <TransactionCard sender="Mahesh" receiver="Suresh" amount="200" />
          <TransactionCard sender="Mahesh" receiver="Suresh" amount="200" />
          <TransactionCard sender="Mahesh" receiver="Suresh" amount="200" />
          <TransactionCard sender="Mahesh" receiver="Suresh" amount="200" />
        </div>
        <button
          class="button is-primary is-large"
          style={bottomRightStyle}
          onClick={this.updateTransactions}
        >
          <span class="icon">
            <i class="fas fa-sync"></i>
          </span>
        </button>
      </div>
    );
  }
}

const data = {
  actual_chain: [
    {
      index: 1,
      previous_hash: "0",
      proof: 1,
      timestamp: "2021-04-09 01:44:36.020152",
      transactions: []
    },
    {
      index: 2,
      previous_hash:
        "22b015a0f317f58991cf5a039c679003d95004f4f86394c1867b406dfbcad7ce",
      proof: 533,
      timestamp: "2021-04-09 01:45:16.739225",
      transactions: [
        {
          amount: 10,
          receiver: "Suresh",
          sender: "Mahesh"
        },
        {
          amount: 1,
          receiver: "Mahesh",
          sender: "53d8c0c6e0004ebdbad3ed6edf794897"
        }
      ]
    }
  ],
  message: "All good. The chain is the largest one."
};

export default ViewTransaction;
