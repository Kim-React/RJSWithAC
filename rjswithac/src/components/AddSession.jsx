import { gql,useMutation } from '@apollo/client';
import React, { useRef } from 'react';

const CREATE_SESSION = gql`
mutation
TechConferenceMutation($sessioninput:sessionInput!){
  createSession(session:$sessioninput){
 title
  description}
}
`
export default function AddSession() {
    const titleRef = useRef();
    const descRef = useRef();
    const roomRef = useRef();
    const dayRef = useRef();
    const formatRef = useRef();

    const [createSession, { called,error }] = useMutation(CREATE_SESSION);

    if(called) return <p>Review Submitted Successfully!</p>

    if(error) return <p>Failed to submit Review</p>

function addSession(e){
    e.preventDefault();
   let session = 
       {
           "title": titleRef.current.value,
            "description":descRef.current.value,
            "room":  roomRef.current.value,
           "day": dayRef.current.value,
            "format": formatRef.current.value
        }
        createSession({variables:{"sessioninput":session}})
    }
    return (
        <>
        <div>Add Session</div>
        <form onSubmit={addSession}>  
        <div>
        <label>
        title:
        <input type="text" name="name" ref={titleRef} />
      </label>
        </div>

        <div>
        <label>
       description
        <input type="text" name="name" ref={descRef} />
      </label>
        </div>
    
    <div>
    <label>
      room
        <input type="text" name="name" ref={roomRef} />
      </label>
    </div>
      
      <div>
      <label>
       day
        <input type="text" name="name" ref={dayRef} />
      </label>
      </div>

    <div>
    <label>
       format
        <input type="text" name="name" ref={formatRef} />
      </label>
    </div>
   
   <div>
   Submit
      <input type="submit" value="Submit" />
   </div>
    
     
    </form>
        </>
      )
}

  
  

