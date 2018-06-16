import React, { Component }  from 'react'
import api from 'api'
import { Link } from 'react-router-dom'
import Alert from 'react-s-alert'
import './index.css'
import logic from '../../logic'



class Order extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstCourses: [], //change according data model
      secondCourses: [],
    }
  }

  // logic.retrieveCourse()

  
  render() {
    
    const { firstCourse, secondCourse } = this.props

    return (
    <section>
      <section className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <div className="card-panel" href="#today">
                {/* <i className="material-icons large pink-text">shopping-basket</i> */}
                <h5>You have selected:</h5>
                <h6>{firstCourse}</h6>
                <br />
                <h6>{secondCourse}</h6>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                {/* <i className="material-icons large pink-text">clock</i> */}
                <h5>What time?</h5>
                <select name="Hours" id="pick-time">
                  <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
                </select>
                <p>(pick a time) </p>
              </div>
            </div>
            <div className="col s12 m4">

            </div>
          </div>
        </div>
      </section>
    </section>

  );
  }
}

export default Order