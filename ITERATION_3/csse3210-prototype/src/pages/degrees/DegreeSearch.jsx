
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DegreeSearch() {

    const degreePlans = [
        {
            degreeId: 1,
            degreeName: "Bachelor in Information & Technology",
            degreeMajors: [
                {
                    majorName: "Software Information Systems",
                    majorDesc: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
                },
                {
                    majorName: "Solution Architecture",
                    majorDesc: "Sit amet consectetur adipiscing elit quisque faucibus ex."
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
    const degreeRedirect = (degId) => {
        navigate(`/degrees/id/${degId}`);
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

            {/* Degree Major Options */}
            <div className="container">

                {selectedDegree && (
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
                                        <p>{major.majorDesc}</p>
                                        <a className="text-primary" onClick={() => degreeRedirect(selectedDegree.degreeId)}>
                                            View Course Plans
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                )}

            </div>

        </div>
    )
}

export default DegreeSearch;