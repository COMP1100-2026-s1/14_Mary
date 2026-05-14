
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";

function message() {
    alert("Hi there!")
}

function DegreeTemplate() {

    const location = useLocation();
    const { degreeMajorData, degreeName } = location.state || {};

    return (
        <div className="container-fluid">
            <br/>
            {/* Title */}
            <div className="container">
                <h1 className="text-center">{degreeName} Study Plan</h1>
                <h4>Major: {degreeMajorData.majorName}</h4>
            </div>

            {/* Course List */}
            <div className="container">
                Recommended Courses:
                {Object.entries(degreeMajorData.recommendedCourses).map(([key, value]) => (
                        <div className="row">
                            <div className="col">
                                {key}: 
                            </div>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div className="col" key={index}>
                                    {value[index] || "-"}
                                </div>
                            ))}
                            {/* {value.map((course, index) => (
                                <div className="col">
                                    {course}
                                </div>
                            ))} */}
                        </div>
                    ))}
            </div>

            {/* Semester Table */}
            <div className="container">
                
            </div>

        </div>
    )
}

export default DegreeTemplate;