import 'React' from react;

const Project = () => {
  return (
    <a className="cmp-cta__link" href={props.projectLink}>
      <div className="cmp-cta__item">
        <div className="cmp-cta__content">
          <h2>{props.projectTitle}</h2>
          <p>{props.projectDescription}</p>
        </div>
      </div>
    </a>
  )
}

export default Project;