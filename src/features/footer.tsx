import {
  createStyles,
  Group,
  ActionIcon,
  Image,
  UnstyledButton,
} from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.dark[9], 0.42)
        : theme.fn.rgba(theme.colors.gray[0], 0.53),
    position: "sticky",
    bottom: 0,
    left: 0,
    height: "100px",
    width: "100%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing.xl,
    overflow: "hidden",

    [theme.fn.smallerThan("md")]: {
      height: 200,
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      marginTop: theme.spacing.xl,
    },
  },
  invertImage: {
    filter: `invert(${theme.colorScheme === "dark" ? 0 : 1})`,
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <UnstyledButton component="a" href="/">
        <Image
          classNames={{ image: classes.invertImage }}
          src="/logo/namelogoold.png"
          height={50}
          alt="logo"
        />
      </UnstyledButton>

      <Group spacing={0} className={classes.links} noWrap>
        <ActionIcon
          component="a"
          size="lg"
          href="https://www.tiktok.com/@michiganrobosub"
          target="_blank"
        >
          <IconBrandTiktok size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          component="a"
          size="lg"
          href="https://www.youtube.com/@michiganrobosub6930"
          target="_blank"
        >
          <IconBrandYoutube size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          component="a"
          size="lg"
          href="https://www.instagram.com/michiganrobosub"
          target="_blank"
        >
          <IconBrandInstagram size={18} stroke={1.5} />
        </ActionIcon>
      </Group>
    </div>
  );
}
