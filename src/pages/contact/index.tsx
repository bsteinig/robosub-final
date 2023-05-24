import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Avatar,
  Center,
  Chip,
  Container,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
  UnstyledButton,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { gradientAnimation } from "@/components/keyframes/animatedText";
import { useInterval } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { IconArrowUpRight } from "@tabler/icons-react";
import Markers from "@/features/googleMaps/markers";
import { Parallax } from "react-scroll-parallax";

const useStyles = createStyles((theme) => ({
  main: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    width: "100%",
    zIndex: 1,
    paddingTop: 180,

    boxShadow: "0px 15px 50px 0px rgb(10 10 10 / 50%)",
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
  },
  headline: {
    fontSize: "8vmin",
    fontWeight: 500,
    width: "100%",
    lineHeight: 1,
  },
  gradient: {
    background: `linear-gradient(130deg, ${theme.colors.blue[6]} 0%, ${theme.colors.teal[6]} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "200% auto",
    backgroundClip: "text",
    textFillColor: "transparent",
    animation: `${gradientAnimation} 1s ease infinite`,
  },
  slashWrapper: {
    transform: "translateY(2.2vmin)",
    position: "relative",
    display: "inline-block",
    width: "min(52vmin, 100%)",
    height: "10vmin",
    fontSize: 0,
    whiteSpace: "nowrap",
    marginLeft: "auto",
    marginRight: "auto",
  },
  spacer: {
    display: "inline-block",
    width: 10,
  },
  slashText: {
    lineHeight: 1.2,
    fontFamily: theme.headings.fontFamily,
    fontWeight: 500,
    fontSize: "8vmin",
    display: "inline-block",
    backgroundImage: `linear-gradient(to right, transparent , ${theme.fn.rgba(
      theme.colors.blue[5],
      0.33
    )})`,
    height: "100%",
    width: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    transition: "width 1s",
  },
  titleVisible: {
    width: "100%",
  },
  slashSlider: {
    display: "inline-block",
    width: "10px",
    height: "100%",
    backgroundColor: theme.colors.blue[6],
    transform: "skew(-5deg) translateX(-5px) scaleY(1.1)",
    borderRadius: "5px",
  },
  formLabel: {
    fontWeight: 400,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
        : theme.colors.gray[9],
  },
  avatarColor: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.white : theme.colors.gray[9],
  },
  submitBtn: {
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    transition: "transform 100ms ease",
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
    "&:active": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
      transform: "translateY(2px)",
    },
  },
  svgWrapper: {
    position: "relative",
    width: "100vw",
    aspectRatio: "16/4",
  },
  svgBorder: {
    position: "absolute",
    display: "block",
    top: "0",
    left: "0",

    fill: "none",
    width: "100%",
    height: "auto",
    zIndex: 2,
  },
  infoBox: {
    backgroundColor: theme.colors.blue[8],
    transform: "translateY(-5.5vh)",
    padding: theme.spacing.md,
    zIndex: 1,

    "&:after": {
      content: '""',
      position: "absolute",
      top: "99%",
      left: 0,
      width: "100%",
      height: "6vh",
      backgroundColor: theme.colors.blue[8],
    },
  },
  teamInfo: {
    position: "relative",
    zIndex: 1,
    background: "rgba( 255, 255, 255, 0.2 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 200px )",

    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
}));

function Contact() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const [splash, setSplash] = useState(true);
  const [slash, setSlash] = useState(1);
  const slashInterval = useInterval(() => {
    setSlash((c) => (c + 1) % 12);
  }, 1000);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
    slashInterval.start();
    return slashInterval.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  interface InterestChipProps {
    label: string;
    value: string;
  }

  const interestChips: InterestChipProps[] = [
    {
      label: "Projects",
      value: "project",
    },
    {
      label: "Sponsorship",
      value: "sponsorship",
    },
    {
      label: "Resources",
      value: "resources",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  const form = useForm({
    initialValues: {
      interest: "",
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) => (value.trim().length > 0 ? null : "required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <main className={classes.main}>
      <Container p={0} size="md">
        <Center style={{ transform: "translatex(8.5%)" }}>
          <Title className={classes.headline}>
            <Text color="blue.6" span inherit>
              Hey!
            </Text>{" "}
            Let&apos;s chat
            <br /> about{" "}
            <div className={classes.slashWrapper}>
              <Text
                className={cx(classes.slashText, {
                  [classes.titleVisible]: [1, 2, 3].includes(slash),
                })}
                span
              >
                our projects
                <span className={classes.spacer} />
              </Text>
              <Text
                className={cx(classes.slashText, {
                  [classes.titleVisible]: [5, 6, 7].includes(slash),
                })}
                span
              >
                sponsorship
                <span className={classes.spacer} />
              </Text>
              <Text
                className={cx(classes.slashText, {
                  [classes.titleVisible]: [9, 10, 11].includes(slash),
                })}
                span
              >
                anything 😊
                <span className={classes.spacer} />
              </Text>
              <span className={classes.slashSlider} />
            </div>
          </Title>
        </Center>

        <Container mt={60} size="sm">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Text className={classes.formLabel} size="lg">
              I&apos;m interested in:
            </Text>
            <Chip.Group multiple={false} {...form.getInputProps("interest")}>
              <Group mt={30}>
                {interestChips.map((chip) => (
                  <Chip
                    key={chip.value}
                    value={chip.value}
                    variant="filled"
                    size="lg"
                  >
                    {chip.label}
                  </Chip>
                ))}
              </Group>
            </Chip.Group>
            <Divider variant="solid" my={40} />
            <TextInput
              {...form.getInputProps("name")}
              label={
                <Text className={classes.formLabel} size="lg">
                  Whats your name?
                </Text>
              }
              placeholder="Full name"
              variant="unstyled"
              size="lg"
            />
            <Divider variant="solid" my={40} />
            <TextInput
              {...form.getInputProps("email")}
              label={
                <Text className={classes.formLabel} size="lg">
                  Your email?
                </Text>
              }
              placeholder="Email address"
              variant="unstyled"
              size="lg"
            />
            <Divider variant="solid" my={40} />
            <Textarea
              {...form.getInputProps("message")}
              label={
                <Text className={classes.formLabel} size="lg">
                  Type your message here
                </Text>
              }
              placeholder="Your comment"
              variant="unstyled"
              size="lg"
              autosize
              minRows={2}
              maxRows={4}
            />
            <UnstyledButton mt={40} type="submit">
              <Group className={classes.submitBtn}>
                <Avatar
                  size="lg"
                  radius="xl"
                  classNames={{ placeholder: classes.avatarColor }}
                >
                  <IconArrowUpRight
                    size={30}
                    color={
                      theme.colorScheme === "dark" ? theme.black : theme.white
                    }
                  />
                </Avatar>
                <Text size="xl">Submit</Text>
              </Group>
            </UnstyledButton>
          </form>
        </Container>
      </Container>
      <div className={classes.svgWrapper}>
        <svg
          id="visual"
          viewBox="0 0 1800 450"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className={classes.svgBorder}
        >
          <path
            d="M0 217L30.3 215.7C60.7 214.3 121.3 211.7 182 199C242.7 186.3 303.3 163.7 363.8 169.7C424.3 175.7 484.7 210.3 545.2 212.3C605.7 214.3 666.3 183.7 727 174.3C787.7 165 848.3 177 909 184.3C969.7 191.7 1030.3 194.3 1091 207C1151.7 219.7 1212.3 242.3 1273 233C1333.7 223.7 1394.3 182.3 1454.8 159C1515.3 135.7 1575.7 130.3 1636.2 134.3C1696.7 138.3 1757.3 151.7 1818 163.7C1878.7 175.7 1939.3 186.3 1969.7 191.7L2000 197L2000 159L1969.7 147C1939.3 135 1878.7 111 1818 94.3C1757.3 77.7 1696.7 68.3 1636.2 64.3C1575.7 60.3 1515.3 61.7 1454.8 89C1394.3 116.3 1333.7 169.7 1273 184.3C1212.3 199 1151.7 175 1091 153C1030.3 131 969.7 111 909 102.3C848.3 93.7 787.7 96.3 727 105C666.3 113.7 605.7 128.3 545.2 121.7C484.7 115 424.3 87 363.8 83.7C303.3 80.3 242.7 101.7 182 117C121.3 132.3 60.7 141.7 30.3 146.3L0 151Z"
            fill="#4DABF7"
          ></path>
          <path
            d="M0 277L30.3 278.3C60.7 279.7 121.3 282.3 182 269C242.7 255.7 303.3 226.3 363.8 224.3C424.3 222.3 484.7 247.7 545.2 249C605.7 250.3 666.3 227.7 727 228.3C787.7 229 848.3 253 909 263C969.7 273 1030.3 269 1091 271.7C1151.7 274.3 1212.3 283.7 1273 270.3C1333.7 257 1394.3 221 1454.8 206.3C1515.3 191.7 1575.7 198.3 1636.2 201.7C1696.7 205 1757.3 205 1818 213C1878.7 221 1939.3 237 1969.7 245L2000 253L2000 195L1969.7 189.7C1939.3 184.3 1878.7 173.7 1818 161.7C1757.3 149.7 1696.7 136.3 1636.2 132.3C1575.7 128.3 1515.3 133.7 1454.8 157C1394.3 180.3 1333.7 221.7 1273 231C1212.3 240.3 1151.7 217.7 1091 205C1030.3 192.3 969.7 189.7 909 182.3C848.3 175 787.7 163 727 172.3C666.3 181.7 605.7 212.3 545.2 210.3C484.7 208.3 424.3 173.7 363.8 167.7C303.3 161.7 242.7 184.3 182 197C121.3 209.7 60.7 212.3 30.3 213.7L0 215Z"
            fill="#339AF0"
          ></path>
          <path
            d="M0 365L30.3 362.3C60.7 359.7 121.3 354.3 182 349.7C242.7 345 303.3 341 363.8 340.3C424.3 339.7 484.7 342.3 545.2 343C605.7 343.7 666.3 342.3 727 346.3C787.7 350.3 848.3 359.7 909 365.7C969.7 371.7 1030.3 374.3 1091 375C1151.7 375.7 1212.3 374.3 1273 371.7C1333.7 369 1394.3 365 1454.8 360.3C1515.3 355.7 1575.7 350.3 1636.2 346.3C1696.7 342.3 1757.3 339.7 1818 344.3C1878.7 349 1939.3 361 1969.7 367L2000 373L2000 251L1969.7 243C1939.3 235 1878.7 219 1818 211C1757.3 203 1696.7 203 1636.2 199.7C1575.7 196.3 1515.3 189.7 1454.8 204.3C1394.3 219 1333.7 255 1273 268.3C1212.3 281.7 1151.7 272.3 1091 269.7C1030.3 267 969.7 271 909 261C848.3 251 787.7 227 727 226.3C666.3 225.7 605.7 248.3 545.2 247C484.7 245.7 424.3 220.3 363.8 222.3C303.3 224.3 242.7 253.7 182 267C121.3 280.3 60.7 277.7 30.3 276.3L0 275Z"
            fill="#228BE6"
          ></path>
          <path
            d="M0 401L30.3 401C60.7 401 121.3 401 182 401C242.7 401 303.3 401 363.8 401C424.3 401 484.7 401 545.2 401C605.7 401 666.3 401 727 401C787.7 401 848.3 401 909 401C969.7 401 1030.3 401 1091 401C1151.7 401 1212.3 401 1273 401C1333.7 401 1394.3 401 1454.8 401C1515.3 401 1575.7 401 1636.2 401C1696.7 401 1757.3 401 1818 401C1878.7 401 1939.3 401 1969.7 401L2000 401L2000 371L1969.7 365C1939.3 359 1878.7 347 1818 342.3C1757.3 337.7 1696.7 340.3 1636.2 344.3C1575.7 348.3 1515.3 353.7 1454.8 358.3C1394.3 363 1333.7 367 1273 369.7C1212.3 372.3 1151.7 373.7 1091 373C1030.3 372.3 969.7 369.7 909 363.7C848.3 357.7 787.7 348.3 727 344.3C666.3 340.3 605.7 341.7 545.2 341C484.7 340.3 424.3 337.7 363.8 338.3C303.3 339 242.7 343 182 347.7C121.3 352.3 60.7 357.7 30.3 360.3L0 363Z"
            fill="#1971C2"
          ></path>
        </svg>
      </div>
      <Container size="fluid" className={classes.infoBox} pt={60}>
        <Container size="lg">
          <Group mb={30} position="apart">
            <Stack spacing={0} style={{ textAlign: "center" }}>
              <Title order={5} color="gray.1" style={{ fontWeight: 500 }}>
                email:{" "}
              </Title>
              <Text
                color="gray.1"
                size="lg"
                style={{ width: "100%", wordBreak: "break-word" }}
              >
                MichiganRoboticSubmarine@gmail.com
              </Text>
            </Stack>
            <Stack spacing={0} style={{ textAlign: "center" }}>
              <Title order={5} color="gray.1" style={{ fontWeight: 500 }}>
                workspace:{" "}
              </Title>
              <Text color="gray.1" size="lg">
                Wilson Student Project Center 2603 Draper Dr. Ann Arbor, MI
                48109
              </Text>
            </Stack>
          </Group>
          <Markers />
        </Container>
      </Container>
    </main>
  );
}

export default Contact;
