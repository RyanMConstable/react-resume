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





