import React, { useContext, useState } from "react";
import { Box,  Stack } from "@mui/material";
import SideBar from "./SideBar";
import Cities from "./Cities";
import Weather from "./Weather";
import Settings from "./Settings";
import { useApiData } from "./ApiContext";
const Feed = () => {

  // const MainFeed =()=>
  //   <MainFeed/>
  const [selectedCategory, setSelectedCategory] = useState("");

const apiData = useApiData()

if (!apiData) {
  return <div>Loading...</div>;
}


  const renderComponentByCategory = () => {
    switch (selectedCategory) {
      case "Weather":
        return <Weather apiData={apiData}/>;
      case "Cities":
        return <Cities apiData={apiData} />;
        case "Settings":
          return <Settings />;
      case "":
        return <Weather apiData={apiData}/>;
        
      // Add cases for other categories as neede
      default:
        return null;
    }
  };
  

  return (

    <Stack direction="row" overflow='clip'>

    <Box
      sx={{
        height: { sx: "auto", md: "92vh" },
        borderRight: {lg:"1px solid #3d3d3d",sm:false,xs:false},
        px: { sx: 0, md: 2 },
       
      }}
    >
      <SideBar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
    </Box>

    {renderComponentByCategory()}
    </Stack>



  );
};

export default Feed;
//   const 
// // useEffect(() => {
// //   const fetchDataFromAPI = async () => {
// //     try {
// //       const data = await fetchData("current", {
// //         lat: `${Math.floor(Math.random() * 100) + 1}`,
// //         lon: `${Math.floor(Math.random() * 100) - 1}`,
// //       });
// //       setWeatherData(data);
// //     } catch (error) {
// //       setError("Error fetching data from the API");
// //     } finally {
// //       setLoading(false);
// //     }

// //   };
// //   fetchDataFromAPI();
// // }, []);

  /* {weatherData && weatherData.data.length > 0 &&(<Typography sx={{ color: "white" }} variant="h4">
      {weatherData.data[0].city_name}
      {weatherData.data[0].temp}°C
      </Typography>)} */


/* <button onClick={MainFeed} >
Get started
</button> */