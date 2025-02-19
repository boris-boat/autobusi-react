const apiKey = "to-add";

export const getRainChance = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  const data = await response.json();
  console.log(data);
  if (data.rain) {
    const chanceOfRain = data.rain["1h"] || data.rain["3h"] || 0; // Default to 0 if not available
    return `Chance of rain: ${chanceOfRain} mm`;
  } else {
    return "No rain data available";
  }
};
