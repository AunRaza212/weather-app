import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import CitiesInfo from "./CitiesInfo";
import TodaysForecast from "./TodaysForecast";
import { fetchData } from "../utils/fetchData";

const Cities = () => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const fetchCityData = async (city) => {
      try {
        const data = await fetchData("forecast.json", { q: city });
        setApiData((prevData) => ({
          ...prevData,
          [city]: data,
        }));
      } catch (error) {
        console.error(`Error fetching data for ${city} from the API`, error);
      }
    };

    const cities = ["Karachi", "Lahore", "Multan", "Islamabad"];

    cities.forEach((city) => fetchCityData(city));
  }, []);

  // Check if data is available for all cities
  if (Object.keys(apiData).length !== 4) {
    return <div>Loading...</div>;
  }
 

  return (
    <Stack direction="row">
      <Stack direction="column">
        <CitiesInfo
          city={"Karachi"}
          temperature={apiData["Karachi"].current.temp_c}
          time={apiData["Karachi"].location.localtime}
        />
        <CitiesInfo
          city={"Lahore"}
          temperature={apiData["Lahore"].current.temp_c}
          time={apiData["Lahore"].location.localtime}
        />
        <CitiesInfo
          city={"Multan"}
          temperature={apiData["Multan"].current.temp_c}
          time={apiData["Multan"].location.localtime}
        />
        <CitiesInfo
          city={"Islamabad"}
          temperature={apiData["Islamabad"].current.temp_c}
          time={apiData["Islamabad"].location.localtime}
        />
      </Stack>

      <Box
        mt="15px"
        sx={{
          visibility: {
            sm: "hidden",
            xs: "hidden",
            lg: "visible",
            md: "visible",
            xl: "visible",
          },
        }}
      >
        <Typography
          sx={{ fontWeight: "600", color: "#dde0e4", ml: "50px", mt: "15px" }}
          variant="h3"
          fontFamily="Rubik"
          mb="40px"
        >
          <span> {apiData["Karachi"].location.name} </span>

          <Typography
            variant="h6"
            sx={{ fontFamily: "Rubik", fontWeight: "600", color: "#9399A2ff" }}
          >
            <span>Humidity: {apiData["Karachi"].current.humidity}%</span>
          </Typography>
          <Box mt="35px">
            <span>{apiData["Karachi"].current.temp_c}°C</span>
          </Box>
        </Typography>
        <TodaysForecast apiData={apiData["Karachi"]} />
      </Box>
    </Stack>
  );
};

export default Cities;
