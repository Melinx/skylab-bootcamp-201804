import React, { Component } from 'react'
import api from 'api'

import './index.css'

class Todaymenu extends Component {

    constructor() {
        super()
        this.state = {
            courses: []
        }
    }

    componentWillMount() {
        api.listCoursesByDay()
            .then(({ courses }) => this.setState({ courses }))
    }

    render() {
        return (
            <section id="todaymenu" className="section section-popular scrollspy">
                <div className="sectiontitle">
                    <h4 className="center">On the Menu
        <span className="pink-text"> Today</span>
                        <hr />
                    </h4>

                    <div className="container">
                        <div className="row s12 m4">
                            <div className="row">
                                {this.state.courses.length > 0 ? this.state.courses.map(course => {
                                    return (
                                        <div className="col s12 m3">
                                            <h6>{course.dishName}</h6>
                                            <img src={course.image} className='materialboxed responsive-img' width="650" alt="" />
                                        </div>
                                    )
                                }) : undefined}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="center-btn">
                    <a className="waves-effect waves-light pink btn-large">Order now</a>
                </div>

            </section>
        );
    }
}

export default Todaymenu