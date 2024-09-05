import React , {useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({filter,setRate,newRate}) => {
  const [Rating ,setRating]= useState(1)
  const onStarClick =(nextValue, prevValue, name) =>{
    setRate({nextValue});
  }
  return (
    <div>
      <input  type='text' placeholder="Search for a movie" onChange={(e)=> filter(e.target.value)}/>
      
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newRate}
          onStarClick={onStarClick}
        />
      
    </div>
  )
}

export default Filter
