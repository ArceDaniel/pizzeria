import React from "react";
import Style from '../style/logo.module.css'
import { useNavigate } from "react-router-dom";

export default function Logo(){
    const navigate = useNavigate();
return(
    <>
    <button className={Style.buttonHome}  onClick={() =>  navigate("/")}/>
    <div className={Style.logo}></div>
    </>
)

}