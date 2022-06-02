const Test = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [countries, setCountries] = useState([]);

  async function fetchData() {
    try {
      const res = await axios.get("https://restcountries.com/v2/all");
      setCountriesData(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCountries(countriesData);
  }, [countriesData]);

  return <></>;
};

export default Test;
