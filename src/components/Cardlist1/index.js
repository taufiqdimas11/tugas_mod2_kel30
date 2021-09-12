import React, { Component } from "react";
export default class Quotes extends Component {
    
render() {
    const {id, quote, image, nama, nim, author} = this.props;
return (
<div key={id} className = "flex items-center justify-center min-hscreen bg-gray-100">
    <div className = "w-4/12">
        <div className = "bg-white shadow rounded-xl overflow-hidden mt-6 grid grid-cols-1 gap-y-10 gap-x-6 ">
            <div className ="px-8 py-5 leading-relaxed text-xl text-gray-800" style={{ height: "200px" }} >
            <h3 className ="font-bold textxl">{quote}</h3>
            <p>{author}</p>
            </div>
            <div className="px-8 py-5 bg-gray-500">
                <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                        <img className="w-10 h-10 rounded-full border-2 border-white" src={image} alt="footer"/>
                    </div>
                    <div className="text-white" style={{whiteSpace: 'pre-line'}}>
                        {nama} {'\n'} {nim}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}
}