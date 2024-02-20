import logo_light from "../assets/logo-light.png";
import WorkshopCard from "../components/WorkshopCard";

function Home() {
  return (
    <>
      <section className="hero_section">
        <div className="hero_left">
          <img src={logo_light} alt="company logo" height={50} width={50} />
          <h1>
            Become a Software Developer in 6 Months <br />
            and crack a role at big tech
          </h1>
          <p>
            Learn from the top 1% in the industry and launch your career in
            Cloud Data Engineering with hands-on projects & job-ready skills
          </p>
          <div className="button_wrapper">
            <button className="button_left">Apply Now</button>
            <button className="button_right">Demo Call</button>
          </div>
          <p>Hurry! Only a few seats left.</p>
        </div>
        <div className="hero_right">
          <div className="box"></div>
        </div>
      </section>

      <Seperator />
      <section className="angle_investing">
        <h4>Who is this program for?</h4>
        <div className="workshopcards_wrapper">
          <WorkshopCard
            title="Freshers in any field"
            description="Learn the ins & outs of what life looks like as a Cloud Data En. So you can make an informed decision on further choosing your career path."
          />
          <WorkshopCard
            title="Data enthusiasts with ~7 years of experience"
            description="Hone your Data skillset and become valuable for your company"
          />
          <WorkshopCard
            title="Working Professionals"
            description=" Understand your current skill set and develop the skills required to successfully transition into Data Engineering."
          />

          <WorkshopCard
            title="Anyone curious about what Data Engineers truly do"
            description="dea what a career in Data Engineering Domain  truly looks like? Learn about Data and Tech in this course"
          />
        </div>
        <Seperator />
      </section>
    </>
  );
}
const Seperator = () => (
  <img
    className="seperator_image"
    src="https://assets-global.website-files.com/625416528a3419ca302b6dd8/62874784dadd6a59aeae0e0d_Line%2029.svg"
    alt="seperator"
  />
);

export default Home;
