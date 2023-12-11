import { Box, Stack, Typography } from "@mui/material";
import SevendayInfo from "./SevendayInfo";


const Sevendayforecast = ({ apiData }) => {
  return (
    <Stack
      direction="column"
      sx={{
        color: "white",
        position:'absolute',
        backgroundColor: "rgb(32,43,59)",
        borderRadius: 5,
        left:'1175px',
        top:'63px',
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
        <SevendayInfo
          borderBottom={"1px solid #35455e"}
          p={3}
          date="Monday"
          sunny={
            <img
              src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"
              alt="sun"
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          }
        />
        <SevendayInfo
          borderBottom={"1px solid #35455e"}
          p={3}
          date="Tuesday"
          sunny={
            <img
              src="https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901"
              alt="clouds"
              style={{
                height: "40px",
                width: "70px",
                marginRight:'-10px'
              }}
            />
          }
        />
        <SevendayInfo
          borderBottom={"1px solid #35455e"}
          p={3}
          date="Wednesday"
          sunny={
            <img
              src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"
              alt="sun"
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          }
        />
        <SevendayInfo
          borderBottom={"1px solid #35455e"}
          p={3}
          date="Thursday"
          sunny={
            <img
              src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"
              alt="sun"
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          }
        />
        <SevendayInfo
          borderBottom={"1px solid #35455e"}
          p={3}
          date="Friday"
          sunny={
            <img
              src="https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901"
              alt="clouds"
              style={{
                height: "40px",
                width: "70px",
                marginRight:'-10px'
              }}
            />
          }
        />
        <SevendayInfo
          borderBottom={"1px solid #35455e"}
          p={3}
          date="Saturday "
          sunny={
            <img
              src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"
              alt="sun"
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          }
        />
        <SevendayInfo
          borderBottom={"1px solid #35455e"}
          p={3}
          date="Sunday"
          sunny={
            <img
              src="https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521"
              alt="rain"
              style={{
                
                height: "60px",
                width: "60px",
                marginRight:'-7px'
              }}
            />
          }
        />
      </Stack>
    </Stack>
  );
};

export default Sevendayforecast;
