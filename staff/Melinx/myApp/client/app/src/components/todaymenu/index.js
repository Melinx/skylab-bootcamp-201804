import React, { Component } from 'react'
import api from 'api'
import CourseCard from './coursecard'
import Header from '../header'
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


    render() {

        const { firstCourses, secondCourses } = this.state
        const { firstCourse, secondCourse } = this.props

        return (
            <section>
                <section id="todaymenu" className="section section-popular scrollspy">
                    <div className="sectiontitle">
                        <h4 className="center">On the Menu<span className="pink-text"> Today</span>
                            <hr />
                        </h4>

                        {!(logic.isLogged()) ?

                            (<section>
                                <div className="container">
                                    <CourseCard
                                        title='FIRSTS'
                                        items={firstCourses}
                                        params='firstCourse'

                                    />
                                    <CourseCard
                                        title='SECONDS'
                                        items={secondCourses}
                                        params='secondCourse'

                                    />
                                </div>
                            </section>)
                            :
                            (<section>
                                <div className="center-btn">
                                    <a href="#order" className="z-depth-2 waves-effect waves-light pink btn-large">Place order!</a>
                                    <p className="text-1" >(You Can Fork Your Wish Dishes Now)</p>
                                </div>
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
                            </section>)
                        }

                    </div>
                </section>

            </section>
        );
    }
}

export default Todaymenu