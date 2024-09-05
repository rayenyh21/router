import React, { useState } from 'react'
import {Modal,Button,Form,Col} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

const Add = ({show,handleClose,addMovie}) => {
  const[newMovie, setNewMovie]=useState({
    Date:"" ,
    Title: "",
    Time: " ",
    Rate: 1 ,
    Genre: "",
    Description:" ",
    main_img :""

  })
    const onStarClick =(nextValue, prevValue, name) =>{
      setNewMovie({...newMovie, rate:nextValue})
  }

  const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>

          <Form>
            <fieldset >
                <Form.Group className="mb-3">
                <Modal.Title>Add a movie</Modal.Title>
                <Form.Label htmlFor="disabledTextInput" >Title</Form.Label>
                <Form.Control type='text'  placeholder="Enter the Title of the Film"  onChange={handleChange} name="Title" />
                <Form.Label htmlFor="disabledTextInput">Image_Url</Form.Label>
                <Form.Control type='text'  placeholder="Enter the link image of the Film"  onChange={handleChange} name="main_img"/>
                <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newMovie.Rate}
          onStarClick={onStarClick}
        />
                <Form.Label htmlFor="disabledTextInput">Duration</Form.Label>
                <Form.Control type='text'  placeholder="Enter the Duration of the Film" onChange={handleChange} name="Time"/>
                <Form.Label htmlFor="disabledTextInput">Date</Form.Label>
                <Form.Control type='text'  placeholder="Enter the Date of the Film"  onChange={handleChange} name ="Date"/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect" >Genre</Form.Label>
                <Form.Select id="disabledSelect"  onChange={handleChange} name="Genre">
                    <option>Thriller</option>
                    <option>Drama</option>
                    <option>Romance</option>
                    <option>Horror</option>


                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect"  >Description</Form.Label>
                            <Form.Control
                    as="textarea"
                    placeholder="Leave a Description here"
                    style={{ height: '120px',width:'350px' ,}}
                    onChange={handleChange} name="Description"
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </fieldset>
          </Form>
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {addMovie(newMovie); handleClose()}}>
            Add 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
