import React from 'react';
import {gql,useQuery} from '@apollo/client';

const GET_SESSIONS = gql`
query GetSessions{
    sessions{
		id
    title
    description
    day
  }
}
`
export default function Sessions() {
    const {data,error,loading} = useQuery(GET_SESSIONS);
    <div>welcome to appollo</div>
    if(loading) return <p>loading...</p>
     if(error) return <p>error</p>

     
  return data.sessions.map(({id,title,description,day})=>(
  <div className="card" style={{width:"400px",marginBottom:"1em"}}  key={id}>
    {/* <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%" /> */}
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{description}</p>
      <p className="card-text">{day}</p>
    </div>
  </div>
   ))
}
