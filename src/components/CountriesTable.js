const CountriesTable = ({ countries }) => {
  return (
    <>
      {countries.map((country, i) => (
        <tr key={i} className="align-middle">
          <td>{country.name}</td>
          <td>{country.capital}</td>
          <td>{country.region}</td>
          <td>
            <img className="flags" src={country.flag} alt={country.name} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default CountriesTable;
