import React from 'react'

export default ({ documents }) => (
  <div>
    <h3>Important Docs</h3>
    <div className='row'>
      {documents.map(document => (
        <div className='col-2 text-center'>
          <a href={document.url}>
            <i className="far fa-file-alt fa-4x secondary-icon"></i>
            <p className='mt-1'>{document.title}</p>
          </a>
        </div>
      ))}
    </div>
  </div>
)
