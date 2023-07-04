import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page.js'
import GitLink from './GitLink.js'
import Contact from './Contact.js'
import './index.css';

function Main(){
  return (
    <>
      <div display="inline">
        <Page name="Ryan Constable"/>
        <GitLink linked="LinkedIn" git="GitHub"/>
        <br/>
        <Contact contactName="RyanMConstable@gmail.com"/>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);





