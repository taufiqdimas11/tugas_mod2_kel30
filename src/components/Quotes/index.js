import React, { Component } from "react";
export default class Quotes extends Component {
    render() {
        return (
            <div
                className="flex flex-col items-center justify-center bg-gray-900 shadow-md"
                style={{ height: "200px" }}
            >
                <h3 className="block text-green-300">{this.props.quotes}</h3>
                <p className="block text-indigo-600">-{this.props.author}</p>
                <img src={this.props.quimage} alt="Footer" className="transform scale-50 object-end objectcover"/>
            </div>
        );
    }
}