import { CiLocationArrow1 } from "react-icons/ci";

interface Props {
  content: string;
}

const EndCard: React.FC<Props> = ({ content }) => {
  return (
    <div className="endcard_container">
      <CiLocationArrow1 />
      {content}
    </div>
  );
};

export default EndCard;
