import React,{useEffect,useState} from "react";


function DisplayList({getItems}){
    const [items,setItems] = useState([]);

    useEffect(()=>{
        setItems(getItems());
        console.log('Updating items')
    },[getItems])
    return items.map((item)=><div key={item}>{item}</div>)
}
export default DisplayList;