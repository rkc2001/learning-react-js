import React from 'react';

// Function  whose sole purpose is to determine what season is it?
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  // season will contain a string i.e. Summer or Winter
  const season = getSeason(props.lat, new Date().getMonth());

  const message =
    season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';

  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{message}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
