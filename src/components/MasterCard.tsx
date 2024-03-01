import React from "react";
import { FaVideo } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsPersonWalking } from "react-icons/bs";
import { SiSecurityscorecard } from "react-icons/si";

const MasterCard = () => {
  return (
    <div className="mastercard_container">
      <section className="top_mastercard">
        <h1>
          Up skill your Team;
          <br /> Upscale your Business
        </h1>
        <p>
          Get the <span>Top 1%</span> Mentors to train your team!
        </p>
      </section>
      <section className="bottom_mastercard">
        <p>
          Invest in the skills & knowledge of your team and unlock new levels of
          efficiency and innovation where business growth is not just a goal,
          but an ongoing journey.
        </p>
        <h5>Why learn with Adacode Solutions ?</h5>
        <div className="grey_span_card_container">
          {spanDetails.map((content, index) => (
            <Span content={content.title} icon={content.iconName} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MasterCard;

const spanDetails = [
  {
    title: "On-Demand video content",
    iconName: "video-icon",
  },
  {
    title: "Project driven approach to achieve outcomes",
    iconName: "project-icon",
  },
  {
    title: "Access to network of 1000+ learners",
    iconName: "network-icon",
  },
  {
    title: "Office hours with mentors for clearing doubts",
    iconName: "mentor-icon",
  },
];

interface SpanProps {
  content: string | number;
}

const Span: React.FC<SpanProps> = ({ content }) => {
  return <span className="grey_span_card">{content}</span>;
};
