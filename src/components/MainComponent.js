import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelected(dishId) {
    this.setState({ selectedDish: dishId })
  }

  render() {
    const HomePage = () => {
      return (
        <Home />
      )
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />} />
          <Redirect to="/home" />
        </Switch>

        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} comments={COMMENTS} /> */}
        <Footer />
      </div>
    )
  }
}

export default Main