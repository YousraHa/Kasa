
import React, { useEffect, useState } from "react";
import housing from './data.json'
import Card from "../components/card";

const Api =(props) =>{
    const [items, setItems] = useState([housing]);

    // console.log(items, 'items');
    return (
        <>
                {/* {housing.map(({ id, title, cover }) => ( */}
                        <Card
                        key={props.id}
                        id={props.id}
                        title={props.title}
                        cover={props.cover}
                    />
                {/* ))}  */}
        </>
    )
}

export default Api