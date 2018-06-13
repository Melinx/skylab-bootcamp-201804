
import React, { Component } from 'react'
import Todaymenu from '../todaymenu'
// import Coursecard from '../todaymenu/coursecard'
import Follow from '../follow'
import Footer from '../footer'
import Header from '../header'


class Landing extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstCourse: '',
            secondCourse: '',
        }
    }

    addCourse = (category, courseId) => {
        this.setState({
            [category]: courseId
        })
    }

    render() {
        const { firstCourse, secondCourse } = this.state

        return (
            <div>
                <Header />
                <Todaymenu
                    addCourse={this.addCourse}
                    firstCourse={firstCourse}
                    secondCourse={secondCourse}
                />
                <Follow />
                <Footer />
            </div>
        );
    }
}

export default Landing