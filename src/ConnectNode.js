import React from "react";

class ConnectNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeUrl: "",
      connectedNodes: []
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  connectNode = (e) => {
    this.setState({
      connectedNodes: [...this.state.connectedNodes, this.state.nodeUrl]
    });
  };
  render() {
    return (
      // <form class="box" style={{ margin: "5% 25% 15% 25%" }}>
      <div class="container">
        {/* <div class="field has-addons">
          <div class="control">
            <input
              class="input"
              name="nodeUrl"
              type="text"
              placeholder="Enter URL"
              value={this.state.nodeUrl}
              onChange={this.handleChange}
            />
          </div>
          <div class="control">
            <a class="button is-success" onClick = {this.displayURL}>Connect</a>
          </div>
        </div> */}
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Enter URL"
            name="nodeUrl"
            value={this.state.nodeUrl}
            onChange={this.handleChange}
          />
        </div>
        <div class="control">
          <button class="button is-primary" onClick={this.connectNode}>
            Connect Node
          </button>
        </div>
        {this.state.connectedNodes.map((node, index) => (
          <div>
            <span key={index}>{node}</span>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default ConnectNode;
