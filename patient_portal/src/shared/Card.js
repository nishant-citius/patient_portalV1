import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card shadow-lg p-3 mb-5 bg-white rounded text-center">
        <div className="card-header text-success">
          <h6>{this.props.title}</h6>
        </div>
        <div className="card-body">
          {this.props.children}
          {this.props.footer}
        </div>
      </div>
    );
  }
}

export default Card;
