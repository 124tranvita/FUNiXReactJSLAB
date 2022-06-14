import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Row,
  Label,
  Col,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => !val || val.length <= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(value) {
    console.log("Current State is: " + JSON.stringify(value));
    alert("Current State is: " + JSON.stringify(value));
    console.log(this.props.dishId);
    this.props.postComment(this.props.dishId, 1, value.author, value.comment);
  }

  render() {
    return (
      <>
        <Button onClick={this.toggleModal}>
          <i className="fa fa-pencil fa-lg"></i> Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
              <Row className="form-group">
                <Label htmlFor="rating" className="form-label">
                  Rating
                </Label>
                <Control.select
                  className="form-control"
                  model=".rating"
                  id="rating"
                  name="rating"
                  placeholder="Your Name"
                >
                  <option selected>Choose your rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Control.select>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" className="form-label">
                  Your Name
                </Label>
                <Control.text
                  className="form-control"
                  model=".author"
                  id="author"
                  name="author"
                  placeholder="Your Name"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required. ",
                    minLength: "Must be greater then 2 characters. ",
                    maxLength: "Must be 15 characters or less. ",
                  }}
                />
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" className="form-label">
                  Comment
                </Label>
                <Control.textarea
                  className="form-control"
                  model=".comment"
                  id="comment"
                  name="comment"
                  rows="6"
                  placeholder="Enter your comment..."
                />
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" className="mt-3" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default CommentForm;
