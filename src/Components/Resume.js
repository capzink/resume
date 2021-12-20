import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />

    return (
      <ResumeStyled>
        <Title title={"Resume"} span={"resume"} />
        <InnerLayout>
          <div className="small-title">
            <SmallTitle icon={briefcase} title={"Work Experience"} />
          </div>
          <div className="resume-content">
            <ResumeItem
              year={"2021 - Present"}
              title={"Full Stack Developer"}
              subTitle={"Make It Real, Colombia"}
              text={
                "Develop Full-stack web applications that process, analyze, and render data visually using MERN stack following SCRUM Agile methodology. Manage time-sensitive updates, including content changes and database upgrades or any additional requirement that comes from the SCRUM ceremonies.Develop app integration with REST APIs , Google Maps, social media logins, payment processors, and other services."
              }
            />
            <ResumeItem
              year={"2020 - 2021"}
              title={"Project Manager"}
              subTitle={"Weatherford, Iraq"}
              text={
                "Executed guidelines of the organizations PMO model to support, plan, monitor and control the largest startup contract in the country. Provided communications with timely project updates to PMO executives, client and project team to ensure goals and objectives were in alignment with expectations. Worked together with the Region Team and Goverment entities to ensure all assets and personnel were on ground at time."
              }
            />
            <ResumeItem
              year={"2018 - 2020"}
              title={"Operations Manager"}
              subTitle={"Weatherford, India"}
              text={
                "Accountable for the financial performance of the business across multiple sites in country, both onshore and offshore. Responsabilities included direct sales to customers and the operational delivery of service. Actively worked with my colleagues on budgets, forecasting, developing business plans, market research, customer relations, managing personnel and ensuring revenue targets were met while maximizing profitability."
              }
            />
            <ResumeItem
              year={"2014 - 2018"}
              title={"Service Delivery Manager "}
              subTitle={"Weatherford, United Arab Emirates"}
              text={
                "Led a strategic service delivery continuous improvement program across 2 product lines and 9 countries. Counseled and directed product line leaders in operations through projects to align their processes with the Quality Management System to transform their workforce into connected digital workers enabling knowledge transfer and competency.Leveraged Operational Risk Management and utilized process mapping to identify the tasks people perform."
              }
            />
            <ResumeItem
              year={"2007 - 2014"}
              title={"Engineer"}
              subTitle={"Weatherford, Colombia, Brazil, Mexico"}
              text={
                "While being a Field Engineer, I learned and performed well service interventions in different Latin America locations leading a crew of 3-4 members. Attended daily team meetings and client weekly meetings to address and solve client's concerns. Worked with cross functional teams and deliver products on time, as rig time is of the essence. Worked in remote locations across multiple countries, always with a positive attitude go get attitude."
              }
            />
          </div>
          
        </InnerLayout>
      </ResumeStyled>
    );
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
