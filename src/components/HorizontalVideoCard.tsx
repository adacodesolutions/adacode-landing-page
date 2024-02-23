interface Props {
  imgUrl: string;
  title: string;
  description: string;
  className: string;
}

const HorizontalVideoCard: React.FC<Props> = ({
  imgUrl,
  title,
  description,
  className,
}) => {
  return (
    <div className={`videocard ${className}`}>
      <img src={imgUrl} alt={title} />
      <div className="videocard_content_container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HorizontalVideoCard;
