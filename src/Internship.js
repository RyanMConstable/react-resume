import './InternshipExperience.css';

function Internship(props){
    return (
        <div className="internship">
            <h1>{props.companyName}</h1>
            <h1>{props.title}</h1>
        </div>
    );
}

export default Internship;