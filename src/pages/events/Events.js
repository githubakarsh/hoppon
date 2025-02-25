import { useEffect } from "react";


export const Events = () => {
    
    useEffect(() => {
        fetch('http://127.0.0.1:5000/get-events').then(resp => {
            console.log(resp.status, "get events");
        }).catch(error => {
            console.log("Error" );
        });
    }, []);
    return <>
    Events
    </>
};