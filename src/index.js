import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import quimage from "./assets/images/logo1.png";
import Biodata from "./components/Cardlist1";

const quotes="maaf kami kurang pro jadi seperti ini jadinya :)";
const kendaraan = [
  {jenis :'Mobil',roda:'4',warna:'abu',image:'https://asset.kompas.com/crops/q78JqO5-zMavlgtro4FjP27Ie-E=/0x34:600x434/750x500/data/photo/2021/04/19/607d4a758757a.jpg', SIM :'A'},
  {jenis :'Motor',roda:'2',warna:'putih',image: 'https://pict.sindonews.net/dyn/620/pena/news/2021/01/01/121/287054/ayo-banyak-berdoa-ini-motormotor-keren-yang-semoga-rilis-di-indonesia-2021-yog.jpg', SIM : 'C'},
  {jenis :'Truk',roda:'6',warna:'orange',image: 'https://ktbfuso.co.id/assets/uploads/categories/Bak-Kayu-LDT.png', SIM : 'B'},
  {jenis :'Becak',roda:'3',warna:'merah',image: 'https://assets-a1.kompasiana.com/items/album/2020/09/06/becak-ok-5f54e7fbbb83122bf90770c2.jpg', SIM : '-'},
  ];
  
  const data = [
    {quote : '"Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu,\n bingungkan dia dengan kebodohanmu."', author : '-Septian', image : '/septian2.JPG', nama : 'septian nugraha', nim : '21120118130078'},
    {quote : '"Jika seseorang melemparmu dengan batu,\n balaslah dengan bunga.. sekalian dengan potnya."', author : '-Dimas', image : '/topek.jpg', nama : 'Taufiq Dimas R', nim : '21120118140093'}
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div style={{display:'flex', flex:1,flexDirection:'row'}}>
    {kendaraan.map((item,index)=>(
  <CardList id={index} jenis={item.jenis} roda={item.roda} warna={item.warna} image={item.image} SIM={item.SIM}/>
  ))
  }
  </div>
 
  {data.map((item,index) => (
<Biodata id={index} quote={item.quote} author={item.author} image={item.image} nama={item.nama} nim={item.nim} />
))
}
    <Quotes author="Kelompok 30" quotes={quotes} quimage={quimage} />
 
  </React.StrictMode>,
  document.getElementById("root")
);