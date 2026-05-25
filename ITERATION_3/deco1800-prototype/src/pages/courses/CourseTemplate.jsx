import React, { useState } from 'react';
import './CourseTemplate.css';
import tree_img from './assets/tree.png'
import pfp_img from './assets/silhouette-male-icon.svg'

import { useSearchParams, Link } from 'react-router-dom';

import academicData from '../../data/academic_data.json'

function CourseTemplate() {

    var courseDesc1 = `
        Introduction to innovation using computer science and information technology through a 
        discipline-specific team project. Students will learn what innovation is, processes that 
        innovators follow, how innovation teams work together, how to make decisions in technology 
        projects, how to use prototyping in the innovation process and the tools required to successfully 
        deliver and communicate an innovation project. 

        This is the third offering of the course. There are no specific changes to this course compared to 
        the course description or previous offerings of this course.
    `;
    var courseDesc2 = `
        Software lifecycle as an industrial process, definable, manageable and repeatable. Requirements 
        engineering, object-oriented analysis. Software requirements specification, prototyping, verification 
        and validation, configuration management, maintenance. Software quality, process standards, process 
        improvement. Software engineering tools.

        “The software process is the set of tools, methods and practices we use to produce a software product”
         - Watts Humphrey, Managing the Software Process, 1989.

        Many software products are developed in an ad-hoc fashion by developers using their own personal methods and 
        techniques. This situation would be acceptable if it reliably produced software products of high quality, at or 
        below the budgeted cost, and on or ahead of schedule.ﾠSadly, this is not the case and the software industry is 
        infamous for projects being over budget and delivered late, and for delivering software that is unreliable.

        While there have been improvements over the past fifty years, software development is still considered to be inadequate, 
        unreliable and lacking in the discipline associated with engineering and other comparable professional disciplines. As we 
        increase the size and complexity of the problems that we attempt to solve, so our development process (the way in which we 
        do the work) increases in importance.

        This course aims to make students aware of the need of a software engineering process to create an effective, disciplined 
        and professional software development team. Students will be able to select an appropriate process from the range of 
        different processes. Students will see how activities undertaken in other courses fit into a software engineering process 
        and how the tools used in those courses support the process. Students will learn how to identify and manage requirements 
        in a disciplined process.

        Course Changes in Response to Previous Student Feedback

        Three assessments now allow the use of AI tools. A demonstration will be provided on how to use AI efficiently and ethically.
    `

    const courseBank = academicData.courses || [];

    const [searchParams, setSearchParams] = useSearchParams();
    const targetCourseCode = searchParams.get('courseCode') || "";
    const courseData = courseBank.find(course => course.courseCode == targetCourseCode);


    const courses = [
        {
            id: 1,
            name: "Introduction to Software Innovation",
            code: "COMP1100",
            description: courseDesc1,
            prerequisites: ["CSSE1001", "DECO1400"],
            incompatibles: ["COMP7110"],
            outcomes: ["COMP4500"],
            reviews: [
                {
                    username: "John Alfred",
                    content: "This course was THOROUGHLY enjoy able!",
                    dateposted: "21/06/2025",
                    rating: 5
                },
                {
                    username: "Thomas Cousins",
                    content: "This course enjoy able!",
                    dateposted: "05/04/2025",
                    rating: 5
                }
            ]
            // aimsAndOutcomes? : ?,
            // assessments? : ?
        },
        {
            id: 2, 
            name: "The Software Process",
            code: "CSSE3021",
            description: courseDesc2,
            prerequisites: ["COMP2140", "DECO2500"],
            incompatibles: ["COMP3500", "COMP7503", "CSSE3002", "CSSE7001"],
            outcomes: ["COMP4500"],
            reviews: [
                {
                    username: "John Alfred",
                    content: "This course was THOROUGHLY enjoy able!",
                    dateposted: "21/06/2025",
                    rating: 5
                },
                {
                    username: "Thomas Cousins",
                    content: "This course enjoy able!",
                    dateposted: "05/04/2025",
                    rating: 5
                }
            ]
        },
    ]

    // Set the state to search for courses
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [searchInput, setSearchInput] = useState("");
    const [selectedId, setSelectedId] = useState("");

    const coursesToShow = selectedId 
        ? courses.filter(c => c.id === selectedId) 
        : courses.filter(c => c.code.toLowerCase().includes(searchInput.toLowerCase()));

    // Define the logic used for searching
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
        setSelectedId(null); // Clear selection when user starts typing again
    };
    const handleDropdown = (e) => {
        const id = parseInt(e.target.value);
        setSelectedId(id);
        setSearchInput(""); // Clear search when selecting from dropdown
    };


    return (
        <div className="container p-2">

            {/* Course Search by Code? Name? */}
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label htmlFor="course-code-search" className="form-label">Course Code</label>
                            <input type="text" onChange={handleSearch} className="form-control" id="course-code-search" placeholder="Input Course Code Here"></input>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* Main Dropdown Section */}
                            <label htmlFor="course-dropdown-select" className="form-label">Course Select</label>
                            <select onChange={handleDropdown} value={selectedId || ""} id="course-dropdown-select" className="form-select" aria-label="Default select example">
                                <option value="">-- All Courses --</option>
                                {courses.map((course) => (
                                    <option key={course.id} value={course.id}>{course.code}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                </form>
            </div>

            <hr/>

            {/* Course Detail Display */}
            {coursesToShow.map((course) => (
                    

                            <div className="info-container" key={course.id}>
                                <div className="course-heading">
                                    <div className="course-name">{course.name}</div>
                                    <div className="course-code">{course.code}</div>
                                </div>

                                <div className="course-tree">
                                    <div className="tree-title"><span>{course.code}</span></div>
                                    <img src={tree_img} className="tree-image"></img>
                                    <div className="under-tree">
                                        <div className="tree-group">
                                            {course.prerequisites.map((prereq, index) => (
                                                <div key={index}>
                                                    {prereq}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="future-courses">
                                        <div className="fc-heading">Future Courses:</div>
                                        <div className="fc-course-list">
                                            {course.outcomes.map((code, index) => (
                                                <div key={index}>{code}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="course-introduction">
                                    <div className="introduction-heading">Introduction to {course.code}</div>
                                    <div className="course-description">
                                        {course.description}
                                    </div>
                                </div>

                                <div className="reviews-section">
                                    <div className="reviews-title">User Ratings and Reviews:</div>
                                    <div className="average-score">Average Rating: 8.7 out of 10</div>
                                    <div className="reviews-list">
                                        {
                                            course.reviews.map((review, index) => (

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