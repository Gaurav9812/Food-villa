import { useRouteError } from "react-router-dom";
const Error = function(){

    const err = useRouteError();
    const {status, statusText } = err;

    return (
        <>
        <h1>This is error page!!!</h1>
         <h2>{status +" : "+ statusText}</h2>
         </>   
    )
}

export default Error;