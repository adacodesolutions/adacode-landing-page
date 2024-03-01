import logo_light from "../assets/logo-light.png";
import {
  WorkshopCard,
  ExclusiveCard,
  HorizontalVideoCard,
  EndCard,
  MasterCard,
  HowCard,
} from "../components/";

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
      <section className="angle_investing">
        <h4>Here's Why You Should Join Us!</h4>
        <p>
          Of like-minded people looking to build, accelerate or enhance their
          existing careers by learning strategic growth frameworks.Through this
          community, you can….
        </p>
        <div className="exclusive_card_container">
          <ExclusiveCard
            imgUrl=""
            title="Collaborate on real-life projects"
            description="Whole experience was great. Even after having zero knowledge about the Cloud Data Engineering field, lots of doubts and concepts were cleared"
          />
          <ExclusiveCard
            imgUrl=""
            title="Collaborate on real-life projects"
            description="Excellent content and a great course to kickstart my Cloud Data Engineering journey."
          />
          <ExclusiveCard
            imgUrl=""
            title="Collaborate on real-life projects"
            description="Meet and learn with others pursuing the same path as you"
          />
        </div>
        <Seperator />
        <section className="how_does_section">
          <h4>How Does the program work?</h4>
          <HorizontalVideoCard
            imgUrl="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/61d6be9a05bd9eb56f860a93_ezgif.com-gif-maker%20(2).gif"
            title="ON-DEMAND VIDEOS"
            description="Learn the exact roles & responsibilities of a Cloud Data Engineer working on an real life projects and case studies"
            className="videocard_right"
          />

          <HorizontalVideoCard
            imgUrl="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/61d6be9a05bd9eb56f860a93_ezgif.com-gif-maker%20(2).gif"
            title="ON-DEMAND VIDEOS"
            description="Learn the exact roles & responsibilities of a Cloud Data Engineer working on an real life projects and case studies"
            className="videocard_left"
          />
          <HorizontalVideoCard
            imgUrl="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/61d6be9a05bd9eb56f860a93_ezgif.com-gif-maker%20(2).gif"
            title="ON-DEMAND VIDEOS"
            description="Learn the exact roles & responsibilities of a Cloud Data Engineer working on an real life projects and case studies"
            className="videocard_right"
          />
        </section>
        <Seperator />
        <section className="how_does_section">
          <h4>By the end of the program you’ll have:</h4>
          <div className="endcard_wrapper">
            <EndCard content="Make your 0-1 journey in Data engineering, with opportunities to work through real-world Data problems" />
            <EndCard content="With improved problem-solving skills, break down complex business problems into structural components and come up with solutions that create a massive impact." />
            <EndCard content="Increased understanding of the Data & Tech  industry through insights from the mentors as well as the community." />
            <EndCard content="Crack case interviews at top companies as a Data Engineer with the right strategies and approach to follow" />
          </div>
        </section>
      </section>
      <section className="mastercard_wrapper">
        <MasterCard />
      </section>
      <section className="how_section">
        <h4>Only for first 200 students </h4>
        <div className="howcard_wrapper">
          <HowCard />
          <HowCard />
          <HowCard />
          <HowCard />
          <HowCard />
        </div>
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
