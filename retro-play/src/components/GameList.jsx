import { useEffect, useState } from "react";
import fetchData from "../adapters";

const GetGames = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //       try{
  //           const [result, err]= await fetchData()
  //       }
  //   }
  // })
};
