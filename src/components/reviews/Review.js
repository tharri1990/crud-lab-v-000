import React, { Component } from 'react'

 class Review extends Component {

  deleteReview() {
    this.props.store.dispatch({
      type: "DELETE_REVIEW",
      id: this.props.review.id
    })
  }

   render() {
     return (
       <li>
        {this.props.review.text}
        <button onClick={() => this.deleteReview()}> X </button>
       </li>
    )
   }
}

export default Review
