import React from "react";

function UserKeys(props) {
  return (
    <div class="card container" style={{ marginTop: "5%" }}>
      <header class="card-header">
        <p class="card-header-title">User Details: {props.username}</p>
      </header>
      <div class="card-content">
        <div class="content" style={{ wordBreak: "break-all" }}>
          <b>User Public Key : </b>
          {props.publicKey}
          <br />
          <br />
          <b>User Private Key : </b> {props.privateKey}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userPublicKey:
        "30819f300d06092a864886f70d010101050003818d0030818902818100d4d1f43628292cef0fac1b0785024b4c10ce95e83971d45e7852497b3c5e5bbf45fe5285bc0f5111cf4dea6d7eb8bc78a7b24fa8dd5f01e635343e4451d0caf1126305bc65b7012ddabefb5920cf660db501132859dd366d3efc5c4151cce3d8ad30ae0bbea43a1a9799081026dee2f7b9926448b66d744bf765689d49ccbda90203010001",
      userPrivateKey:
        "30819f300d06092a864886f70d010101050003818d0030818902818100d4d1f43628292cef0fac1b0785024b4c10ce95e83971d45e7852497b3c5e5bbf45fe5285bc0f5111cf4dea6d7eb8bc78a7b24fa8dd5f01e635343e4451d0caf1126305bc65b7012ddabefb5920cf660db501132859dd366d3efc5c4151cce3d8ad30ae0bbea43a1a9799081026dee2f7b9926448b66d744bf765689d49ccbda90203010001" +
        "30819f300d06092a864886f70d010101050003818d0030818902818100d4d1f43628292cef0fac1b0785024b4c10ce95e83971d45e7852497b3c5e5bbf45fe5285bc0f5111cf4dea6d7eb8bc78a7b24fa8dd5f01e635343e4451d0caf1126305bc65b7012ddabefb5920cf660db501132859dd366d3efc5c4151cce3d8ad30ae0bbea43a1a9799081026dee2f7b9926448b66d744bf765689d49ccbda90203010001",
      fetched: false,
      isDisabled: true
    };
  }

  handleChange = (e) => {
    this.setState({ username: e.target.value }, () => {
      if (this.state.username.length > 0) {
        this.setState({ isDisabled: false });
      } else {
        this.setState({ isDisabled: true });
      }
    });
    console.log(this.state.username);
  };

  fetchUserDetails = (e) => {
    //api call
    e.preventDefault();
    this.setState({ fetched: true });
  };
  render() {
    return (
      <div>
        {!this.state.fetched && (
          <form class="box" style={{ margin: "5% 25% 2% 25%" }}>
            <div class="field">
              <label class="label">Enter your username</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  disabled={this.state.fetched}
                />
              </div>
              <br />
              <p class="control">
                <button
                  class="button is-primary"
                  onClick={this.fetchUserDetails}
                  disabled={this.state.isDisabled}
                >
                  Add User
                </button>
              </p>
            </div>
          </form>
        )}
        <div>
          {this.state.fetched && (
            <UserKeys
              username={this.state.username}
              privateKey={this.state.userPrivateKey}
              publicKey={this.state.userPublicKey}
            />
          )}
        </div>
      </div>
    );
  }
}

export default AddUser;
