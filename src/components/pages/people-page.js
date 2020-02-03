import React from "react";
import Row from "../row";
import { PersonList, PersonDetailes } from "../sw-components";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;

  return (
    <Row
      leftElement={<PersonList onItemSelected={(id) => {history.push(id)} }/>}
      rightElement={<PersonDetailes itemId={id} />}
    />
  );
};

export default withRouter(PeoplePage);
