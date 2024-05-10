// const Router = () =>  {
//     window.onhashchange = function(){
//         var hash = window.location.hash.split("#")[1];
//         window.localStorage.setItem('hash', hash );
//         window.location.reload(true);
//        // console.log(window.location.href);
//     }
//     if( window.location.href.indexOf("#") > -1 ){
//         window.localStorage.setItem('logs','Router Reloaded');
//         window.location.assign( window.location.hash.replace("#",""))
//     }
//     return window.localStorage.getItem('hash');
// }
// const redirect = ( hashurl ) => {
//        window.location.hash = hashurl;
// }
// let route = Router();
// export {route,redirect};


import React, { useState, useEffect } from 'react';

const Router = () => {
    const [hash, setHash] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
            const newHash = window.location.hash.split("#")[1];
            setHash(newHash);
        };

        window.addEventListener('hashchange', handleHashChange);

        // Initialize hash on component mount
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return hash;
}

const redirect = (hashUrl) => {
    window.location.hash = hashUrl;
}

export { Router, redirect };


