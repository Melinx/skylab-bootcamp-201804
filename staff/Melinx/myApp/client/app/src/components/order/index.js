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
      ids: '',
      firstCourses: [],
      secondCourses: [],
      firstCourseImage: '',
      secondCourseImage: '',
      firstCourseName: '',
      secondCourseName: '',
      payment: false
    }
  }
  // TODO SELECT PICKUP TIME before placing order

  componentDidMount() {

    const { firstCourse, secondCourse } = this.props

    logic.retrieveCourses(firstCourse, secondCourse)
      .then(res => {

        // console.log('res: ', res.course[0]);
        // console.log('res: ', res.course[1]);

        this.setState({
          firstCourseName: res.course[0].dishName,
          firstCourseImage: res.course[0].image,
          secondCourseName: res.course[1].dishName,
          secondCourseImage: res.course[1].image,
        })
      }).catch(err => console.error(err.message))

    console.log('basket: ', this.state.basket);
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
                <div className="card-panel">
                    <h5 className="center">You have selected:</h5>
                    <div className="row">
                      <div className="col s12 m6">
                        <h6>{this.state.firstCourseName}</h6>
                        <img src={this.state.firstCourseImage} className="center materialboxed responsive-img" alt="" />
                      </div>
                      <div className="col s12 m6">
                        <h6>{this.state.secondCourseName}</h6>
                        <img src={this.state.secondCourseImage} className="center materialboxed responsive-img" alt="" />
                      </div>
                   <div>
                     <hr/>
                     <br/>
                <button className="waves-effect pink  waves-light btn"> Proceed with Payment </button>
                <Alert effect='bouncyflip' offset={150} />
                </div>

                  </div>
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