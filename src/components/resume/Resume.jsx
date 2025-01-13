import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

import WorkExperience from "./WorkExperience";
import Education from "./Education"; // Import the Education data

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Resume</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {/* Tab for Education */}
                        <Tab className="tab">
                            <Button>Education</Button>
                        </Tab>

                        {/* Tabs for Work Experience */}
                        {WorkExperience.map((experience, index) => {
                            const { id, company } = experience;
                            return (
                                <Tab className="tab" key={`company-${id}`}>
                                    <Button>{company}</Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {/* Panel for Education */}
                    <TabPanel className="tab__panel">
                        <h2 className="tab__panel-title">Education</h2>
                        <ul className="tab__panel-list">
                            {Education.map((education, index) => {
                                const { id, degree, institution, yearsActive, location, achievements } = education;

                                return (
                                    <li key={`education-${id}`} className="education-item" style={{ marginBottom: "2em" }}>
                                        <h3 style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5em" }}>
                                            <span>{degree}</span>
                                            <span style={{ fontSize: "0.8em", color: "#888", marginLeft: "1em" }}>{yearsActive}</span>
                                        </h3>
                                        <p style={{ marginBottom: "1em" }}>
                                            {institution} | {location}
                                        </p>
                                        <ul>
                                            {achievements.map((achievement, idx) => (
                                                <li key={`achievement-${idx}`} style={{ marginLeft: "1em" }}>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                        {/* Add a line break between Master's and Bachelor's sections */}
                                        {index < Education.length - 1 && <hr style={{ margin: "2em 0", border: "none", borderTop: "1px solid #ccc" }} />}
                                    </li>
                                );
                            })}
                        </ul>
                    </TabPanel>

                    {/* Panels for Work Experience */}
                    {WorkExperience.map((experience) => {
                        const { id, company, yearsActive, title, information } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                                <h2 className="tab__panel-title">
                                    {title} @ {company}
                                </h2>
                                <p className="tab__panel-subtitle">{yearsActive}</p>
                                <ul className="tab__panel-list">
                                    {information.map((info, index) => {
                                        return <li key={`info-${index}`}>{info}</li>;
                                    })}
                                </ul>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Resume;
