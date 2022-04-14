import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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

function RenderComments({ comments }) {
  const comment = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <p>{comment.comment}</p>
        <p>-- <span>{comment.author}</span>, <span>{comment.date}</span></p>
      </div>
    )
  });

  return comment;
}

const DishDetail = (props) => {
  return (
    <div className='container'>
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <h3>Comments</h3>
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  )
}

export default DishDetail