import React from "react";
import OurTeam from "./OurTeam";
import { useSelector } from "react-redux";

function OurTeamContainer() {
  const teamMembers = useSelector((state) => state.teamMembers);
  return <OurTeam teamMembers={teamMembers} />;
}

export default OurTeamContainer;
