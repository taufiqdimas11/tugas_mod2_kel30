import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import quimage from "./assets/images/logo1.png";
const quotes="maaf kami kurang pro jadi seperti ini jadinya :)";
const kendaraan = [
  {jenis :'Mobil',roda:'4',warna:'abu',image:'https://asset.kompas.com/crops/q78JqO5-zMavlgtro4FjP27Ie-E=/0x34:600x434/750x500/data/photo/2021/04/19/607d4a758757a.jpg'},
  {jenis :'Motor',roda:'2',warna:'putih',image: 'https://pict.sindonews.net/dyn/620/pena/news/2021/01/01/121/287054/ayo-banyak-berdoa-ini-motormotor-keren-yang-semoga-rilis-di-indonesia-2021-yog.jpg'},
  {jenis :'Truk',roda:'6',warna:'orange',image: 'https://ktbfuso.co.id/assets/uploads/categories/Bak-Kayu-LDT.png'},
  {jenis :'Becak',roda:'3',warna:'merah',image: 'https://assets-a1.kompasiana.com/items/album/2020/09/06/becak-ok-5f54e7fbbb83122bf90770c2.jpg'},
  ]

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div style={{display:'flex', flex:1,flexDirection:'row'}}>
    {kendaraan.map((item,index)=>(
  <CardList id={index} jenis={item.jenis} roda={item.roda} warna={item.warna} image={item.image} />
  ))
  }
  </div>
    <Quotes author="Kelompok 30" quotes={quotes} quimage={quimage} />
  </React.StrictMode>,
  document.getElementById("root")
);