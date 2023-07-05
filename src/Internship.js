import './Internship.css';

function Internship(props){
    return (
        <div className="singleInternship">
            <div className="internship">
                <h1 className="leftTitle">{props.companyName}</h1>
                <h1 className="rightTitle">{props.title}</h1>
            </div>
            <div className="details">
                <p>{props.summary}</p>
            </div>
        </div>
    );
}

export default Internship;