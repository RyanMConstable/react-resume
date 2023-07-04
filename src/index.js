import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page.js'
import GitLink from './GitLink.js'
import './index.css';

function Contact(){
  return (
    <>
      <a href="https://RyanMConstable@gmail.com" rel="external">RyanMConstable@gmail.com</a>
    </>
  )
}


function Main(){
  return (
    <>
      <div display="inline">
        <Page/>
        <GitLink/>
        <br/>
        <Contact/>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);





