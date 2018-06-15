
import React from 'react'


function Order(props) {

  return (
    <section>
      <section class="section section-icons grey lighten-4 center">
        <div class="container">
          <div class="row">
            <div class="col s12 m8">
              <div class="card-panel" href="#today">
                {/* <i class="material-icons large pink-text">shopping-basket</i> */}
                <h5>You have selected:</h5>
                <h7>{props.firstCourse}</h7>
                 <br/>
                <h7>{props.secondCourse}</h7>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card-panel">
                {/* <i class="material-icons large pink-text">clock</i> */}
                <h5>What time?</h5>
                <p>(pick a time) </p>
              </div>
            </div>
            <div class="col s12 m4">
             
            </div>
          </div>
        </div>
      </section>
    </section>
    // <div>

    //     <h1>ORDER</h1>

    // </div>

  )
}

export default Order