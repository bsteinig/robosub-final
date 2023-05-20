import {
  Icon,
  IconBuildingSkyscraper,
  IconCameraCode,
  IconInfoSquareRounded,
  IconMailAi,
  IconRobot,
} from "@tabler/icons-react";

interface dataItem {
  label: string;
  href: string;
  icon: Icon;
  links?: Array<{ label: string; link: string }>;
}

interface dataList extends Array<dataItem> {}

export const data: dataList = [
  {
    label: "About",
    href: "/about",
    icon: IconInfoSquareRounded,
    links: [
      { label: "Who We Are", link: "/about" },
      { label: "Our Team", link: "/about/the-team" },
      { label: "Progress", link: "/progress"},
    ],
  },
  {
    label: "Technical",
    href: "/vehicles",
    icon: IconRobot,
    links: [
      { label: "Erie 2022", link: "/erie" },
      { label: "Huron 2021", link: "/huron" },
      { label: "Blue ROV 2020", link: "/bluerov" },
    ],
  },
  {
    label: "Library",
    href: "/library",
    icon: IconCameraCode,
    links: [
      { label: "Media", link: "/media" },
      { label: "Documentation", link: "/documentation" },
    ],
  },
  {
    label: "Sponsors",
    href: "/sponsors",
    icon: IconBuildingSkyscraper,
  },
  { label: "Contact", href: "/contact", icon: IconMailAi },
];
