import React from "react";
const Data = {
  index: 2,
  message: "Congratulations, you just mined a block!",
  previous_hash:
    "71d047678a576efa741475180e478c0067d0578a39d38a208cf3d211077f9436",
  proof: 533,
  timestamp: "2021-04-12 14:16:03.821811",
  transactions: [
    {
      amount: 6,
      receiver:
        "30819f300d06092a864886f70d010101050003818d0030818902818100f2c85a8ca132491e479f09fc397d570366ddef225a4e05143833f4b65b1dd3c4befebcfd6301b7f141a3312df3c421ab87fd811868b2937d4452d023fe3af352b57da0da268a93772dd776a418df9dad999545715eb1171d9aa178535c5bb60d162e7e5af3664f80f30156ad2797edf973be87b65fbd57eaeefdc517dd2c339d0203010001",
      sender:
        "30819f300d06092a864886f70d010101050003818d0030818902818100d4d1f43628292cef0fac1b0785024b4c10ce95e83971d45e7852497b3c5e5bbf45fe5285bc0f5111cf4dea6d7eb8bc78a7b24fa8dd5f01e635343e4451d0caf1126305bc65b7012ddabefb5920cf660db501132859dd366d3efc5c4151cce3d8ad30ae0bbea43a1a9799081026dee2f7b9926448b66d744bf765689d49ccbda90203010001"
    },
    {
      amount: 1,
      receiver:
        "30819f300d06092a864886f70d010101050003818d0030818902818100a6444c65eecd2d73b33bafbe1dbe2f42a666a0f1b75bfa54ec4ec97081f5ac0a17392467ae1eeaac4e6c814dae7483c514fb775c64572c70da7b7956e10d74c4fac10da988a0c9a3f6f3eb71fa79ab40cbbe9657a097b174889c81e9b48615afaf50981dca751bab04031b9f20f79cefe538ac13d1fb304855aae295bb8dcdcf0203010001",
      sender: "b2588a931cb7410592587b4fd5ee695a"
    }
  ]
};
function TransactionRow(props) {
  console.log(props);
  return (
    <tr>
      <td style={{ wordWrap: "break-word", maxWidth: "30vw" }}>
        <b>{props.index + 1}</b>
      </td>
      <td style={{ wordWrap: "break-word", maxWidth: "30vw" }}>
        {props.sender}
      </td>
      <td style={{ wordWrap: "break-word", maxWidth: "30vw" }}>
        {props.receiver}{" "}
      </td>
      <td style={{ wordWrap: "break-word", maxWidth: "30vw" }}>
        {props.amount}
      </td>
    </tr>
  );
}
class MineTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      mined: false
    };
  }
  mineBlock = () => {
    //API CALL to set data
    this.setState({ mined: true });
  };
  render() {
    return (
      <div>
        <button
          class="button is-primary is-rounded"
          style={{ margin: "5%" }}
          onClick={this.mineBlock}
          disabled={this.state.mined}
        >
          <span class="icon">
            <i class="fas fa-coins"></i>
          </span>
          <span>Mine Transactions</span>
        </button>
        {this.state.mined && (
          <div class="table-container">
            <table class="table container">
              <thead>
                <tr>
                  <th style={{ wordWrap: "break-word", maxWidth: "30vw" }}>
                    No.
                  </th>
                  <th style={{ wordWrap: "break-word", maxWidth: "30vw" }}>
                    Sender
                  </th>
                  <th style={{ wordWrap: "break-word", maxWidth: "30vw" }}>
                    Receiver
                  </th>
                  <th style={{ wordWrap: "break-word", maxWidth: "30vw" }}>
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                {this.state.data.transactions.map((transaction, index) => (
                  <TransactionRow
                    sender={transaction.sender}
                    receiver={transaction.receiver}
                    amount={transaction.amount}
                    key={index}
                    index={index}
                    style={{ wordBreak: "break-all" }}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default MineTransaction;
