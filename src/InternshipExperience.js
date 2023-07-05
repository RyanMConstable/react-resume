import Internship from './Internship.js'

function InternshipExperience(props){
    let panzuraSummary = "I started off as a Fullstack Developer Intern. After developing my skills in React, mySQL, Node.js, and Express I was moved to";
    panzuraSummary += " a maintaining team where I wrote Python scripts to automate server cleanup."
    
    let tokioSummary ="Another internship experience"
    return (
        <div>
            <Internship companyName = "Panzura" title = "Jr. Associate Software Developer" summary={panzuraSummary}/>
            <Internship companyName ="Tokio Marine HCC" title = "Software Developer Intern" summary={tokioSummary}/>
        </div>
    );
}

export default InternshipExperience;