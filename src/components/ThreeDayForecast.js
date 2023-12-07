import React from "react";
import SevendayInfo from "./SevendayInfo";
import { Box, Stack, Typography } from "@mui/material";

const ThreeDayForecast = ({ apiData }) => {
  if (!apiData || !apiData.forecast || !apiData.forecast.forecastday) {
    // Handle the case when data is not available
    return <div>Loading123...</div>;
  }
  
 


  const flee=apiData.forecast.forecastday[0].date

  
  const seet= apiData.forecast.forecastday[0].day.condition.text

  return (
    <Stack ml="57px" direction="column">
      <Typography
        color="#9399a2"
        fontSize="14px"
        p={1}
        fontFamily="Rubik"
        fontWeight={600}
      >
        3-Day Forecast
      </Typography>
      <Stack direction="column">
        <Box>
          <Typography fontFamily="Rubik" fontWeight="bold" fontSize="17px">
            <SevendayInfo
              borderBottom="1px solid #9399a2"
              p={3}
              date={flee}
              sunny={seet}
            />
            <SevendayInfo
              borderBottom="1px solid #9399a2"
              p={3}
              date={flee}
              sunny={seet}
            />
            <SevendayInfo
              p={3}
              date={flee}
              sunny={seet}
            />
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ThreeDayForecast;
// ThreeDayForecast.js
// import React from "react";
// import SevendayInfo from "./SevendayInfo";
// import { Box, Stack, Typography } from "@mui/material";

// const ThreeDayForecast = ({ apiData }) => {
//   // Extract the forecastday array from apiData
//   const forecastDays = apiData.forecast && apiData.forecast.forecastday;
//   console.log(apiData)

//   if (!forecastDays || forecastDays.length < 3) {
//     // Handle the case when there are not enough forecast days
//     return <div>Insufficient forecast data</div>;
//   }

//   const [day1, day2, day3] = forecastDays;

//   return (
//     <Stack ml="57px" direction="column">
//       <Typography color="#9399a2" fontSize="14px" p={1} fontFamily="Rubik" fontWeight={600}>
//         3-Day Forecast
//       </Typography>
//       <Stack direction="column">
//         <Box>
//           <Typography fontFamily="Rubik" fontWeight="bold" fontSize="17px">
//             <SevendayInfo
//               borderBottom="1px solid #9399a2"
//               p={3}
//               date={day1.date}
//               sunny={day1.day.condition.text}
//             />
//             <SevendayInfo
//               borderBottom="1px solid #9399a2"
//               p={3}
//               date={day2.date}
//               sunny={day2.day.condition.text}
//             />
//             <SevendayInfo p={3} date={day3.date} sunny={day3.day.condition.text} />
//           </Typography>
//         </Box>
//       </Stack>
//     </Stack>
//   );
// };

// export default ThreeDayForecast;

