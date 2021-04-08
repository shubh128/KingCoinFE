import React from "react";

class TransactionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column is-one-quarter">
        <div class="card">
          <div class="card-content">
            <span class="title">{this.props.amount}</span>
            <span class="subtitle"> KING</span>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span style={{ wordBreak: "break-all" }}>
                {/* View on{" "}
                <a href="https://twitter.com/codinghorror/status/506010907021828096">
                  Twitter
                </a> */}
                <span>
                  <b>Sender</b>
                </span>
                <br />
                {this.props.sender}
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                {/* Share on <a href="#">Facebook</a> */}
                <span>
                  <b>Receiver</b>
                </span>
                <br />
                {this.props.receiver}
              </span>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default TransactionCard;
