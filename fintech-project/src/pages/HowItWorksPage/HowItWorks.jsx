import react from "react";
import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <div className="howitworks-main">
      <p className="howitworks-titles">Campaign Creator?</p>

      <div className="background-light-grey pb-5 w-75 m-auto">
        <div className="container"></div>
        <div className="row justify-content mb-5">
          <div
            className="col-lg-4 text-center mb-5 mb-lg-0 show"
            animate="down"
          >
            <div className="background-quaternary color-white text-center d-inline-flex border-radius-md shadow-sm how-it-work-box mb-4  howitworks-campaign-cards">
              <div className="w-100 py-4 px-3">
                <h1 className="font-secondary font-weight-bold mb-2 text-white howitworks-card-main">
                  1
                </h1>
                <p className="pt-3 text-white howitworks-card-main-second">
                  Start With Signing up
                </p>
              </div>
            </div>
            <div>
              <p>
                Sign up confidently to explore a personalized experience. Your
                security is our priority, with encrypted protection for your
                data. Join our trusted community and enjoy exclusive benefits.{" "}
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 text-center mb-5 mb-lg-0 show"
            animate="down"
          >
            <div className="background-quaternary color-white text-center d-inline-flex border-radius-md shadow-sm how-it-work-box mb-4 howitworks-campaign-cards">
              <div className="w-100 py-4 px-3">
                <h1 className="font-secondary text-white font-weight-bold  mb-2 howitworks-card-main">
                  2
                </h1>
                <p className="pt-3 text-white howitworks-card-main-second">
                  Start Your Campaign
                </p>
              </div>
            </div>
            <div>
              <p>
                Starting a campaign on WeRise is simple: We first need to
                collect few documentation to verify your identity and your
                campaign details including title, picture, goal and description.
                Once submitted, we will review your request fast and post your
                campaign online in no-time!{" "}
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 text-center mb-5 mb-lg-0 show"
            animate="down"
          >
            <div className="background-quaternary color-white text-center d-inline-flex border-radius-md shadow-sm how-it-work-box mb-4 howitworks-campaign-cards">
              <div className="w-100 py-4 px-3">
                <h1 className="font-secondary text-white font-weight-bold mb-2 howitworks-card-main">
                  3
                </h1>
                <p className="pt-3 text-white howitworks-card-main-second">
                  Manage Donations
                </p>
              </div>
            </div>
            <div>
              <p>
                With your user account on werise you can check all donations and
                their corresponding currencies. Currencies are updated within 72
                hours after a donation is made. You can also request to withdraw
                the collected amount at any time if your goal is not reached
                yet; however a small penalty fee will apply.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="howitworks-titles">Donor</p>

      <div className="background-light-grey pb-5 w-75 m-auto">
        <div className="container"></div>
        <div className="row justify-content mb-5">
          <div
            className="col-lg-4 text-center mb-5 mb-lg-0 show"
            animate="down"
          >
            <div className="background-quaternary color-white text-center d-inline-flex border-radius-md shadow-sm how-it-work-box mb-4  howitworks-campaign-cards">
              <div className="w-100 py-4 px-3">
                <h1 className="font-secondary font-weight-bold mb-2 text-white howitworks-card-main">
                  1
                </h1>
                <p className="pt-3 text-white howitworks-card-main-second">
                  Start With Signing up
                </p>
              </div>
            </div>
            <div>
              <p>
                Sign up confidently to explore a personalized experience. Your
                security is our priority, with encrypted protection for your
                data. Join our trusted community and enjoy exclusive benefits.{" "}
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 text-center mb-5 mb-lg-0 show"
            animate="down"
          >
            <div className="background-quaternary color-white text-center d-inline-flex border-radius-md shadow-sm how-it-work-box mb-4 howitworks-campaign-cards">
              <div className="w-100 py-4 px-3">
                <h1 className="font-secondary text-white font-weight-bold  mb-2 howitworks-card-main">
                  2
                </h1>
                <p className="pt-3 text-white howitworks-card-main-second">
                  View All Campaigns
                </p>
              </div>
            </div>
            <div>
              <p>
                Embark on a journey of inspiration! Explore the multitude of
                campaigns on our platform, each telling a unique story of hope,
                change, and resilience. From community projects to personal
                endeavors, there's a campaign that resonates with every heart.
                Dive into the details, discover the goals, and witness the
                impact these campaigns aim to create. Your journey starts here —
                be a spectator of positive change. Browse through the
                campaigns,connect with the stories, and witness the collective
                effort to make the world a better place. Together, let's
                celebrate the spirit of giving and amplify the power of
                compassion.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 text-center mb-5 mb-lg-0 show"
            animate="down"
          >
            <div className="background-quaternary color-white text-center d-inline-flex border-radius-md shadow-sm how-it-work-box mb-4 howitworks-campaign-cards">
              <div className="w-100 py-4 px-3">
                <h1 className="font-secondary text-white font-weight-bold mb-2 howitworks-card-main">
                  3
                </h1>
                <p className="pt-3 text-white howitworks-card-main-second">
                  Donate to campaigns
                </p>
              </div>
            </div>
            <div>
              <p>
                Supporting a cause is just a click away! Browse through our
                diverse range of campaigns created by passionate individuals and
                organizations. Every campaign is a story waiting for someone to
                be a part of it. Explore the impactful initiatives, read the
                heartfelt stories, and contribute to the change you want to see
                in the world. Your donation has the power to make a difference,
                turning dreams into reality..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
