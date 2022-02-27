import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: 'Burr, it is chilly!!',
    iconName: 'snowflake',
  },
};

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

  console.log(seasonConfig);
  console.log(seasonConfig[season]);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`${season} season-display`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
