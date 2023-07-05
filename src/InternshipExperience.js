import Internship from './Internship.js'

function InternshipExperience(props){
    let panzuraSummary = "My summary is that I would like to see what happens when I go over and entire line because that would be interesting to see";
    let tokioSummary ="Another internship experience"
    return (
        <div>
            <Internship companyName = "Panzura" title = "Jr. Associate Software Developer" summary={panzuraSummary}/>
            <Internship companyName ="Tokio Marine HCC" title = "Software Developer Intern" summary = {tokioSummary}/>
        </div>
    );
}

export default InternshipExperience;