import React from 'react'

export default ({ audits }) => (
  <div className='pt-4 pb-4 border-bottom'>
    <h3>Code Audits</h3>
    {audits.length !== 0 ? (
      <table className='table table-bordered mb-0'>
        <thead className='thead-light'>
          <th scope="col">Auditor</th>
          <th scope="col">Audit</th>
          <th scope="col">Date</th>
        </thead>
        <tbody>
          {audits.map(audit => (
            <tr>
              <td><a href={audit.auditorWebsite} target="_blank">{audit.auditor}</a></td>
              <td><a href={audit.auditUrl} target="_blank" className='break-words'>{audit.auditUrl}</a></td>
              <td><p>{audit.auditDate}</p></td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>There are no known code audits.</p>
    )}
  </div>
)
