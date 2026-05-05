import React, { useState } from 'react';

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

    const courses = [
        {
            id: 1,
            name: "Introduction to Software Innovation",
            code: "COMP 1100",
            description: courseDesc1,
            prerequisites: ["CSSE 1001", "DECO 1400"],
            incompatibles: ["COMP 7110"],
            // aimsAndOutcomes? : ?,
            // assessments? : ?
        },
        {
            id: 2, 
            name: "The Software Process",
            code: "CSSE 3021",
            description: courseDesc2,
            prerequisites: ["COMP 2140", "DECO 2500"],
            incompatibles: ["COMP 3500", "COMP 7503", "CSSE 3002", "CSSE 7001"]
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
                    
                <div key={course.id} className="card my-3">
                    <div className="card-body">
                            <div>
                                <div className="row mb-3">
                                    <h3>{course.name}</h3>
                                    <div className="overflow-auto">
                                        <p>{course.description}</p>
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-6">
                                        <h6>Prerequisites:</h6>
                                        <ul className="list-group">
                                            {course.prerequisites.map((prereq, index) => (
                                                <div key={index}>
                                                    {/* Do we want to make this a link? Or just a display? */}
                                                    {/* Should we show any additional information about this course, or just its name? */}
                                                    <li className="list-group-item">{prereq}</li>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h6>Incompatibles:</h6>
                                        <ul className="list-group">
                                            {course.incompatibles.map((incompat, index) => (
                                                <div key={index}>
                                                    {/* Do we want to make this a link? Or just a display? */}
                                                    {/* Should we show any additional information about this course, or just its name? */}
                                                    <li className="list-group-item">{incompat}</li>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
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