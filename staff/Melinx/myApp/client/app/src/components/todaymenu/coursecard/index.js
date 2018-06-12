import React from 'react'

export default ({ title, items, onClick, params, selected }) => {
    
    if (items.length < 0) return null
    
    return (
        <div className="row s12 m4">
            <h4 className="center">{title}</h4>
            <div className="row">
            {
                items.map(course => (
                    <div className="col s12 m3 course_card" key={course._id}
                        onClick={() => onClick(params, course._id)}>
                        <h6>{course.dishName}</h6>
                        <img
                            src={course.image}
                            className={`${course._id === selected ?  "z-depth-5"  : ""} materialboxed 
                            responsive-img`}
                            alt=""
                        />

                        <div className={`img_check ${course._id === selected ? 'checked' : ''}`}>
                            <div className="img_center" >
                                <img className="img_check-img" src='/images/icon_fork.png' />
                            </div>
                        </div>
                    </div>
                )
            )
        }
            </div>
        </div>
    )
}
