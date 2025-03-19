import { Link } from "react-router-dom";

function giveMeList() {
  // Create state for the fetched data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const [result, err] = await fetchData(
          "https://free-to-play-games-database.p.rapidapi.com/api/games",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "5a29b66daemsh4d2c0f82c1cfb33p1fed14jsnf4306b9497e0",
              "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            },
          }
        );
        if (err) {
          setError(err.message);
          return;
        }

        // CHECKING DATA
        console.log(result[0]);
        console.log(result[0].game_url);
        // CHECKING DATA

        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Conditional Rendering

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Free-to-Play Games</h1>
      <ol>
        {/* Check if data is available */}
        {data && data.length > 0 ? (
          data.map((game) => (
            <li key={game.id}>
              {game.title} - {game.genre}
            </li>
          ))
        ) : (
          <li>No games found.</li>
        )}
      </ol>
    </div>
  );
}
// // Inside the component JSX
// <Link to="/translate">Go to Translator & Joke Generator</Link>;

export default giveMeList;
