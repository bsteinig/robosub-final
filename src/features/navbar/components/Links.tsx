import { useState } from "react";
import {
  Group,
  Box,
  Text,
  UnstyledButton,
  createStyles,
  Menu,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.radius.md,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[0]
          : theme.colors.dark[7],
    },
  },

  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).color,
    },
  },

  chevron: {
    transition: "transform 200ms ease",
  },
  menuDropdown: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    backdropFilter: "blur(30px)",
    border: "none !important",
    borderRadius: theme.radius.md,

    "&>a": {
      border: "none !important",
      borderRadius: theme.radius.md,
    },
  },
}));

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  active,
  href,
}: LinksGroupProps) {
  const { classes, theme, cx } = useStyles();

  const mobileView = useMediaQuery("(max-width: 800px)");

  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = IconChevronRight;

  const items = (hasLinks ? links : []).map((link) => (
    <Menu.Item key={link.label}>
      <Text
        component={Link}
        className={classes.link}
        href={link.link}
        lineClamp={2}
      >
        {link.label}
      </Text>
    </Menu.Item>
  ));

  return (
    <Menu
      classNames={{ dropdown: classes.menuDropdown }}
      trigger={ mobileView ? "click" : "hover" }
      shadow="md"
      offset={mobileView ? 5 : 20}
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.control, { [classes.active]: active })}
          component={Link}
          href={href}
        >
          <Group position="apart" spacing={0}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>{label}</Box>
            </Box>
            {hasLinks && (
              <ChevronIcon
                className={classes.chevron}
                size={14}
                stroke={1.5}
                style={{
                  transform: opened
                    ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                    : "none",
                  transition: "transform 200ms ease",
                }}
              />
            )}
          </Group>
        </UnstyledButton>
      </Menu.Target>
      {hasLinks && <Menu.Dropdown>{hasLinks ? items : null}</Menu.Dropdown>}
    </Menu>
  );
}

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: Array<{ label: string; link: string }>;
  active?: boolean;
  href: string;
}
