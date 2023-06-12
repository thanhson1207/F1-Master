function Driver({ drivers }) {
  return (
    <div>
      {drivers.map((driver, index) => (
        <div key={index}>
          <h2>{driver.Name}</h2>
          <p>Team: {driver.Team}</p>
          <p>Country: {driver.Country}</p>
          <img src={driver.Image} />
        </div>
      ))}
    </div>
  );
}

export default Driver;
