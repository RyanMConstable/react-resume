import Internship from './Internship.js'

function InternshipExperience(props){
    let panzuraSummary = "My summary is that I would like to see what happens when I go over and entire line because that would be interesting to see";
    return (
        <div>
            <Internship companyName = "Panzura" title = "Jr. Associate Software Developer" summary={panzuraSummary}/>
        </div>
    );
}

export default InternshipExperience;