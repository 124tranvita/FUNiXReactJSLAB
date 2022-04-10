import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import { COMMENTS } from '../shared/comments';

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: COMMENTS
    }
  }

  renderSelectedDish() {
    if (this.props.selectedDish != null)
      return (
        <Card>
          <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
          <CardBody>
            <CardTitle>{this.props.selectedDish.name}</CardTitle>
            <CardText>{this.props.selectedDish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <></>
      );
  }

  renderComments() {
    const comment = this.state.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <p>-- <span>{comment.username}</span>, <span>{comment.date}</span></p>
        </div>
      )
    })
    if (this.props.selectedDish != null)
      return comment;
    else
      return (
        <></>
      )
  }

  render() {
    return (
      <div className='row' >
        <div className='col-12 col-md-5 mt-5'>
          {this.renderSelectedDish()}
        </div>
        <div className='col-12 col-md-5 mt-5' style={{ textAlign: 'left' }}>
          {(this.props.selectedDish != null) && (<h3>Comment</h3>)}
          {this.renderComments()}
        </div>
      </div>
    )
  }
}

export default DishDetail