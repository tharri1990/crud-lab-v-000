import React, { Component } from 'react'
import ReviewInput from '../reviews/ReviewInput'

 class Restaurant extends Component {

  deleteRestaurant() {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    })
  }

   render() {
     return (
       <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={() => this.deleteRestaurant()}> X </button>
        </li>
        < ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
       </div>
    )
   }
}

export default Restaurant
