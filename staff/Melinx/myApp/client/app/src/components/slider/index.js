import React from 'react'

function Slider() {

    return (
        <section className="slider">
            <ul className="slides">
                <li>
                    <img src="https://unsplash.com/photos/Ngy0B2YWalk" />
                    {/* random image */}
                    <div className="caption right-align">
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2>Hungry for a Good Meal?</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">We like to take good care of you and your stomach.</h5>
                    </div>
                </li>
                <li>
                    <img src="img/food2.jpg" />
                    {/* random image */}
                    <div className="caption right-align">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2>Home-Cooked Meals, Ready to Go</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">We serve you with a variety of healty balanced meals.</h5>
                    </div>
                </li>
                <li>
                    <img src="img/food5.jpg" />
                    {/* random image */}
                    <div className="caption right-align">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2>Enjoy Fresh Ingredients, Every Day</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">All meals are cooked the same day, always delivering fresh ingredients.</h5>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Slider