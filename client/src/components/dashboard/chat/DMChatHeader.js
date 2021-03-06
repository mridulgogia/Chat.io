import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DMChatHeader extends Component {
  render() {
    const { subViewData } = this.props.currentView;
    const { userData } = this.props.user;
    const username =
      userData.directMessages[subViewData.selectedDM].user.username;
    const status = userData.directMessages[subViewData.selectedDM].user.status;
    return (
      <div className="friend-status-options d-flex align-items-center">
        <div
          style={{
            width: "100%",
            height: "80%",
            borderBottom: "1px solid #2a2c31",
          }}
        >
          <div style={{ width: "80rem", height: "100%", position: "relative" }}>
            <div style={{ width: "20rem", height: "100%" }} className="d-flex">
              <div
                style={{ width: "100%", height: "100%" }}
                className="d-flex ml-4 align-items-center"
              >
                <span style={{ fontWeight: "bolder", color: "#8e9297" }}>
                  @
                </span>
                <p
                  className="text-light mb-0 ml-1"
                  style={{ fontWeight: "bold" }}
                >
                  {username}
                </p>
                <div className={status + " status ml-2"} />
              </div>
            </div>
            <div
              style={{
                width: "20rem",
                height: "100%",
                left: "40rem",
                top: "0",
                position: "absolute",
              }}
              className="d-flex"
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="d-flex ml-4 justify-content-end align-items-center"
              >
                <div
                  style={{ width: "12%", height: "90%" }}
                  className="ml-5 d-flex justify-content-center align-items-center highlight"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Start Voice Call"
                >
                  <img
                    src="./assets/image/call.png"
                    alt="call"
                    className="img-fluid"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div
                  style={{ width: "12%", height: "90%" }}
                  className="ml-3 d-flex justify-content-center align-items-center highlight"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Start Video Call"
                >
                  <img
                    src="./assets/image/videoCall.png"
                    alt="videoCall"
                    className="img-fluid"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DMChatHeader.propTypes = {
  currentView: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentView: state.currentView,
  user: state.user,
});

export default connect(mapStateToProps)(DMChatHeader);
