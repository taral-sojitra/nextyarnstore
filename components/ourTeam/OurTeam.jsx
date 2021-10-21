import React from "react";
import TeamMember from "./components/teamMember/TeamMember";

const OurTeam = ({teamMembers}) => {
  return (
    <div className="row my-4">
      <div className="col-12">
        <h2 className="noo-sh-title">Meet Our Team</h2>
      </div>
      {teamMembers.map((member) => (
        <div className="col-sm-6 col-lg-3" key={member}>
          <TeamMember {...member}/>
        </div>
      ))}
    </div>
  );
};

export default OurTeam;
