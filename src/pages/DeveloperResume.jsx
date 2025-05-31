import React from 'react'
import {
    CContainer, CRow, CCol,
    CCard, CCardHeader, CCardBody
} from '@coreui/react'

export default function DeveloperResume() {
    return (
        <CContainer className="my-5" style={{ maxWidth: '900px' }}>
            <CRow className="mb-4">
                <CCol>
                    <h1 className="text-center">Your Name</h1>
                    <p className="text-center">
                        Email: you@example.com • Phone: (123) 456-7890 • Location: City, State<br />
                        GitHub: github.com/yourhandle • LinkedIn: linkedin.com/in/yourhandle
                    </p>
                </CCol>
            </CRow>

            <Section title="Work Experience">
                <Item
                    title="Senior Software Engineer – Awesome Company"
                    date="2020 – Present"
                    description={[
                        "Led development of internal tools for data processing and analysis.",
                        "Migrated legacy systems to microservices in Spring Boot.",
                        "Mentored junior devs and conducted code reviews."
                    ]}
                />
                <Item
                    title="Software Engineer – Cool Startup"
                    date="2017 – 2020"
                    description={[
                        "Built and scaled React-based dashboards.",
                        "Implemented CI/CD with GitHub Actions and Docker.",
                        "Wrote data pipelines with Python and SQL."
                    ]}
                />
            </Section>

            <Section title="Education">
                <Item
                    title="B.S. in Computer Science – University Name"
                    date="2013 – 2017"
                    description={["Graduated with honors."]}
                />
            </Section>

            <Section title="Skills">
                <List items={["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "AWS", "Terraform", "CI/CD"]} />
            </Section>

            <Section title="Languages">
                <List items={["English (Native)", "Spanish (Conversational)"]} />
            </Section>

            <Section title="Other Experience">
                <Item
                    title="Open Source Contributor"
                    date=""
                    description={[
                        "Contributed to various GitHub projects including UI libraries and DevOps tooling.",
                        "Maintainer of a CLI-based productivity tool."
                    ]}
                />
            </Section>
        </CContainer>
    )
}

function Section({ title, children }) {
    return (
        <CRow className="mb-4">
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

function Item({ title, date, description }) {
    return (
        <div className="mb-3">
            <strong>{title}</strong>
            {date && <div className="text-muted">{date}</div>}
            <ul>
                {description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                ))}
            </ul>
        </div>
    )
}

function List({ items }) {
    return (
        <ul>
            {items.map((i, idx) => (
                <li key={idx}>{i}</li>
            ))}
        </ul>
    )
}
