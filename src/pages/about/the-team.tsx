import { spin } from "@/components/keyframes/spin";
import Gallery from "@/features/about/Gallery";
import {
  Container,
  Text,
  Title,
  createStyles,
  getStylesRef,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";

const useStyles = createStyles((theme) => ({
  main: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    zIndex: 1,
    overflow: "hidden",
    boxShadow: "0px 15px 50px 0px rgb(10 10 10 / 50%)",
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
  },
  headline: {
    ref: getStylesRef("headline"),

    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "40vmin",
    minHeight: 300,
    marginTop: "5vmin",
    boxShadow: `inset 30px 30px 50px 10px ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]
    },inset -30px -30px 50px 10px ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]
    }`,
    backgroundImage: `none`,
    overflow: "hidden",
    zIndex: 1,

    "&:after": {
      zIndex: -2,
      content: '""',
      position: "absolute",
      top: "-50%",
      left: 0,
      width: "200%",
      height: "500%",
      backgroundImage: `none`,
    },

    "&:before": {
      zIndex: -1,
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${
        theme.colorScheme === "dark" ? "A6A7AB" : "343A40"
      }' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      boxShadow: `inset 20px 20px 50px 20px ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[1]
      },inset -20px -20px 50px 20px ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[1]
      }`,
      backdropFilter: "blur(100px)",
    },
  },
  title: {
    fontWeight: 500,
    fontSize: "4vmin",
    border: "3px solid",
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
    borderRadius: theme.radius.xl,
    userSelect: "none",
  },
  spinGradient: {
    "&:after": {
      backgroundImage: `radial-gradient(at 35% 27%, hsla(221,80%,65%,1) 0px, transparent 50%),
        radial-gradient(at 78% 86%, hsla(154,74%,65%,1) 0px, transparent 50%),
        radial-gradient(at 63% 88%, hsla(265,97%,65%,1) 0px, transparent 50%),
        radial-gradient(at 37% 77%, hsla(321,78%,65%,1) 0px, transparent 50%),
        radial-gradient(at 70% 75%, hsla(170,81%,65%,1) 0px, transparent 50%),
        radial-gradient(at 3% 20%, hsla(201,81%,65%,1) 0px, transparent 50%)`,
      animation: `${spin} 5s linear infinite`,
    },
  },
}));

function About() {
  const { classes, cx } = useStyles();
  const { hovered, ref: titleRef } = useHover();

  return (
    <main className={classes.main}>
      <Container
        className={cx(classes.headline, { [classes.spinGradient]: hovered })}
        size="xl"
      >
        <Title
          ref={titleRef}
          mt="xl"
          p="sm"
          className={classes.title}
          order={1}
        >
          Meet our team
        </Title>
        <Text mt="lg" size="lg">
          Meet our diverse team of engineers, software developers, and business
          students.
        </Text>
      </Container>
      <Gallery
        filters={[
          "all",
          "leadership",
          "software",
          "mechanical",
          "electrical",
          "business/media",
        ]}
      />
    </main>
  );
}

export default About;
