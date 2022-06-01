const CountriesTable = ({ countries }) => {
  return (
    <>
      {countries.map((country, i) => (
        <tr key={i}>
          <td>{country.name}</td>
          <td>{country.capital}</td>
          <td>{country.region}</td>
          <td>
            <img src={country.flag} alt={country.name} height="50px" />
          </td>
        </tr>
      ))}
    </>
  );
};

export default CountriesTable;
