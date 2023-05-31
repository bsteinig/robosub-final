import { Wrapper } from "@googlemaps/react-wrapper";
import {
  Avatar,
  Paper,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useRef, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

//NOTE - https://www.youtube.com/watch?v=8kxYqoY2WwE

export default function Markers() {
  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}
      version="beta"
      libraries={["marker"]}
    >
      <Map />
    </Wrapper>
  );
}

const mapOptions = {
  mapId: process.env.NEXT_PUBLIC_MAP_ID,
  center: { lat: 42.294823, lng: -83.70942 },
  zoom: 17,
  disableDefaultUI: true,
};

function Map() {
  const [map, setMap] = useState();
  const mapRef = useRef();

  useEffect(() => {
    setMap(new window.google.maps.Map(mapRef.current, mapOptions));
  }, []);

  return (
    <>
      <div
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "15px",
          boxShadow:
            "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",
        }}
        ref={mapRef}
      />
      {map && <RobosubMarker map={map} />}
    </>
  );
}

const useMarkerStyles = createStyles((theme) => ({
  mapPin: {
    position: "relative",
    zIndex: 2,

    "&:before": {
      content: "''",
      position: "absolute",
      top: "75.5%",
      left: "50%",
      width: "91%",
      transform: "translateX(-49.6%)",
      height: "70%",
      backgroundColor: theme.colors.gray[0],
      clipPath: "polygon(50% 100%, 0 0, 100% 0)",
    },
  },
}));

function RobosubMarker({ map }) {
  const { classes } = useMarkerStyles();
  const theme = useMantineTheme();

  return (
    <Marker
      map={map}
      position={{ lat: 42.294823, lng: -83.70942 }}
      theme={theme}
    >
      <Avatar
        style={{
          overflow: "visible",
          backgroundColor: theme.colors.gray[0],
        }}
        classNames={{ placeholder: classes.mapPin }}
        size={80}
        radius={40}
      >
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className="icon icon-tabler"
          strokeWidth="1"
          stroke="none"
          fill={"#111"}
        >
          <path d="m19,2.6l-7,4.9L5,2.6H0v18.8h5.8v-10.7l6.2,4.1,6.2-4.1v10.7h5.8V2.6h-5Zm-7,10l-7.5-5.4c.5.2,2.9,1.7,2.9,1.7,0,0,1.5.8,3.2,1.6,1.3.6,1.5.9,1.5,1,0,0,.2-.3,1.5-1,1.7-.8,3.2-1.6,3.2-1.6,0,0,2.3-1.5,2.9-1.7l-7.5,5.4Z" />
        </svg>
      </Avatar>
    </Marker>
  );
}

function Marker({ map, children, position, theme }) {
  const markerRef = useRef();
  const rootRef = useRef();

  useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement("div");
      rootRef.current = createRoot(container);

      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        position,
        content: container,
      });
    }
  }, []);

  useEffect(() => {
    rootRef.current.render(children);
    markerRef.current.position = position;
    markerRef.current.map = map;
  }, [map, position, children, theme]);
}
