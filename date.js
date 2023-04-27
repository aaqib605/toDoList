exports.getDate = () => {
  const today = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const day = today.toLocaleDateString("en-US", options);
  return day;
};

exports.getDay = () => {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  const day = today.toLocaleDateString("en-US", options);
  return day;
};
