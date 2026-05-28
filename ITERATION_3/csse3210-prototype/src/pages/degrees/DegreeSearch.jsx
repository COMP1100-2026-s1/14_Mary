
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DegreeSearch() {

    const degreePlans = [
        {
            degreeId: 1,
            degreeName: "Bachelor in Information & Technology",
            degreeHighlights: [
                "Undertake a flexible project-focused degree that will provide you with the abilities and knowledge to shape the future of information communication technology.",
                "Use courseware developed in close collaboration with UQ industry partners for a solid foundation in concepts relevant to technology-based industries.",
                "Develop the talent to confidently lead people and projects no matter where your career takes you."
            ],
            degreeMajors: [
                {
                    majorName: "Software Information Systems",
                    majorDesc: `This major is for students who want to pursue a career in developing and managing databases.\n
                                Learn about cutting-edge approaches to large-scale database design, including systems that span multiple organisations.\n
                                Graduates of the Software Information Systems major typically work in software development companies, or in companies with information systems, which includes almost every medium to large-scale business or organisation in the world.`,
                    recommendedCourses: {
                        "Sem 1": ["CSSE 2002", "CSSE 2310", "DECO 2500"],
                        "Sem 2": ["DECO 1800", "COMP 2140", "COMP 3506", "DECO 3500"],
                        "Sem 3": ["DECO 3800", "CSSE 3012", "COMP 1100", "INFS 3202"],
                        "Sem 4": ["DECO 3801", "DECO 2850", "INFS 3208", "INFS 2200"],
                    }
                },
                {
                    majorName: "Solution Architecture",
                    majorDesc: `UQ's Bachelor of Information Technology major in Solution Architecture will give you the expertise to design and integrate complex IT solutions. Through practical projects and advanced coursework, you'll learn to combine technical innovation with strategic thinking. Core courses cover software innovation, programming, web systems, cloud computing and emerging technologies like generative AI. You’ll also have the flexibility to choose electives in areas such as algorithms, computer systems, information security and human-centred AI.\n
                                This major blends theory with practical experience, preparing you to tackle real-world challenges in system design and implementation. You'll graduate with the skills to lead technology projects, architect solutions and drive innovation across industries.\n
                                Join a new generation of IT professionals who can design intelligent, future-ready systems for an increasingly connected world.`,
                    recommendedCourses: {
                        sem1: ["CSSE 2002", "CSSE 2310", "DECO 2500"],
                        sem2: ["DECO1800", "COMP2140", "COMP3506", "DECO3500"],
                        sem3: ["DECO 3800", "CSSE 3012", "COMP 1100", "INFS 3202"],
                        sem4: ["DECO 3801", "DECO 2850", "INFS 3208", "INFS 2200"],
                    }
                }
            ]
        },
        {
            degreeId: 2,
            degreeName: "Bachelor of Communication",
            degreeMajors: [
                {
                    majorName: "Digital Media",
                    majorDesc: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
                },
                {
                    majorName: "Strategic Communication",
                    majorDesc: "Sit amet consectetur adipiscing elit quisque faucibus ex."
                }
            ]
        },
        {
            degreeId: 3,
            degreeName: "Bachelor of Arts",
            degreeMajors: [
                {
                    majorName: "Drama",
                    majorDesc: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
                },
                {
                    majorName:"Music",
                    majorDesc: "Sit amet consectetur adipiscing elit quisque faucibus ex."
                }
            ]
        },
        {
            degreeId: 4,
            degreeName: "Bachelor in Business Management Arts",
            degreeMajors: [
                {
                    majorName: "Business Economics Systems",
                    majorDesc: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
                },
                {
                    majorName: "Criminology",
                    majorDesc: "Sit amet consectetur adipiscing elit quisque faucibus ex."
                }
            ]
        },
        {
            degreeId: 5,
            degreeName: "Bachelor of Engineering",
            degreeMajors: [
                {
                    majorName: "Chemical Engineering",
                    majorDesc: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
                },
                {
                    majorName: "Mechatronic Engineering",
                    majorDesc: "Sit amet consectetur adipiscing elit quisque faucibus ex."
                }
            ]
        },
    ]

    // Degree Search
    const [degreeOptions, setDegreeOptions] = useState(degreePlans);
    const handleSearch = (e) => {

        const value = event.target.value.toLowerCase();
    
        // Filter the original array based on the input string
        const filteredOptions = degreePlans.filter((item) => 
            item.degreeName.toLowerCase().includes(value)
        );
        // Update state, which triggers React to refresh the UI
        setDegreeOptions(filteredOptions);
    }

    // Degree Object Display
    const [selectedDegree, setSelectedDegree] = useState(null);

    // Degree Template Page Navigation
    const navigate = useNavigate();
    const degreePlanRedirect = (degreeMajor, degreeName) => {
        navigate(`/degree-plans`, { state: { degreeMajorData: degreeMajor, degreeName: degreeName } });
    }

    return (
        <div className="container-fluid">

            {/* Title */}
            <div className="container">
                <h1>Degree Plan Suggestions</h1>
            </div>
            <br/>

            {/* Degree Search */}
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="degree-name-search" className="form-label">Degree Search</label>
                            <input type="text" onChange={handleSearch} className="form-control" id="degree-name-search" placeholder="Input Degree Name Here"></input>
                        </div>
                        <div className="col-12">

                            {/* Degree Pill Selection */}
                            <ul id="degree-pills-list" className="nav nav-pills border mt-2 p-2">
                                {degreeOptions.map((degree, index) => (
                                    <li key={index} className="nav-item mx-2 my-1">
                                        <a onClick={() => {setSelectedDegree(degree)}} className="nav-link active fs-5" href="#">{degree.degreeName}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                </form>
            </div>

            <br/>

            {selectedDegree && (
                <>
                    {/* Degree Description */}
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Program Highlights</h4>
                                <ul>
                                    {selectedDegree.degreeHighlights.map((highlight, index) => (
                                        <li key={index} className="">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                {/* Degree Major Options */}
                                <div className="container">
                                    <h5 className="card-title text-decoration-underline">Majors:</h5>
                                    <div className="accordion" id="degreeDetailsAccordion">
                                        {selectedDegree.degreeMajors.map((major, index) => (
                                            <div key={index}>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls="collapseOne">
                                                            {major.majorName}
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#degreeDetailsAccordion">
                                                    <div className="accordion-body">
                                                        <p style={{ whiteSpace: 'pre-line' }}>{major.majorDesc}</p>
                                                        <a className="text-primary" onClick={() => degreePlanRedirect(major, selectedDegree.degreeName)}>
                                                            See the {major.majorName} major 
                                                        </a>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <br/>

                    
                </>
            )}
        </div>
    )
}

export default DegreeSearch;