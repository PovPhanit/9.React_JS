import { createContext, useContext, useState,cloneElement } from "react";
import { useSearchParams } from "react-router-dom";


const ShowContext=createContext();

function Show({children}){
    const [count,setCount]=useState(0);
    const increement=()=>{setCount((c)=>c+1)};
    const decreement=()=>{setCount((c)=>c-1)};
 return (
    <ShowContext.Provider value={{count,increement,decreement}}>
        {children}
    </ShowContext.Provider>
 )
}
function Count({children}){
    
    const {count}=useContext(ShowContext);
    return(
        <>
        {count}
        </>
    )     
}
function Increement({icon}){
    const [params,setSearchParam]=useSearchParams();
    const {increement}=useContext(ShowContext);
    setSearchParam(`source=168`);
    return (
        <button onClick={increement}>{icon}</button>
    )
}
function Decreement({children,icon}){
    const {decreement}=useContext(ShowContext);
    return (
        <button onClick={decreement}>{icon}</button>
    )
}
function Label({children,test}){
    return (
        <div>{children}</div>
    )
}

Show.Counts=Count;
Show.Labels=Label;
Show.Increements=Increement;
Show.Decreements=Decreement;
export default Show;





















// const SadContext=createContext();
// function SadHz({children}){
//     console.log(children.props.children);
//     return(<SadContext.Provider>{children.props.children}</SadContext.Provider>);
// }
// function Somvo({children}){
//     console.log(children);
//     return (
//         <div>{children}</div>
//     )
// }
// SadHz.Somvoa=Somvo;
// export default SadHz;