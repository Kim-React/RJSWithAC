import React from 'react'
import {gql,useQuery} from '@apollo/client'

const GET_SESSIONS = gql`
query GetSessions{
    sessions{
		id
    title
    description
  }
}
`
export default function Sessions() {
    const {data,error,loading} = useQuery(GET_SESSIONS);
    <div>welcome to appollo</div>
    if(loading) return <p>loading...</p>
     if(error) return <p>error</p>
  return data.sessions.map(({id,title,description})=>(
    <div key={id}>
      <h3>{id}</h3>
    <h3>{title}</h3>
    <br />
    <b>About this session:</b>
    <p>{description}</p>
    <br />
  </div>
  ))
}
