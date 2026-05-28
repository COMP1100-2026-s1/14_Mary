
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import academicData from '../../data/academic_data.json'
import "./DegreeStyles.css"

function DegreeSearch() {

    const degreeBank = academicData.degrees || [];
    const majorBank = academicData.majors || [];
    const courseBank = academicData.courses || [];


    // Degree Search
    const [degreeOptions, setDegreeOptions] = useState(degreeBank);
    const handleSearch = (e) => {

        const value = e.target.value.toLowerCase();
    
        // Filter the original array based on the input string
        const filteredOptions = degreeBank.filter((item) => 
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
                                        <button onClick={() => {setSelectedDegree(degree)}} type="button" className="nav-link active fs-5" style={{backgroundColor: "#73B665"}}>{degree.degreeName}</button>
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
                                <h4 className="card-title fw-bold mb-3">Program Highlights</h4>
                                {/* <div className="card">
                                    <div className="card-body">

                                    </div>
                                </div> */}
                                <ul>
                                    {selectedDegree.degreeHighlights.map((highlight, index) => (
                                        <li key={index} className="">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                                

                                {/* Degree Major Options */}
                                <div className="container">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold mb-3">Majors:</h5>
                                            <div className="accordion" id="degreeDetailsAccordion">
                                                {selectedDegree.degreeMajorIds.map((majorId, index) => (
                                                    <div className="" key={index}>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button className="accordion-button custom-accordion-btn" type="button" style={{backgroundColor: "#73B665"}} data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls="collapseOne">
                                                                    {majorBank.find(major => major.majorId == majorId).majorName}
                                                                </button>
                                                            </h2>
                                                        </div>
                                                        <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#degreeDetailsAccordion">
                                                            <div className="accordion-body">
                                                                <p style={{ whiteSpace: 'pre-line' }}>{majorBank.find(major => major.majorId == majorId).majorDesc}</p>
                                                                {/* <a className="text-primary" onClick={() => degreePlanRedirect(major, selectedDegree.degreeName)}>
                                                                    See the {major.majorName} major 
                                                                </a> */}
                                                                <Link className="text-primary" to={`/degree-plans?degreeId=${selectedDegree.degreeId}&majorId=${majorBank.find(major => major.majorId == majorId).majorId}`}>
                                                                    See the {majorBank.find(major => major.majorId == majorId).majorName} major 
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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