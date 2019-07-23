import React from 'react'

export default ({ audits }) => (
  <div>
    <h3>Code Audits</h3>
    {audits.length !== 0 ? (
      <table className='table table-bordered'>
        <thead className='thead-light'>
          <th>Auditor</th>
          <th>Audit</th>
          <th>Date</th>
        </thead>
        <tbody>
          {audits.map(audit => (
            <tr>
              <td><a href={audit.auditorWebsite} target="_blank">{audit.auditor}</a></td>
              <td><a href={audit.auditUrl} target="_blank">{audit.auditUrl}</a></td>
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
