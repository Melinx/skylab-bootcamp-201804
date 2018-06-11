import React, { Component } from 'react'
import api from 'api'
import CourseCard from './CourseCard'
import './index.css'


class Todaymenu extends Component {

    constructor() {
        super()
        this.state = {
            firstCourses: [],
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
                {/* TODO: function printSelectedCourses() 
                <section className="list-menu-pop">
                {firstCourses.length>0 ? return  }
            </section> */}
                    

                <div className="center-btn">

                    <a className="z-depth-2 waves-effect waves-light pink btn-large">Order now</a>
                    <br/>
                    <br/>
                    </div>

            </section>
        );
    }
}

export default Todaymenu