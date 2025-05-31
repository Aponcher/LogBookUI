import React from 'react'
import {
    CContainer, CRow, CCol,
    CCard, CCardHeader, CCardBody, CAccordion, CAccordionHeader, CAccordionBody, CAccordionItem
} from '@coreui/react'
import '../styles.css'

export default function DeveloperResume() {
    return (
        <CContainer className="my-1" style={{ maxWidth: '900px' }}>
            <CRow className="mb-1">
                <CCol>
                    <h1 className="text-center">Adam Levi Poncher</h1>
                    <p className="text-center">
                        Email: aponcher@mac.com • Phone: (847) 912-5617 • Location: Deerfield, IL<br />
                        GitHub: github.com/Aponcher • LinkedIn: linkedin.com/in/adam-poncher-3a212a50/
                    </p>
                </CCol>
            </CRow>

            <Section key="work-experience" title="Work Experience">
            <CAccordion>
                <CAccordionItem itemKey="cisco-senior-software-engineer">
                    <CAccordionHeader>Cisco: Senior Software Engineer</CAccordionHeader>
                    <CAccordionBody>
                        <Item
                            title="Senior Software Engineer – Cisco Networking Solutions"
                            date="May 2021 – November 2024"
                            location="Austin, TX"
                            description={[
                                "Backend teams; implemented SaaS for projects using Spring Boot, Kubernetes which then transitioned to Terraform for infrastructure as code",
                                "Built APIs, DTOs, tooling, and documentation (Swagger, READMEs, etc) and transitioned legacy concepts to new systems",
                                "Automated infrastructure provisioning using Terraform, managed cloud infrastructure across environments (development, staging, production).",
                                "Monolith to Microservice migration coupled with Spring Boot and tooling improvements (e.g. custom alerts and Webex integration)",
                                "Implementing best practices on API analytics, throttling, caching, and using these data points to further improve the service(s)",
                                "Designed and improved object oriented models, Database designs, migrations, and maintenance as the product evolved (PostgreSQL, OpenSearch, Redis Cache)",
                                "Mentored junior engineers, providing guidance on best practices for API development, cloud infrastructure, and debugging techniques.",
                                "AI Training: Blue Belt Certification gaining foundational skills in LLMs and AI tools including HuggingFace"
                            ]}
                        />
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey="khoros-software-engineer">
                    <CAccordionHeader>Khoros: Software Engineer</CAccordionHeader>
                    <CAccordionBody>
                        <Item
                            title="Software Engineer – Khoros Software Company"
                            date="May 2017 – May 2021"
                            location="Austin, TX"
                            description={[
                                "Analytics team: real-time view of customer interactions on social networks for purpose of customer care and performance focusing on building usable metrics",
                                "Full Stack Developer: React/Redux/Sava Front End, Java Backend, AWS stack",
                                "Web App: RESTful API and services to query analytics data",
                                "Pipeline: Ingest/Process data streams from multiple upstream sources via a scalable pipeline",
                                "UI: Originally written in Angular Dart and later rewritten in React/ReduxSaga; both versions utilize Highcharts for data visualization",
                                "Cowrote patented system (No: 10931540 B2) for tracking workforce efficiency through asynchronous tracking of time spent performing various actions",
                                "Working with Product Mgmt., Quality Assurance, User Experience, and Documentation team members ensuring success for all",
                                "Projects of Note: Agent States Timeline, Agent Activities Sunburst, Report Refactor, Proteus Microservice",
                                "Agent States Timeline: Competitive differentiating feature, utilized new data source and Highcharts type to visualize data for customers",
                                "Agent Activities Sunburst: Breakdown data usably for customers using Highcharts chart types in new way for customers",
                                "Report Refactor: Lead team effort to refactor our report infrastructure adding customer requested features while refactoring tech debt",
                                "Proteus Microservice: AWS Lambda application using headless chrome instance and a static React rendering of Dart UI to generate PDF"
                            ]}
                        />
                    </CAccordionBody>
                </CAccordionItem>
            </CAccordion>
            </Section>
            <Section key="education" title="Education">
                <CAccordion alwaysOpen>
                    <CAccordionItem itemKey="ut-austin">
                        <CAccordionHeader>University of Texas at Austin</CAccordionHeader>
                        <CAccordionBody>
                            <div>2013 – 2017</div>
                            <ul className="mt-2">
                                <li><strong>B.S. in Computer Science</strong></li>
                                <li><strong>B.S. in Mathematics</strong></li>
                                <li><strong>Business Foundations Certificate</strong></li>
                            </ul>
                        </CAccordionBody>
                    </CAccordionItem>
                </CAccordion>
            </Section>

            <Section key="skills" title="Skills">
                <CAccordion alwaysOpen>
                    <CAccordionItem>
                        <CAccordionHeader>Backend</CAccordionHeader>
                        <CAccordionBody>
                            <List items={["Java", "Spring Boot 3", "REST APIs"]} />
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem>
                        <CAccordionHeader>Frontend</CAccordionHeader>
                        <CAccordionBody>
                            <List items={["React", "Redux", "Saga", "Highcharts", "HTML/CSS", "JavaScript", "TypeScript"]} />
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem>
                        <CAccordionHeader>Cloud / DevOps</CAccordionHeader>
                        <CAccordionBody>
                            <List items={["Terraform (IaC)", "AWS (Lambda, S3, ECS)", "Docker", "GitHub Actions", "CI/CD"]} />
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem>
                        <CAccordionHeader>Databases</CAccordionHeader>
                        <CAccordionBody>
                            <List items={["PostgreSQL", "OpenSearch/ElasticSearch", "JPA Hibernate", "NoSql (DynamoDB)", "Redis"]} />
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem>
                        <CAccordionHeader>Languages</CAccordionHeader>
                        <CAccordionBody>
                            <List items={["Java", "React (JSX)", "Python", "Terraform", "Bash", "HTML/CSS"]} />
                        </CAccordionBody>
                    </CAccordionItem>
                </CAccordion>
            </Section>

            <Section key="other-experience" title="Other Experience">
                <CAccordion alwaysOpen>
                    <CAccordionItem>
                        <CAccordionHeader>Assistant Coach – Northbrook Bluehawks AA Squirt</CAccordionHeader>
                        <CAccordionBody>
                            <div>May 2024 – Present</div>
                            <p>
                                Lead and mentor a team of young athletes, focusing on skill development, teamwork, and sportsmanship.
                            </p>
                        </CAccordionBody>
                    </CAccordionItem>

                    <CAccordionItem alwaysOpen>
                        <CAccordionHeader>Sergeant E5 – Texas State Guard, 1st Battalion 2nd Regiment</CAccordionHeader>
                        <CAccordionBody>
                            <div>June 2013 – July 2018</div>
                            <p>
                                Retired as SGT (E5), MOS 38B Civil Affairs Specialist.<br />
                                Responsibilities included: Squad Leader, Radio Operator, and STRP Coordinator.
                            </p>
                        </CAccordionBody>
                    </CAccordionItem>
                </CAccordion>
            </Section>
        </CContainer>
    )
}

function Section({ title, children }) {
    return (
        <CRow className="mb-1">
            <CCol>
                <CCard>
                    <CCardHeader>
                        <h4 className="mb-0">{title}</h4>
                    </CCardHeader>
                    <CCardBody>{children}</CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

function Item({ title, date, location, description }) {
    return (
        <div className="mb-2">
            <strong>{title}</strong>
            {date && <div>{date}</div>}
            {location && <div>{location}</div>}
            {description && <ul>
                {description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                ))}
            </ul>}
        </div>
    )
}

const List = React.memo(({items}) => {
    return (
        <ul>
            {items.map((item, idx) => (
                <li key={`${item}-${idx}`}>{item}</li>
            ))}
        </ul>
    )
})
