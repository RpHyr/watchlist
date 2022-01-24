import {useDispatch} from 'react-redux';
import { fetchContent } from "../../store/contentSlice";
import { Button, Form } from 'react-bootstrap';

export default function ContentForm (){
  const dispatch = useDispatch();
 
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    const searchText = e.target.content.value;
    console.log(e.target.content);
    dispatch(fetchContent(searchText));
  }
  return(
    <>
      <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="content">
    <Form.Label>Find TV Shows/ Movies</Form.Label>
    <Form.Control type="text" placeholder="Enter Movies/TV Shows" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="year">
    <Form.Label>Year</Form.Label>
    <Form.Control type="number" placeholder="Year" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="language">
    <Form.Label>Language</Form.Label>
    <Form.Control type="text" placeholder="Language" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    
  </> 
  )
}