import React, { Component } from "react";
import Card from "../components/Card";
import { FaStoreAlt, FaSimplybuilt, FaShareAlt } from "react-icons/fa";

import "../styles/services.css";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      services: [
        {
          id: 1,
          icon: <FaStoreAlt />,
          type: "Architecture",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        },
        {
          id: 2,
          icon: <FaShareAlt />,
          type: "Management",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        },
        {
          id: 3,
          icon: <FaSimplybuilt />,
          type: "Renovate",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        },
      ],
    };
  }

  renderServices = () => {
    return this.state.services.map((service) => {
      return (
        <Card
          key={service.id}
          icon={service.icon}
          type={service.type}
          description={service.description}
        />
      );
    });
  };

  render() {
    return <div className='services'>{this.renderServices()}</div>;
  }
}

export default Services;
