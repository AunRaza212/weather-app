import React from "react";
import "../App.css";
import {  Stack, Typography } from "@mui/material";

const Map = () => {
  return (
    <Stack
      sx={{
        zIndex: "21",
        top: "96px",
        left: "150px",
        position: "absolute",
        width: { lg: "792px" },
        ml: "30px",
        border: "0px",
        height: "779px",
        borderRadius: "16px",
      }}
    >
      <img src="https://assets.api.uizard.io/api/cdn/stream/0c363d67-846f-41b5-9ccb-6261c602667e" alt="map"/>
      <Stack
        direction="column"
        p={3}
        zIndex={31}
        bgcolor="rgb(32, 43, 59)"
        position="absolute"
        top="230px"
        width="90px"
        left="560px"
        height="90px"
        borderRadius="15px"
        display="flex"
        justifyContent="center"
      >
        <Typography
          fontSize="24px"
          color="#dde0e4"
          fontWeight={600}
          display="flex"
          justifyContent="center"
          fontFamily="Rubik"
        >
          Barcelona
        </Typography>
        <img
          src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"
          alt="sun"
          style={{
            display: "flex",
            alignSelf: "center",
            backgroundSize: "cover",
            border: "0",
            borderRadius: "16px",
            height: "50px",
            width: "50px",
            backgroundPosition: "center",
          }}
        />
        <Typography
          fontSize="17px"
          color="#dde0e4"
          fontWeight={400}
          display="flex"
          justifyContent="center"
        >
          28°C
        </Typography>
      </Stack>
      <Stack
        direction="column"
        p={3}
        zIndex={31}
        bgcolor="rgb(32, 43, 59)"
        position="absolute"
        top="50px"
        width="90px"
        left="185px"
        height="90px"
        borderRadius="15px"
        display="flex"
        justifyContent="center"
      >
        <Typography
          fontSize="24px"
          color="#dde0e4"
          fontWeight={600}
          display="flex"
          justifyContent="center"
          fontFamily="Rubik"
        >
          Bilbao
        </Typography>
        <img
          src="https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521"
          alt="sun"
          style={{
            display: "flex",
            alignSelf: "center",
            backgroundSize: "cover",
            border: "0",
            borderRadius: "16px",
            height: "50px",
            width: "50px",
            backgroundPosition: "center",
          }}
        />
        <Typography
          fontSize="17px"
          color="#dde0e4"
          fontWeight={400}
          display="flex"
          justifyContent="center"
        >
          28°C
        </Typography>
      </Stack>
      <Stack
        direction="column"
        p={3}
        zIndex={31}
        bgcolor="rgb(32, 43, 59)"
        position="absolute"
        top="570px"
        width="90px"
        left="285px"
        height="90px"
        borderRadius="15px"
        display="flex"
        justifyContent="center"
      >
        <Typography
          fontSize="24px"
          color="#dde0e4"
          fontWeight={600}
          display="flex"
          justifyContent="center"
          fontFamily="Rubik"
        >
          Malaga
        </Typography>
        <img
          src="https://assets.api.uizard.io/api/cdn/stream/634b1d13-e2b4-4766-9bb1-0397c173c222"
          alt="rain"
          style={{
            display: "flex",
            alignSelf: "center",
            backgroundSize: "cover",
            border: "0",
            borderRadius: "16px",
            height: "50px",
            width: "50px",
            backgroundPosition: "center",
          }}
        />
        <Typography
          fontSize="17px"
          color="#dde0e4"
          fontWeight={400}
          display="flex"
          justifyContent="center"
        >
          33°C
        </Typography>
      </Stack>
      <Stack
        direction="column"
        p={3}
        zIndex={31}
        bgcolor="rgb(32, 43, 59)"
        position="absolute"
        top="310px"
        width="90px"
        left="120px"
        height="90px"
        borderRadius="15px"
        display="flex"
        justifyContent="center"
      >
        <Typography
          fontSize="24px"
          color="#dde0e4"
          fontWeight={600}
          display="flex"
          justifyContent="center"
          fontFamily="Rubik"
        >
          Madrid
        </Typography>
        <img
          src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"
          alt="sunn"
          style={{
            display: "flex",
            alignSelf: "center",
            backgroundSize: "cover",
            border: "0",
            borderRadius: "16px",
            height: "50px",
            width: "50px",
            backgroundPosition: "center",
          }}
        />
        <Typography
          fontSize="17px"
          color="#dde0e4"
          fontWeight={400}
          display="flex"
          justifyContent="center"
        >
          31°C
        </Typography>
      </Stack>
      <Stack
        direction="column"
        zIndex={31}
        color="blue"
        position="absolute"
        top='8px'
        left='30px'
        width="90px"
        height="90px"
        borderRadius="25px"
        display="flex"
        justifyContent="center"
      >
        <button
          style={{
            backgroundColor: "#0095ff",
            border: "0",
            fontFamily: "Rubik",
            color: "white",
            borderRadius: "26px",
            width: "90px",
            height: "40px",
          }}
        >
          Done
        </button>
      </Stack>
      <Stack
        direction="column"
        zIndex={31}
        color="blue"
        position="absolute"
        top='8px'
        left='30px'
        width="90px"
        height="90px"
        borderRadius="25px"
        display="flex"
        justifyContent="center"
      >
        <button
          style={{
            backgroundColor: "#0095ff",
            border: "0",
            fontFamily: "Rubik",
            color: "white",
            borderRadius: "26px",
            width: "90px",
            height: "40px",
          }}
        >
          Done
        </button>
      </Stack>
    </Stack>
  );
};

export default Map;
