import { useEffect } from "react";



export const Home = () => {
     useEffect(() => {
        fetch('http://127.0.0.1:5000/events-list').then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(`error - ${error}`);
        });
      }, []);
    return <>Users ....</>;
};