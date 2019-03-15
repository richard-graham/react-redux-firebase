import React from 'react'

const ProjectSummary = (props) => {
  return (
    <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>Project Title</span>
            <p>Posted By {props.name}</p>
            <p className='grey-text'>14th of March, 3pm</p>
        </div>
      </div>
  )
}

export default ProjectSummary

