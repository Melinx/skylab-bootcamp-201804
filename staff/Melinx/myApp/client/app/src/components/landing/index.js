
import React, { Component } from 'react'
import Todaymenu from '../todaymenu'
import Follow from '../follow'
import Footer from '../footer'
import Header from '../header'


class Landing extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        //const { firstCourse, secondCourse } = this.state
        console.log(this.props);
        return (
            <div>
                landing

                <Follow />
                <Footer />
            </div>
        )
    }
}

export default Landing
