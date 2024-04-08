interface ExclusiveCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const ExclusiveCard: React.FC<ExclusiveCardProps> = ({
  // imgUrl,
  title,
  description,
}: ExclusiveCardProps) => {
  return (
    <div className="exclusivecard_container">
      {/* <img src={imgUrl} alt={title} /> */}
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ExclusiveCard;
