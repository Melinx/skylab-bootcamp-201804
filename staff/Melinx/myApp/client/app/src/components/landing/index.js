
import React, { Component } from 'react'
import { Slider, Slide, MediaBox } from 'react-materialize'
import Follow from '../follow'
import Footer from '../footer'
import './landing.css'



class Landing extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <section>
                    {/* <MediaBox src="images/food1.jpg" caption="A demo media box1" width="350"/> */}
                    <Slider>
                        <Slide
                            src="images/food5.jpg"
                            title="Hungry for a Good Meal?"
                            placement="right">
                            We like to take good care of you and your stomach.
                </Slide>
                        <Slide
                            src="images/food1.jpg"
                            title="Home-Cooked Meals, Ready to Go"
                            placement="left">
                            We serve you with a variety of healty balanced meals.
                          </Slide>
                        <Slide
                            src="images/food2.jpg"
                            title="Enjoy Fresh Ingredients, Every Day"
                            placement="right">
                            All meals are cooked the same day, always delivering fresh ingredients.
                </Slide>
                    </Slider>
                </section>

                <section class="section section-icons grey lighten-4 center">
                    <div class="container">
                        <div class="row">
                            <div class="col s12 m6">
                                <div class="card-panel" href="#today">
                                    <i class="material-icons large pink-text">local_dining</i>
                                    <h5>Choose your menu</h5>
                                    <p>Pick a first course and a second course. Make sure they are available, if not, you can always drop by and see what we have in-store.</p>
                                </div>
                            </div>
                            <div class="col s12 m6">
                                <div class="card-panel">
                                    <i class="material-icons large pink-text">store</i>
                                    <h5>Come get it</h5>
                                    <p>We want to see your pretty face! So come pick up your meal from noon to 14:30. Kindly tell us the aprox time you'll show up —sorry no delivery, yet!</p>
                                </div>
                            </div>
                            <div class="col s12 m6">
                                <div class="card-panel">
                                    <i class="material-icons large pink-text">alarm</i>
                                    <h5>Time is of the essence</h5>
                                    <p>Watch out! You can order your meal on the same day, before 11am. If it's past 11am, you can do the old-school walk-in shopping. </p>
                                </div>
                            </div>
                            <div class="col s12 m6">
                                <div class="card-panel">
                                    <i class="material-icons large pink-text">people</i>
                                    <h5>Avoid waiting</h5>
                                    <p>Show us your order number & have your card or cash ready for payment. Your meal will be ready to go home with you, freshly made, just for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Follow />
                <Footer />
            </div>
        )
    }
}

export default Landing
