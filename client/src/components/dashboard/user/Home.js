import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setDefaultView } from "../../../actions/viewAction";

class Home extends Component {
  render() {
    const { selected } = this.props.currentView;
    return (
      <div className="box">
        {selected === "0" ? (
          <div className="notification notification-selected" />
        ) : (
          <div className="notification-none" />
        )}
        <div className="home">
          <div
            className="server"
            data-toggle="tooltip"
            data-placement="right"
            title="Home"
            id="home"
            onClick={() => {
              this.props.removeFunctionReference("modalFunc");
              this.props.setDefaultView();
            }}
          >
            <img src="./favicon.ico" alt="logoico" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  currentView: PropTypes.object.isRequired,
  setDefaultView: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentView: state.currentView,
});

export default connect(mapStateToProps, {
  setDefaultView,
})(Home);
