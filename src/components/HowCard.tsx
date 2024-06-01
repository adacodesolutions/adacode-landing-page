const HowCard = () => {
  const details = [
    {
      title: "Personalized Attention",
      paragraph: "With fewer students initially enrolled, those in the first 200 often receive more personalized attention from instructors",
    },
    {
      title: "Preferred Timing",
      paragraph: " more flexibility in choosing their preferred schedule for courses, including popular time slots or convenient class timings",
    },
    {
      title: " Early Access to In-Demand Courses",
      paragraph: "early access to highly sought-after courses in programming languages, software development, data science, or other specialized areas",
    },
    {
      title: "Early Certification",
      paragraph: " Completing a course or program early can lead to earlier certification, allowing students to showcase their skills and credentials to prospective employers or clients ahead of others who enroll later.",
    },
  ];
  
  return (
    <>
    {
      details.map((content,index)=>(
    <div key={index} className="howcard_container">
      <h3>{content.title}</h3>
      <p>{content.paragraph}</p>
    </div>
    

      ))}
      </>
  );
};
export default HowCard;


