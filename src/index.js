import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function page(){
  return (
    <h1 className="nameHeader">Ryan Constable</h1>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  page()
);





