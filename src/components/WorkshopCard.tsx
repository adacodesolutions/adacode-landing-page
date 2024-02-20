interface WorkshopCardProps {
  title: string;
  description: string;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({
  title,
  description,
}: WorkshopCardProps) => {
  return (
    <div className="workshopcard_contianer">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default WorkshopCard;
