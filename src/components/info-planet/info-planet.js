import React from 'react';
import './info-planet.css';

const InfoPlanet = () => {

	return (
		<div className="random-planet jumbotron">
			<img alt="planet" src="https://i.picsum.photos/id/729/500/500.jpg" />
      <div className="random-planet-descr">
        <h3>Planet Name</h3>
        <ul class="list-group random-planet-table">
          <li class="list-group-item d-flex justify-content-start align-items-center">
            Parameter <span>Data</span>
          </li>
          <li class="list-group-item d-flex justify-content-start align-items-center">
            Parameter <span>Data</span>
          </li>
          <li class="list-group-item d-flex justify-content-start align-items-center">
            Parameter <span>Data</span>
          </li>
        </ul>
      </div>
		</div>
	);

}

export default InfoPlanet;