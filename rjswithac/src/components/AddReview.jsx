import { gql,useMutation } from '@apollo/client';
import React, { useRef } from 'react';

const CREATE_SESSION = gql`
mutation submitReview($locationReview:LocationReviewInput){
  submitReview(locationReview:$locationReview) {
    message
    success
  }
}
`

export default function AddReview() {
    const locRef = useRef();
    const ratingRef = useRef();
    const commentRef = useRef();

    const [createSession, { called,error }] = useMutation(CREATE_SESSION);

    if(called) return <p>Review Submitted Successfully!</p>

    if(error) return <p>Failed to submit Review</p>


function addReview(e){
    e.preventDefault();
    let review = {
    "locationId":locRef.current.value,
    "rating":Number(ratingRef.current.value),
    "comment":commentRef.current.value
    }
    //createSession(review);
    createSession({variables:{"locationReview":review}})
}

  return (
    <>
    <div>AddReview</div>
    <form onSubmit={addReview}>  
  <label>
    location id:
    <input type="text" name="name" ref={locRef} />
  </label>
  <label>
   rating
    <input type="text" name="name" ref={ratingRef} />
  </label>
  <label>
   comment
    <input type="text" name="name" ref={commentRef} />
  </label>
    Submit
  <input type="submit" value="Submit" />
</form>
    </>
  )
}
