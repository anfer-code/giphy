import Category from "components/Category";
import { useEffect, useState } from "react";
import { searchTrending } from "services/searchTrending";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])
  useEffect(function () {
    searchTrending()
      .then( response => setTrends(response))
  }, [])

  return <Category name="Tendencias" options={trends} />
};