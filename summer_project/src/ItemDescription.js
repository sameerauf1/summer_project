import React, { Component } from "react";

export default class ItemDescription extends Component {
  render() {
    return (
      <div>
        <p> {this.props.name}</p>
        <p>
          <i> {this.props.description} </i>
        </p>
      </div>
    );
  }
}
