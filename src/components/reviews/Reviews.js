import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const associatedReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviews = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} store={this.props.store} />
    })
    return (
      <ul>
        {reviews}
      </ul>
    )
  }
}

export default Reviews
