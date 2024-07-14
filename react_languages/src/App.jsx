import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next'

export default function App() {
  const [t,i18n]=useTranslation("global");
  const changeLanguage=(lng)=>{
    i18n.changeLanguage(lng);
  }
  return (
    <>
       <h1>{t("header.title")}</h1>
       <div>{t("body.message")}</div>
       <button onClick={()=>{changeLanguage("en")}}>Eng</button>
       <button onClick={()=>{changeLanguage("kh")}}>Khmer</button>
    </>
   
  )
}
