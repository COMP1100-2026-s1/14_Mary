
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function DegreeTemplate() {

    const { id } = useParams();

    return (
        <>
            <h1>Degree Template Here</h1>
            <h2>Selected Degree ID: {id}</h2>
        </>
    )
}

export default DegreeTemplate;