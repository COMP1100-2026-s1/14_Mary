
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
                <h2 className="text-center">{degreeName} Study Plan</h2>
                <h3 className="text-center">Major: {degreeMajorData.majorName}</h3>
            </div>

            {/* Course List */}
            <div className="container">
                <h5 className="my-2 fw-bold">Recommended Courses</h5>
                <table className="table">
                    <tbody>
                        {Object.entries(degreeMajorData.recommendedCourses).map(([key, value]) => (
                            <tr>
                                <th>
                                    {key}: 
                                </th>
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <th key={index}>
                                        {value[index] || "-"}
                                    </th>
                                ))}
                                {/* {value.map((course, index) => (
                                    <div className="col">
                                        {course}
                                    </div>
                                ))} */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>

            {/* Semester Table */}
            <div className="container">
                
            </div>

        </div>
    )
}

export default DegreeTemplate;