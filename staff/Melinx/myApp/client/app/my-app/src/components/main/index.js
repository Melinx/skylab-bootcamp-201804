
import React, { Component } from 'react'
import Todaymenu from '../todaymenu'
import Follow from '../follow'


// import Slider from '../slider'

class Main extends Component {

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
                <Todaymenu
                    addCourse={this.addCourse}
                    firstCourse={firstCourse}
                    secondCourse={secondCourse}
                />

                <Follow />
            </div>
        );
    }
}

export default Main