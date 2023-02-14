import React, { useState } from "react";
import "./style.css"
import Menu from "./menuapi";
import MenuCard from "./menuCard";
import Login from "./header";

export const Resturent = () =>{
  const [menuData,setMenuData] =useState(Menu);

  const filteritem = (category) =>{
  const updatedList =Menu.filter((curelem)=>{
    return curelem.category===category;
  })
  setMenuData(updatedList)

};
  return (
    <> 
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" 
        onClick={ ()=>filteritem("breakfast")}>
           breakfast</button>
        <button className="btn-group__item" onClick={ ()=>filteritem("lunch")}> lunch</button>
        <button className="btn-group__item" onClick={ ()=>filteritem("evening")}> evening</button>
        <button className="btn-group__item" onClick={ ()=>filteritem("dinner")}> dinner</button>
        <button className="btn-group__item" onClick={ ()=>setMenuData(Menu)}> all</button>

      </div>
    </nav>
    <MenuCard menuData ={menuData}/>
    <Login/>
    </>
  )
}
export default Resturent;
