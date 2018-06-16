import React, { Component } from 'react'
import api from 'api'
import CourseCard from './coursecard'
import { Link } from 'react-router-dom'
import Header from '../header'
import Pixiflauta from 'react-s-alert'
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

    checkDishes = (e) => {
        e.preventDefault()

        const { firstCourse, secondCourse } = this.props
        if (!firstCourse || !secondCourse ) {
            Pixiflauta.info('Please select a first course and a second course')

            return 
        }
        console.log(this.props)
    

    }

    render() {

        const { firstCourses, secondCourses } = this.state
        const { firstCourse, secondCourse } = this.props

        return (
            <section>
                <Pixiflauta effect='bouncyflip' offset={150} />


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
                                    <Link to="/order" className="z-depth-2 waves-effect waves-light pink btn-large" onClick={this.checkDishes} >Place order!</Link>
                                </div>
                                <div className="container">
                                    <CourseCard
                                        title='FIRSTS'
                                        items={firstCourses}
                                        addCourse={this.props.addCourse}
                                        category='firstCourse'
                                        selected={firstCourse}
                                    />
                                    <CourseCard
                                        title='SECONDS'
                                        items={secondCourses}
                                        addCourse={this.props.addCourse}
                                        category='secondCourse'
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