import React, { Component } from 'react'

 class RestaurantInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'CREATE_RESTAURANT',
      restaurant: {
        text: this.state.text
      }
    })
    this.setState({
      text: ''
    })
  }

   render() {
     return (
       <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Create Restaurant</label>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleChange(event)}
          />
          <input type="submit" />
        </form>
       </div>
    )
   }
}

export default RestaurantInput
