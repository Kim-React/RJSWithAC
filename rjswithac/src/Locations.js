import React from 'react'
import {gql,useQuery} from '@apollo/client'

const GET_LOCATIONS = gql`
query GetLocations{
  locations {
    id
    name
    description
    photo
    overallRating
  }
}
`
export default function Locations() {
    const {data,error,loading} = useQuery(GET_LOCATIONS);
    <div>welcome to appollo</div>
    if(loading) return <p>loading...</p>
     if(error) return <p>error</p>
  return data.locations.map(({id,name,photo,description,overallRating})=>(
    <div key={id}>
      <h3>{id}</h3>
    <h3>{name}</h3>
    <img width="400" height="250" alt="location-reference" src={photo} />
    <br />
    <b>About this location:</b>
    <p>{description}</p>
    <b>About this rating:</b>
    <p>{overallRating}</p>
    <br />
  </div>
  ))
}
