import React from "react";

import Notes from "./Notes";

export const Home = (props) => {
  const {showAlert} = props;
 
  return (
    <div>
      <div className="container my-3">
        <Notes showAlert={showAlert}/>
      </div>
    </div>
  );
};

export default Home;
