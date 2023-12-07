import React from 'react';
import {useEffect,useContext,useState,createContext } from 'react';
import {fetchData} from '../utils/fetchData';

const ApiDataContext = createContext();

export const ApiContext = ({ children }) => {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
      const fetchDataFromAPI = async () => {
        try {
          const data = await fetchData( 'forecast.json' ,{q:'Karachi'});
          setApiData(data);
        } catch (error) {
          console.error("Error fetching data from the API", error);
        }
      };
  
      fetchDataFromAPI();
    }, []);
  return (
    <ApiDataContext.Provider value={apiData}>
      {children}
    </ApiDataContext.Provider>
  )
}

export const useApiData = () => {
    return useContext(ApiDataContext);
  };

