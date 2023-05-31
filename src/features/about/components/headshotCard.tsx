import {
  ActionIcon,
  BackgroundImage,
  Container,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useHover, useToggle } from "@mantine/hooks";
import {
  IconAddressBook,
  IconBrandLinkedin,
  IconMail,
  IconMailAi,
} from "@tabler/icons-react";
import React, { useEffect } from "react";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",

    aspectRatio: "4/5",
    width: "min(250px, 100%)",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3],
    overflow: "hidden",
  },
  expandPic: {
    transform: "scale(1.1)",
  },
  pic: {
    position: "relative",
    transformOrigin: "center",
    transform: "scale(1)",
    height: "100%",
    transition: "transform 400ms ease",
  },
  nameplate: {
    position: "absolute",
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",

    width: "80%",
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.gray[9]
    }`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
  },
  name: {
    fontWeight: 600,
  },
  toggleInfo: {
    position: "absolute",
    top: "2.5%",
    right: "2.5%",
    transition: "all 300ms ease",
    transform: "rotateY(90deg)",
    zIndex: 2,
  },
  shown: {
    transform: "rotateY(0deg)",
  },
  infoCard: {
    position: "absolute",
    top: "2.5%",
    right: "2.5%",
    transition: "all 300ms ease",
    transform: "rotateY(90deg)",
    zIndex: 1,
  },
  emailExpand: {
    top: "5.5%",
    right: "17.5%",
    transform: "rotateY(0deg)",
  },
  linkedInExpand: {
    top: "14.5%",
    right: "2.5%",
    transform: "rotateY(0deg)",
  },
}));

function HeadShotCard({
  name,
  title,
  src,
  email,
  linkedin,
  bg,
}: HeadShotCardProps) {
  const { classes, cx } = useStyles();
  const { hovered, ref: cardRef } = useHover();
  const [value, toggle] = useToggle([false, true] as const);
  const theme = useMantineTheme();
  
  useEffect(() => {
    if (!hovered) {
      toggle(false);
    }
  }, [hovered, toggle]);

  return (
    <Paper
      ref={cardRef}
      radius={0}
      className={cx(classes.card)}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <BackgroundImage
        className={cx(classes.pic, { [classes.expandPic]: hovered })}
        src={src}
      />
      <Paper radius="xl" className={classes.nameplate}>
        <Stack align="center" spacing={0}>
          <Text size="md" className={classes.name}>
            {name}
          </Text>
          <Text size="xs" style={{ transform: "translateY(-25%)" }}>
            {title}
          </Text>
        </Stack>
      </Paper>
      <ActionIcon
        className={cx(classes.toggleInfo, { [classes.shown]: hovered })}
        color={theme.colorScheme === "dark" ? "indigo.2" : "indigo.6"}
        radius="xl"
        variant="light"
        onClick={() => toggle()}
      >
        <IconAddressBook size={20} />
      </ActionIcon>
      <ActionIcon
        className={cx(classes.infoCard, { [classes.emailExpand]: value })}
        color={theme.colorScheme === "dark" ? "red.2" : "red.6"}
        size="lg"
        radius="xl"
        variant="light"
        component="a"
        href={`mailto:${email}`}
      >
        <IconMail size={24} />
      </ActionIcon>
      <ActionIcon
        className={cx(classes.infoCard, { [classes.linkedInExpand]: value })}
        color={theme.colorScheme === "dark" ? "blue.2" : "blue.6"}
        size="lg"
        radius="xl"
        variant="light"
        component="a"
        href={linkedin}
      >
        <IconBrandLinkedin size={24} />
      </ActionIcon>
    </Paper>
  );
}

export default HeadShotCard;

interface HeadShotCardProps {
  name: string;
  title: string;
  src: string;
  email: string;
  linkedin: string;
  bg: string;
}
