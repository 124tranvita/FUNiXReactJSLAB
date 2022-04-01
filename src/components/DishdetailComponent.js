import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { COMMENTS } from '../shared/comments';

function DishDetail({ selectedDish }) {
  console.log(COMMENTS);
  return (
    <div className='row m-2'>
      <div className='col-12 col-md-6'>
        <Card>
          <Card.Img variant="top" src={selectedDish.image} alt={selectedDish.name} width="auto" />
          <Card.Body>
            <Card.Title>{selectedDish.name}</Card.Title>
            <Card.Text>{selectedDish.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Category: {selectedDish.category}</ListGroupItem>
            <ListGroupItem>Price: {selectedDish.price}</ListGroupItem>
            <ListGroupItem>Label: {selectedDish.label || "None"}</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
      <div className='col-12 col-md-6' style={{ textAlign: "left" }}>
        <h4>Comments</h4>
        <ul className='list-unstyled'>
          {COMMENTS.map((comment) => (
            <li key={comment.id}>
              <p>{comment.content}</p>
              <p>-- {comment.username}<span>{comment.date}</span></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DishDetail