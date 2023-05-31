import {
  ActionIcon,
  Burger,
  Code,
  createStyles,
  Group,
  MediaQuery,
  Navbar,
  Paper,
  Stack,
  Text,
  TextInput,
  Transition,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import { IconSearch, IconSun, IconMoonStars } from "@tabler/icons-react";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useSessionStorage } from "@mantine/hooks";
import { LinksGroup } from "./components/Links";
import { data } from "./static/data";

const useStyles = createStyles((theme) => ({
  root: {
    zIndex: 1000,
    top: 30,
    left: "50%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.dark[9], 0.55)
        : theme.fn.rgba(theme.colors.gray[0], 0.53),
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.md,
    backdropFilter: "blur(30px)",
    border: `2px solid ${theme.colorScheme === "dark" ? theme.white : theme.colors.gray[2]
      }`,
    transform: "translateX(-50%)",

    transition: "all 0.35s ease",

    position: "relative",
  },
  mobileMenu: {
    position: "absolute",
    top: '100%',
    left: 0,

    width: "100%",
    height: 0,
    overflow: "hidden",
    transition: 'height 0.3s ease',

    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.dark[9], 0.85)
        : theme.fn.rgba(theme.colors.gray[0], 0.85),
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.md,
    backdropFilter: "blur(30px)",
    border: `2px solid ${theme.colorScheme === "dark" ? theme.white : theme.colors.gray[2]}`,
    padding: theme.spacing.md,
  },
  expanded: {
    justifyContent: "space-between",
    left: "50%",
  },

  linkText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? "#ebebeb" : theme.colors.gray[7],
    fontWeight: 600,
    "&:hover": {
      transform: "translateY(2px) scale(0.98)",
      boxShadow: theme.shadows.sm,
      backgroundColor: theme.colors.gray,
    },
  },

  expand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchCode: {
    fontWeight: 700,
    fontSize: 10,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,
  },
  searchLarge: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.dark[7], 0.65)
        : theme.fn.rgba(theme.colors.gray[2], 0.65),
    borderRadius: theme.radius.md,
    padding: theme.spacing.xs,
  },
}));

function Nav({ borderColor = "white" }) {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const [scroll, scrollTo] = useWindowScroll();
  const router = useRouter();

  const [expanded, setExpanded] = useState(true);

  const [loaded, setLoaded] = useSessionStorage({
    key: "nav-loaded",
    defaultValue: false,
  });

  const searchIcon = useMediaQuery("(max-width: 860px)");

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleMobileToggle = () => {
    const scrollState = mobileOpen ? "visible" : "hidden";
    document.body.style.overflow = scrollState;
    setMobileOpen(!mobileOpen);
  }

  // set loaded to true after 1 second
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
      console.log("loaded");
    }, 1000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // set expanded to false if the user scrolls down, and true if they scroll up
  useEffect(() => {
    let lastScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos > lastScrollPos) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
      lastScrollPos = scrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = data.map((item, index) => (
    <LinksGroup {...item} key={item.label} setMobileOpen={setMobileOpen} />
  ));

  return (
    <MediaQuery smallerThan={1000} styles={{ width: `${expanded ? "95vw" : "60px"} !important` }}>
      <div
        style={{
          height: expanded ? 70 : 60,
          position: "fixed",
          padding: expanded ? theme.spacing.sm : 0,
          width: expanded ? "80vw" : "60px",
        }}
        className={
          classes.root +
          " " +
          (expanded ? classes.expanded : "") +
          " navbar-animation "
        }
      >
        {expanded && (
          <MediaQuery largerThan={700} styles={{ display: 'none' }}>
            <Burger opened={mobileOpen} onClick={() => handleMobileToggle()} aria-label="Open Menu" />
          </MediaQuery>
        )}
        <UnstyledButton
          className={classes.expand}
          onClick={() => {
            if (expanded) {
              console.log(router.pathname);
              router.pathname === "/" ? scrollTo({ y: 0 }) : router.push("/");
            } else setExpanded(!expanded);
          }}
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
            fill={colorScheme === "dark" ? "#ebebeb" : "#111"}
          >
            <path d="m19,2.6l-7,4.9L5,2.6H0v18.8h5.8v-10.7l6.2,4.1,6.2-4.1v10.7h5.8V2.6h-5Zm-7,10l-7.5-5.4c.5.2,2.9,1.7,2.9,1.7,0,0,1.5.8,3.2,1.6,1.3.6,1.5.9,1.5,1,0,0,.2-.3,1.5-1,1.7-.8,3.2-1.6,3.2-1.6,0,0,2.3-1.5,2.9-1.7l-7.5,5.4Z" />
          </svg>
        </UnstyledButton>
        {expanded && (
          <>
            <MediaQuery smallerThan={700} styles={{ display: 'none' }}>
              <Navbar.Section grow>
                <Group px="sm" noWrap>
                  {links}
                </Group>
              </Navbar.Section>
            </MediaQuery>
            {searchIcon ? (
              <ActionIcon
                title="Search"
                ml="sm"
                size="md"
                radius="xl"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : theme.colors.gray[2],
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.gray[0]
                      : theme.colors.blue[6],
                })}
              >
                <IconSearch size={16} />
              </ActionIcon>
            ) : (
              <UnstyledButton className={classes.searchLarge}>
                <Group position="apart" noWrap>
                  <Group mr={20} spacing={5} noWrap>
                    <IconSearch size={14} stroke={2} />
                    <Text size="sm">Search</Text>
                  </Group>
                  <Code className={classes.searchCode}>ctrl + K</Code>
                </Group>
              </UnstyledButton>
            )}
            <MediaQuery smallerThan={700} styles={{ display: 'none' }}>
              <ActionIcon
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
                ml="sm"
                size="md"
                radius="xl"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : theme.colors.gray[2],
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.yellow[4]
                      : theme.colors.blue[6],
                })}
              >
                {colorScheme === "dark" ? (
                  <IconSun size={18} />
                ) : (
                  <IconMoonStars size={18} />
                )}
              </ActionIcon>
            </MediaQuery>
          </>
        )}
        <Transition mounted={mobileOpen} transition="scale-y" duration={400} timingFunction="ease">
          {(styles) =>
            <Paper className={classes.mobileMenu} style={{ height: 'auto', ...styles }}>
              <Stack spacing="md">
                {links}
              </Stack>
              <Group pt="md" position="right">
                <ActionIcon
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                  ml="sm"
                  size="md"
                  radius="xl"
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[2],
                    color:
                      theme.colorScheme === "dark"
                        ? theme.colors.yellow[4]
                        : theme.colors.blue[6],
                  })}
                >
                  {colorScheme === "dark" ? (
                    <IconSun size={18} />
                  ) : (
                    <IconMoonStars size={18} />
                  )}
                </ActionIcon>
              </Group>
            </Paper>}
        </Transition>

      </div>
    </MediaQuery>
  );
}

export default Nav;
