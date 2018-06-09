
import React, { Component } from 'react'
import Todaymenu from '../todaymenu'
import Follow from '../follow/Follow'

// import Slider from '../slider'

class Main extends Component {
    render() {
        return (
            <div>
            <Todaymenu />
            <Follow />
            </div>
        );
    }
}

export default Main