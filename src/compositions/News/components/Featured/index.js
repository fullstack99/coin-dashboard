import React from "react"
import { any } from "prop-types"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// components
import Card from "@components/Card"
import Carousel from "@components/Carousel"
import NewsPrimary from "@components/NewsPrimary"
import NewsSecondary from "@components/NewsSecondary"
import NewsTertiary from "@components/NewsTertiary"

const Featured = ({ node }) => {
  const { newsPrimary, newsSecondary, newsTertiary } = node || {}
  const isLoading = false
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className="mt-5 mb-2 pb-1">
          Featured News
        </Col>
      </Row>
      <Row className="mb-5 mb-md-3">
        {!isLoading ? (
          <Carousel>
            {newsPrimary.map((news, index) => (
              <Col key={index}>
                <NewsPrimary data={news} className="mb-5" />
              </Col>
            ))}
          </Carousel>
        ) : (
          <div>Loading</div>
        )}
      </Row>
      <Row>
        <Col lg={8} xl={9} className="position-relative">
          {newsSecondary.map((news, index) => (
            <NewsSecondary key={index} data={news} className="mb-5" />
          ))}
        </Col>
        <Col lg={4} xl={3}>
          <Card title="Top Stories">
            {newsTertiary.map((news, index) => (
              <NewsTertiary key={index} data={news} />
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

Featured.propTypes = {
  node: any
}
Featured.defaultProps = {
  node: {}
}

export default Featured
