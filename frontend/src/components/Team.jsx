import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Customer Reviews</h1>
          <p>
            See what our valued customers have to say about their dining experiences with our popular dishes.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
                <p className="customer-review">{element.review}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
