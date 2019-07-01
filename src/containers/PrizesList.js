import React, { Component } from "react";
import PrizeCard from "../Components/PrizeCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_REMOTE_ENDPOINT, PRIZES_RESOURCE } from "../BaseUrls";

class PrizesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prizesList: []
    };
  }

  componentDidMount = () => {
    this.getPrizes();
  };

  getPrizes = () => {
    axios.get(`${BASE_REMOTE_ENDPOINT}${PRIZES_RESOURCE}`).then(response => {
      this.setState({
        prizesList: response.data
      });
    });
  };

  render() {
    const { prizesList } = this.state;
    console.log(prizesList);
    return (
      <div className="card-container">
        {prizesList.map(({ id, name, imgSrc, points }) => (
           <Link key={id} to={`/prizes/${id}`}>
            <PrizeCard prizeName={name} imgSrc={imgSrc} points={points} />
          </Link>
        ))}
      </div>
    );
  }
}

export default PrizesList;
