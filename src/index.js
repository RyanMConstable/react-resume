import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page.js'
import GitLink from './GitLink.js'
import Contact from './Contact.js'
import EducationSection from './EducationSection.js'
import './index.css';
import InternshipExperience from './InternshipExperience.js';

function Main(){
  return (
    <InternshipExperience/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);





