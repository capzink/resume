import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';
import Education from "../Components/Education";


function ResumePage() {
    return (
        <MainLayout>
            <Skills />
            <Resume />
            <Education/>
        </MainLayout>
    )
}

export default ResumePage
