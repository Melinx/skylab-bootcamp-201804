import React, { Component }  from 'react'
import logic from '../../logic'


class Order extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstCourses: [], //change according data model
      secondCourses: [],
    }
  }

  
  render() {
    
    const { firstCourse, secondCourse } = this.props

    return (
    <section>
      <section class="section section-icons grey lighten-4 center">
        <div class="container">
          <div class="row">
            <div class="col s12 m8">
              <div class="card-panel" href="#today">
                {/* <i class="material-icons large pink-text">shopping-basket</i> */}
                <h5>You have selected:</h5>
                <h6>{firstCourse}</h6>
                <br />
                <h6>{secondCourse}</h6>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card-panel">
                {/* <i class="material-icons large pink-text">clock</i> */}
                <h5>What time?</h5>
                <p>(pick a time) </p>
              </div>
            </div>
            <div class="col s12 m4">

            </div>
          </div>
        </div>
      </section>
    </section>

  );
  }
}

export default Order