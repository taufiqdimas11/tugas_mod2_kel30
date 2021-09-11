import React, { Component } from "react";
export default class Quotes extends Component {
    render() {
        return (
            <div
                className="flex items-center justify-start bg-gray-900 shadow-md" 
                style={{ height: "200px" }}
            >
               
               <div className = "flex-shrink-0 mr-3">
                <img src={this.props.quimage} alt="Footer" className="w-15 h-15 rounded-xl"/>
                </div>
                <div>
                <h3 className="block text-green-300">{this.props.quotes}</h3>
                <p className="block text-indigo-600">-{this.props.author}</p>
                </div>
            </div>
        );
    }
}