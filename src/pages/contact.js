import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import HubspotForm from "react-hubspot-form"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import CurrencyTicker from "@components/CurrencyTicker"
import Contact from "@components/Contact"

const ContactPage = styled(({ data, className }) => {
  const { contact } = data.allContactJson.edges[0].node

  return (
    <Layout>
      <SEO title="Contact" />
      <CurrencyTicker />
      <Container className="my-5">
        <Row>
          <Col xs={12} className={`mb-3 ${className}`}>
            <h1>Contact Us</h1>
            <p className="reach">Reach out to us</p>
          </Col>
          <Col md={8}>
            <HubspotForm
              portalId="5104650"
              formId="3d8b52a5-394a-482f-9c99-baa68ca190ca"
              // onSubmit={() => console.log("Submit!")}
              // onReady={form => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
          </Col>
          <Col md={4}>
            {contact.map((item, index) => (
              <Contact
                name={item.name}
                email={item.email}
                phone={item.phone}
                key={index}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
})`
  h1 {
    color: #fff;
    font-size: 28px;
    font-weight: 400 !important;
    letter-spacing: -0.24px;
    line-height: 1.29;
  }

  .reach {
    color: #5d6c76;
    font-size: 14px;
    letter-spacing: 0.32px;
    line-height: 1.43;
  }

  .hs-form-required {
    display: none !important;
  }
`

export const query = graphql`
  {
    allContactJson {
      edges {
        node {
          contact {
            name
            email
            phone
          }
        }
      }
    }
  }
`

export default ContactPage
