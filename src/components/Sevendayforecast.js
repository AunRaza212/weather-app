import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SevendayInfo from "./SevendayInfo";
import { fetchData } from "../utils/fetchData";

const Sevendayforecast = ({apiData}) => {
  // const [apiData, setapiData] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchDataFromAPI = async () => {
  //     try {
  //       const data = await fetchData("forecast/daily", {
  //         lat: `${Math.floor(Math.random() * 100) + 1}`,
  //         lon: `${Math.floor(Math.random() * 100) - 1}`,
  //       });
  //       setapiData(data);
  //     } catch (error) {
  //       setError("Error fetching data from the API");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchDataFromAPI();
  // }, []);
  return (
    <Stack
      direction="column"
      sx={{
        color: "white",
        backgroundColor: "rgb(32,43,59)",
        borderRadius: 5,
        ml: "700px",
        width: "400px",
        height: "804px",
      
       
      }}
      p={2}
    >
      <Box>
        <Typography p={2} fontSize={14} color="#9399a2" fontWeight={600}>
          7-DAY FORECAST
        </Typography>
      </Box>
      
      <Stack direction="column" gap="5px">
        <SevendayInfo borderBottom={'1px solid #35455e'} p={4} date='Monday' />
        <SevendayInfo borderBottom={'1px solid #35455e'} p={4} date='Tuesday' />
        <SevendayInfo  borderBottom={'1px solid #35455e'} p={4} date='Wednesday' />
        <SevendayInfo  borderBottom={'1px solid #35455e'}  p={4} date='Thursday'  />
        <SevendayInfo borderBottom={'1px solid #35455e'}  p={4} date='Friday'  />
        <SevendayInfo borderBottom={'1px solid #35455e'}  p={4} date='Saturday' />
        <SevendayInfo borderBottom={'1px solid #35455e'}  p={4}  date='Sunday'  />
      </Stack>
    </Stack>
  );
};

export default Sevendayforecast;
