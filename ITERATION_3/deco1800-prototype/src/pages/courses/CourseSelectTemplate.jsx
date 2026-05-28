import React, { useState } from 'react';
import './CourseTemplate.css';
import tree_img from './assets/tree.png'
import pfp_img from './assets/silhouette-male-icon.svg'

import { useSearchParams, Link } from 'react-router-dom';

import academicData from '../../data/academic_data.json'

function CourseTemplate() {

    
    // Main source of truth now
    const courseBank = academicData.courses || [];

    // Read the URL Query String (if there are any) for pre-population
    const [searchParams, setSearchParams] = useSearchParams();
    const targetCourseCode = searchParams.get('courseCode') || "";

    // Keep local state ONLY for the active typed search keyword
    const [searchInput, setSearchInput] = useState("");

    // 4. COMPUTED LOGIC (Runs automatically on every render)
    // If a query string is present (?courseCode=COMP1100), show ONLY that course.
    // Otherwise, filter the entire bank based on whatever is typed in the search box.
    const coursesToShow = targetCourseCode
        ? courseBank.filter(c => c.courseCode.toUpperCase() === targetCourseCode.toUpperCase())
        : courseBank.filter(c => 
            c.courseName.toLowerCase().includes(searchInput.toLowerCase()) ||
            c.courseCode.toLowerCase().includes(searchInput.toLowerCase())
        );

    // Define the logic used for searching
    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
        // CRITICAL: If they start typing, clear the URL query string 
        // so the page unlocks and lets them view search results freely.
        if (targetCourseCode) {
            setSearchParams({}); 
        }
    };
    const handleDropdownSelect = (e) => {
        const selectedCode = e.target.value;
        if (selectedCode === "") {
            // User selected the "All Courses" reset option
            setSearchParams({});
            setSearchInput("");
        } else {
            // Set the URL query string to match the selected dropdown code
            setSearchParams({ courseCode: selectedCode });
            setSearchInput("");
        }
    };
    const handleClearAll = () => {
        // A handy helper button to instantly wipe everything back to default
        setSearchParams({});
        setSearchInput("");
    };

    return (
        <div className="container p-2">

            {/* Course Search by Code? Name? */}
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label htmlFor="course-code-search" className="form-label">Course Code</label>
                            <input type="text" onChange={handleSearchChange} className="form-control" id="course-code-search" placeholder="Input Course Code Here"></input>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* Main Dropdown Section */}
                            <label htmlFor="course-dropdown-select" className="form-label">Course Select</label>
                            <select onChange={handleDropdownSelect} value={targetCourseCode || ""} id="course-dropdown-select" className="form-select" aria-label="Default select example">
                                <option value="">-- All Courses --</option>
                                {courseBank.map((course) => (
                                    <option key={course.courseId} value={course.courseCode}>{course.courseCode}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                </form>
            </div>

            <hr/>

            {/* Course Detail Display */}
            {coursesToShow.map((course) => (
                    

                <div className="info-container" key={course.courseId}>
                    <div className="course-heading">
                        <div className="course-name">{course.courseName}</div>
                        <div className="course-code">{course.courseCode}</div>
                    </div>

                    <div className="course-tree">
                        <div className="tree-title"><span>{course.courseCode}</span></div>
                        <img src={tree_img} className="tree-image"></img>
                        <div className="under-tree">
                            <div className="tree-group">
                                {course.coursePrereqs.map((coursePrereqs, index) => (
                                    <div key={index}>
                                        {coursePrereqs}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="future-courses">
                            <div className="fc-heading">Future Courses:</div>
                            <div className="fc-course-list">
                                {course.courseOutcomes.map((code, index) => (
                                    <div key={index}>{code}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="course-introduction">
                        <div className="introduction-heading">Introduction to {course.courseCode}</div>
                        <div className="course-description">
                            {course.courseDescription}
                        </div>
                    </div>

                    <div className="reviews-section">
                        <div className="reviews-title">User Ratings and Reviews:</div>
                        <div className="average-score">Average Rating: 8.7 out of 10</div>
                        <div className="reviews-list">
                            {
                                course.courseReviews.map((review, index) => (

                                    <div className="review">
                                        <div className="review-picture">
                                            <img src={pfp_img}></img>
                                        </div>
                                        <div className="review-text">
                                            <div className="review-header">
                                                <div className="review-username">{review.username}</div>
                                                <div className="review-rating">{"☆".repeat(review.rating)}</div>
                                            </div>
                                            <div className="review-content">{review.content}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <hr/>
                        
                </div>
                
            ))}

            <br/>

            {/* User Reviews Section */}
            <div className="container">
                
            </div>

        </div>
    )
}

export default CourseTemplate;