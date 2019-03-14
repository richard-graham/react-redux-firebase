import React from 'react'

const ProjectList = () => {
  return (
    <div className='project-list section'>

      <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>Project Title</span>
            <p>Posted By Richard</p>
            <p className='grey-text'>14th of March, 3pm</p>
        </div>
      </div>

      <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>Project Title</span>
            <p>Posted By Pete</p>
            <p className='grey-text'>19th of March, 2pm</p>
        </div>
      </div>

      <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>Project Title</span>
            <p>Posted By Richard</p>
            <p className='grey-text'>14th of March, 3pm</p>
        </div>
      </div>

    </div>
  )
}

export default ProjectList