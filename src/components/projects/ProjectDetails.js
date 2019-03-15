import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-title'>
          <span className='card-title'>Project Title - {id}</span>
          <p>DNkjsdfn kjsndjks ksjdf ksjn kasjnf kjsn dfmwefn ksdjbnfksj db sdf kj  ksdfkn jksajfn kjns dfmbds s,dj.</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted By Richard Graham</div>
          <div>2nd September, 2am </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails