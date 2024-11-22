import { useEffect, useState } from "react";
import EcoFriendlyFeatures from "./EcoFriendlyFeatures";
import AdventureCategories from "./AdventureCategorys";

const AdventurePage = () => {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/adventure.json"); 
        const data = await response.json();
        setAdventures(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load adventures.");
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <EcoFriendlyFeatures adventures={adventures} />
      <AdventureCategories adventures={adventures} />
    </div>
  );
};

export default AdventurePage;