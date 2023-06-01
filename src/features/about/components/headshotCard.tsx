import {
  ActionIcon,
  BackgroundImage,
  Container,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useHover, useToggle } from "@mantine/hooks";
import { IconUser } from "@tabler/icons-react";
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
    backgroundImage: "url(/headshots/headshotBG.png)",
    backgroundSize: "cover",
    overflow: "hidden",
  },
  expandPic: {
    transform: "scale(1.1)",
    backdropFilter: "blur(2px) brightness(0.8)",
    filter: "brightness(1.2)",
  },
  pic: {
    position: "relative",
    transformOrigin: "center",
    transform: "scale(1)",
    height: "100%",
    transition:
      "transform 400ms ease, filter 200ms ease, backdrop-filter 50ms ease",
  },
  hidePlaceholder: {
    color: "transparent",
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
  picPlaceholder: {
    aspectRatio: "4/5",
    width: "min(250px, 100%)",

    display: "grid",
    placeItems: "center",
    backgroundColor: "#00000033",
    color: "#fff",
  },
}));

function HeadShotCard({
  name,
  title,
  lead,
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
    <Paper ref={cardRef} radius={0} className={cx(classes.card)}>
      <BackgroundImage
        style={{ position: "absolute", top: 0, left: 0, height: "100%" }}
        src={bg}
      />
      <Image
        alt={name}
        withPlaceholder={true}
        className={cx(classes.pic, { [classes.expandPic]: hovered })}
        classNames={{
          image: classes.hidePlaceholder,
          placeholder: classes.picPlaceholder,
        }}
        placeholder={<IconUser color="#fff" size={256} />}
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
        color={theme.colorScheme === "dark" ? "indigo.4" : "indigo.4"}
        radius="xl"
        variant="filled"
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
      {linkedin && (
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
      )}
    </Paper>
  );
}

export default HeadShotCard;

interface HeadShotCardProps {
  name: string;
  title: string;
  lead?: string;
  src: string;
  email: string;
  linkedin: string;
  bg: string;
}
