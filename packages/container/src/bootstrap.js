import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
    ;
};


// if we are in development andn in isolation call mount immediately
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#root');
    if(devRoot){
        mount(devRoot);
    }
}


export {mount};
