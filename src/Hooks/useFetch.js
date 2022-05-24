import React, { useState, useEffect } from 'react'
import axios from 'axios';

function useFetch({ url }) {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const fetchData = async () => {
  try {
   const { data: resData } = await axios.get(url)
   console.log(resData)
   setData(resData)
   setLoading(false)
  } catch (error) {
   setLoading(false)
   setError(error.message)
  }
 }
 useEffect(() => {
  fetchData()
 }, [])
 return { data, loading, error }
}

export default useFetch