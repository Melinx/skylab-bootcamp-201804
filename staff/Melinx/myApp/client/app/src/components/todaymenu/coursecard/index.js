import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import logic from '../../../logic'

//props destructuring: props.title, props.items etc etc = { title, items etc etc}

const CourseCard = ({ title, items, addCourse, category, selected }) => {

    if (items.length < 0) return null

    if (logic.isLogged()) {
        return (

            <div className="row s12 m4">
                <h4 className="center">{title}</h4>
                <div className="row">
                    {
                        items.map(course => (

                            <div className="col s12 m3 course_card_log" key={course._id}
                                onClick={() => addCourse(category, course._id)}
                            >
                                <h6>{course.dishName}</h6>
                                {(course.amount) ? 
                                <img
                                    src={course.image}
                                    className={`${course._id === selected ? "z-depth-5" : ""} materialboxed 
                                responsive-img`} alt="" />
                                :
                                <img
                                    src={course.image}
                                    className= "materialboxed responsive-img" alt="" />
                                }
                                <div className={`img_check ${course._id === selected ? 'checked' : ''}`}>
                                    <div className="img_center" >
                                        <img className="img_check-img" src='/images/icon_fork.png' alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        )
    } else {
        return (
            <section>
                <Link to="/login" className="waves-effect pink  waves-light btn" >Login To ORDER</Link>
                <div className="row s12 m4">
                    <h4 className="center">{title}</h4>
                    <div className="row">
                        {
                            items.map(course => (

                                <div className="col s12 m3 course_card_nolog" key={course._id}>

                                    <h6>{course.dishName}</h6>
                                    <img
                                        src={course.image}
                                        className="responsive-img" alt="" />

                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default CourseCard