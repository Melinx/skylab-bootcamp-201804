
import React, { Component } from 'react'
import Todaymenu from '../todaymenu'
// import Coursecard from '../todaymenu/coursecard'
import Follow from '../follow'
import Footer from '../footer'
import Header from '../header'

// MY IDEA IS to render isLogged home page here ans not-logged content in Landing. Its a DRAFT idea

class Order extends Component {

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
                <Order
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

export default Order