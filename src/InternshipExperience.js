import Internship from './Internship.js'

function InternshipExperience(props){
    let panzuraSummary = "My summary is";
    return (
        <div>
            <Internship companyName = "Panzura" title = "Jr. Associate Software Developer" summary={panzuraSummary}/>
        </div>
    );
}

export default InternshipExperience;