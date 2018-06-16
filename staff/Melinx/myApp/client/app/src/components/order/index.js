import React, { Component } from 'react'
import api from 'api'
import { Link } from 'react-router-dom'
import Alert from 'react-s-alert'
import './index.css'
import logic from '../../logic'



class Order extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ids: '', // I tried params initializig
      firstCourses: [],
      secondCourses: [],
    }
  }

  // TODO SELECT PICKUP TIME before placing order

  componentDidMount(){

    const { firstCourse, secondCourse } = this.props

     logic.retrieveCourses(firstCourse, secondCourse)
      .then(res => {
        console.log('res: ', res);
        
      })

  }


  handleOrder = e => {
    e.preventDefault()
   
   

      .catch(({ message }) => {
        Alert.success('Order placed correctly! :p ', {
          position: 'top-right',
          timeout: 1000
        })
      })
  }

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
                <button className="waves-effect pink  waves-light btn"> Proceed with Payment </button>
                <Alert effect='bouncyflip' offset={150} />
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