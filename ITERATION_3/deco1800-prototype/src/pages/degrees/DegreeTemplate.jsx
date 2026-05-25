
import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from "react-router-dom";

import academicData from '../../data/academic_data.json'

function message() {
    alert("Hi there!")
}

function DegreeTemplate() {

    const degreeBank = academicData.degrees || [];
    const majorBank = academicData.majors || [];
    const courseBank = academicData.courses || [];

    const location = useLocation();
    // const { degreeMajorData, degreeName } = location.state || {};

    const [searchParams] = useSearchParams();
    const targetDegreeId = searchParams.get("degreeId");
    const degreeData = degreeBank.find(degree => degree.degreeId == targetDegreeId);
    const targetMajorId = searchParams.get("majorId");
    const majorData = majorBank.find(major => major.majorId == targetMajorId);

    const degreeName = degreeData.degreeName;

    return (
        <div className="container-fluid">
            <br/>
            {/* Title */}
            <div className="container">
                <h2 className="text-center">{degreeName} Study Plan</h2>
                <h3 className="text-center">Major: {majorData.majorName}</h3>
            </div>
            <hr/>

            {/* Course List */}
            <div className="container">
                <h5 className="my-2 fw-bold">Recommended Courses</h5>
                <table className="table">
                    <tbody>
                        {Object.entries(majorData.recommendedCourses).map(([key, value]) => (
                            <tr>
                                <th>
                                    {key}: 
                                </th>
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <th key={index}>
                                        <Link to={`/courses-select?courseCode=${value[index]}`}>{value[index] || "-"}</Link>
                                    </th>
                                ))}
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