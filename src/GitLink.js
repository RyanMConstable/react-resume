function GitLink(props){
    return (
      <>
        <a href="https://www.linkedin.com/in/ryan-constable-3b159a214/" rel="external">{props.linked}</a>
        <br/>
        <a href="https://github.com/RyanMConstable" rel="external">{props.git}</a>
      </>
    )
  }


export default GitLink;