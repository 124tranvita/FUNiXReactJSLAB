import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else
    return (
      <></>
    )
}

function RenderComment({ comments }) {
  const comment = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <p>{comment.content}</p>
        <p>-- <span>{comment.username}</span>, <span>{comment.date}</span></p>
      </div>
    )
  });

  return comment;
}

const DishDetail = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
          <RenderDish dish={props.dish} />
        </div>
        <div className='col-12 col-md-5 m-1' style={{ textAlign: 'left' }}>
          {props.dish != null && (
            <>
              <h3>Comment</h3>
              <RenderComment comments={props.comments} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DishDetail