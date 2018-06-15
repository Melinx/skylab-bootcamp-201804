import React, { Component } from 'react'
import api from 'api'
import CourseCard from './coursecard'
import './index.css'
import logic from '../../logic'


class Todaymenu extends Component {

    constructor() {
        super()
        this.state = {
            firstCourses: [], //change according data model
            secondCourses: [],
        }
    }

    componentDidMount() {
        api.listCoursesByDay()
            .then(({ courses }) => this.setState({ firstCourses: courses }))

        api.listCoursesByDay(true)
            .then(({ courses }) => this.setState({ secondCourses: courses }))
    }

    // selectCourse = (category, courseId) => {
    //     this.props.addCourse(category,courseId)
    // }

    render() {
        const { firstCourses, secondCourses } = this.state
        const { firstCourse, secondCourse } = this.props

        return (
            <section id="todaymenu" className="section section-popular scrollspy">
                <div className="sectiontitle">
                    <h4 className="center">On the Menu
            <span className="pink-text"> Today</span>
                        <hr />
                    </h4>

                {!(logic.isLogged()) ?
                    <div className="center-btn">
                        <a href="#login" className="z-depth-2 waves-effect waves-light pink btn-large">Login to Order</a>
                       
                    </div>
                    :
                    <div className="center-btn">
                        <a href="#login" className="z-depth-2 waves-effect waves-light pink btn-large">GO!</a>

                        <p className="text-1" >(You Can Fork Your Wish Dishes Now)</p>
                     
                    </div>
                }

                    <div className="container">
                        <CourseCard
                            title='FIRSTS'
                            items={firstCourses}
                            onClick={this.props.addCourse}
                            params='firstCourse'
                            selected={firstCourse}
                        />

                        <CourseCard
                            title='SECONDS'
                            items={secondCourses}
                            onClick={this.props.addCourse}
                            params='secondCourse'
                            selected={secondCourse}
                        />
                    </div>

                </div>

            </section>
        );
    }
}

export default Todaymenu