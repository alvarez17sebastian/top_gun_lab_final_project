import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_REMOTE_ENDPOINT } from "../BaseUrls";
import AppRouter from '../Router';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg,
  CardBody,
  CardLink,
  CardSubtitle
} from "reactstrap";

class PrizeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Prize: {
        id: "",
        name: "",
        description: "",
        points: "0",
        imgSrc: ""
      },
      editing: false
    };
  }

  componentDidMount = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    axios.get(`${BASE_REMOTE_ENDPOINT}/prizes/${id}`).then(response => {
      this.setState({
        Prize: response.data
      });
    });
  };

  deletePrize = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    axios.delete(`${BASE_REMOTE_ENDPOINT}/prizes/${id}`).then(response => {
      this.setState({
        Prize: response.data
      });
    });
  };

  render() {
    const {
      Prize: { id, name, description, points, imgSrc }
    } = this.state;

    return (
      <>
        <AppRouter />
        <Row className="card-container">
          <Col sm="4">
            <Card body>
              <CardBody className="text-center">
                <CardTitle>{name}</CardTitle>
              </CardBody>
              <img width="100%" src={imgSrc} alt="Card image cap" />
              <CardBody>
                <CardText>{description}</CardText>
                <CardLink href="#">
                  Editar
              </CardLink>
                <CardLink onClick={this.deletePrize} href="#">Eliminar</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default PrizeDetail;
