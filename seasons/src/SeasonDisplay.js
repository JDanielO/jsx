import React from "react";

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly",
    iconName: "nowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // {text, iconName}

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text} </h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
