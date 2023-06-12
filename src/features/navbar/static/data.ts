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
  href?: string;
  icon: Icon;
  links?: Array<{ label: string; link: string }>;
}

interface dataList extends Array<dataItem> { }

export const data: dataList = [
  {
    label: "About",
    icon: IconInfoSquareRounded,
    links: [
      { label: "Who We Are", link: "/about" },
      { label: "Our Team", link: "/about/the-team" },
      { label: "Progress", link: "/about/progress" },
    ],
  },
  {
    label: "Technical",
    icon: IconRobot,
    links: [
      { label: "Erie 2022", link: "/vehicles/erie" },
      { label: "Huron 2021", link: "/vehicles/huron" },
    ],
  },
  {
    label: "Library",
    icon: IconCameraCode,
    links: [
      { label: "Media", link: "/library/media" },
      { label: "Documentation", link: "/library/documentation" },
    ],
  },
  {
    label: "Sponsors",
    href: "/sponsors",
    icon: IconBuildingSkyscraper,
  },
  { label: "Contact", href: "/contact", icon: IconMailAi },
];
