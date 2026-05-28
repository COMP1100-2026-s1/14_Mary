import React from 'react';
import { useLocation , Link, useNavigate } from "react-router-dom";


function DegreeTemplate() {
    const location = useLocation();
    const { degreeMajorData, degreeName } = location.state || {};
    
 /*   const handleCourseClick = (courseCode) => {
    navigate('/courses', { state: { selectedId: courseCode } });
  };
*/
    // const for handling cases where data might error or missing
    const majorName = degreeMajorData?.majorName || "Unknown Major";
    const recommendedCourses = degreeMajorData?.recommendedCourses || {};

    return (
        <div className="container py-5" style={{ fontFamily: 'Segoe UI', color: '#333' }}>
            
            {/* purple header of the table */}
            <div className="card shadow-sm border-0 mb-5 text-white" 
                 style={{ background: 'linear-gradient(135deg, #1B5310 0%, #10320a 100%)', borderRadius: '15px' }}>
                <div className="card-body p-5 text-center">
                    <span className="badge bg-light text-dark mb-2 px-3 py-2 rounded-pill fw-bold" style={{ fontSize: '0.9rem' }}>
                        UQ Study Planner
                    </span>
                    <h1 className="display-5 fw-bold mb-3">{degreeName || "Degree"} Study Plan</h1>
                    <p className="lead mb-0 opacity-75">
                        <i className="bi bi-mortarboard-fill me-2"></i>Major: <strong className="text-warning">{majorName}</strong>
                    </p>
                </div>
            </div>

            {/* Core: Recommended Course Table */}
            <div className="card shadow-sm border-0 p-4" style={{ 
                borderRadius: '15px', 
                backgroundColor: '#fdfdfd' 
                }}>
                <div className="d-flex align-items-center mb-4">
                    <div style={{
                         width: '4px', 
                         height: '24px', 
                         backgroundColor: '#297C18', 
                         marginRight: '10px', 
                         borderRadius: '2px' 
                         }}>
                        </div>
                    <h3 className="m-0 fw-bold" style={{ color: '#297C18' }}>Recommended Course Sequence</h3>
                </div>

                <div className="table-responsive">
                    <table className="table table-borderless align-middle" style={{ minWidth: '800px' }}>
                        <thead>
<tr className="text-secondary text-uppercase fw-bold" style={{ fontSize: '1rem', borderBottom: '2px solid #e9ecef' }}>
                                <th className="ps-3" style={{ width: '12%' }}>Semester</th>
                                <th className="ps-3" style={{ width: '22%' }}>Course 1</th>
                                <th className="ps-3" style={{ width: '22%' }}>Course 2</th>
                                <th className="ps-3" style={{ width: '22%' }}>Course 3</th>
                                <th className="ps-3" style={{ width: '22%' }}>Course 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(recommendedCourses).map(([semesterKey, coursesList]) => (
                                <tr key={semesterKey} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                    {/* Left semester label */}
                                    <td>
                                        <span className="fw-bold text-dark px-3 py-2 bg-light rounded d-inline-block text-center shadow-sm" style={{ minWidth: '90px', fontSize: '0.95rem' }}>
                                            {semesterKey}
                                        </span>
                                    </td>
                                    
                                    {/* 4 course slots */}
                                    {Array.from({ length: 4 }).map((_, index) => {
                                        const courseCode = coursesList[index];
                                        return (
                                            <td key={index} className="p-3">
                                                {courseCode && courseCode !== "-" ? (
                                                    // purple card for actual courses
                                                    <div className="card border-0 shadow-sm text-center p-3 h-100 position-relative" 
                                                         style={{
                                                             backgroundColor: '#73B665', 
                                                             border: 'none !important', 
                                                             borderLeft: '6px solid #297C18 !important', 
                                                             boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)', 
                                                             borderRadius: '8px',
                                                             minHeight: '80px', 
                                                             padding: '1rem',
                                                             textAlign: 'center',
                                                             display: 'flex',
                                                             flexDirection: 'column',
                                                             justifyContent: 'center'
                                                         }}>
                                                        <span className="fw-bold text-dark d-block mb-1" style={{ fontSize: '1.05rem', letterSpacing: '0.5px' }}>
                                                            {courseCode}
                                                        </span>
                                                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>UQ Course</small>
                                                    </div>
                                                ) : (
                                                    // The dashed placeholder box when blank
                                                    <div className="d-flex align-items-center justify-content-center border border-2 border-dashed text-muted rounded p-3" 
                                                        style={{ 
                                                            border: '2px dashed #dee2e6 !important', 
                                                            backgroundColor: '#fafafa',
                                                            borderRadius: '8px',
                                                            minHeight: '80px', 
                                                            padding: '1rem',
                                                            textAlign: 'center',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                        <span style={{ 
                                                                fontSize: '1.05rem', color: '#adb5bd', fontWeight: '500' 
                                                            }}>
                                                            Elective
                                                        </span>
                                                    </div>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Semester Table */}
            <div className="mt-5">
                {/* more reminders or interactive buttons */}
            </div>

        </div>
    );
}

export default DegreeTemplate;