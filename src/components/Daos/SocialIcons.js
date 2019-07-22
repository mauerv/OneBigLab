import React from 'react'

import { MDBCol } from "mdbreact";

export default ({ social }) => (
  <MDBCol className='col-12 d-flex justify-content-center'>
    {social.github && (
      <a href={social.github} target='__blank' className='mr-3 ml-3'>
        <i className="fab fa-github fa-2x" aria-hidden="true"></i>
      </a>
    )}
    {social.telegram && (
      <a href={social.telegram} target='__blank' className='mr-3 ml-3'>
        <i className="fab fa-telegram fa-2x" aria-hidden="true"></i>
      </a>
    )}
    {social.discord && (
      <a href={`https://discordapp.com/invite/${social.discord}`} target='__blank' className='mr-3 ml-3'>
        <i className="fab fa-discord fa-2x" aria-hidden="true"></i>
      </a>
    )}
    {social.reddit && (
      <a href={`https://reddit.com/r/${social.reddit}`} target='__blank' className='mr-3 ml-3'>
        <i className="fab fa-reddit fa-2x" aria-hidden="true"></i>
      </a>
    )}
    {social.medium && (
      <a href={`https://medium.com/${social.medium}`} target='__blank' className='mr-3 ml-3'>
        <i className="fab fa-medium fa-2x" aria-hidden="true"></i>
      </a>
    )}
    {social.twitter && (
      <a href={`https://twitter.com/${social.twitter}`} target='__blank' className='mr-3 ml-3'>
        <i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
      </a>
    )}
    {social.youtube && (
      <a href={social.youtube} target='__blank' className='mr-3 ml-3'>
        <i className="fab fa-youtube fa-2x" aria-hidden="true"></i>
      </a>
    )}
  </MDBCol>
)
