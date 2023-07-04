import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page.js'
import './index.css';

function GitHubLinkedIn(){
  return (
    <>
      <a href="https://www.linkedin.com/in/ryan-constable-3b159a214/" rel="external">LinkedIn</a>
      <br/>
      <a href="https://github.com/RyanMConstable" rel="external">Github</a>
    </>
  )
}

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
        <GitHubLinkedIn/>
        <br/>
        <Contact/>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);





