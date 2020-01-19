import React from 'react';
import './info-person.css';

const InfoPerson = () => {

	return (
		<div className="random-planet jumbotron">
			<img className="planet-image" alt="planet" src="https://i.picsum.photos/id/729/500/500.jpg" />
      <div className="random-planet-descr">
        <h3>Person Name</h3>
        <ul className="list-group random-planet-table">
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Parameter <span>Data</span>
          </li>
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Parameter <span>Data</span>
          </li>
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Parameter <span>Data</span>
          </li>
        </ul>
      </div>
		</div>
	);

}

export default InfoPerson;