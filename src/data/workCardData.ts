import astraHondaImg from "../assets/astra.png";
import rococoImg from "../assets/rococo.png";
import hayatiImg from "../assets/hayati.png";
import salamGaneshaImg from "../assets/ganesha.png";
import telkomselImg from "../assets/telkomsel.png";

type WorkCardData = {
  title: string;
  sector: string;
  image: ImageMetadata;
  year: string;
  description?: string;
  services?: string;
};

export const workCardData: WorkCardData[] = [
  {
    title: "Astra Honda",
    sector: "Vehicle Manufacture",
    image: astraHondaImg,
    year: "2023",
    description:
      "As their effort to gain trust with local wisdom and the spirit of #OneHeart, Honda aims to reach more trust and connection withing Indonesia market.",
    services: "Content research & analytic, digital trend analytic",
  },
  {
    title: "Telkomsel",
    sector: "Telecommunication",
    image: telkomselImg,
    year: "2023",
    description:
      "After their merger with IndiHome, Telkomsel aimed to create a nationwide corporate messaging campaign under #BersatuLebihMaju, resulting in +1 million impression, 20% increase of Engagement Rate, and more than 3000 followers.",
    services:
      "campaign strategy & development, social media strategy, online activation development",
  },
  {
    title: "Salam Ganesha Academy",
    sector: "Education Tech",
    image: salamGaneshaImg,
    year: "2024",
    description:
      "As an education startup, Salam Ganesha Academy transitioned to targeting a more mature senior executive market. Several digital strategies were executed to ensure a smooth transition.",
    services:
      "campaign strategy & development, social media development, kol management",
  },
  {
    title: "Rococo Group",
    sector: "Luxury Fashion Retail",
    image: rococoImg,
    year: "2023",
    description:
      "Rococo Group Indonesia is a luxury fashion retailer established in 2000, focusing on high-end fashion brands with partners from Italy, UK, and Hongkong.",
    services:
      "campaign strategy & development, social media development, kol management",
  },
  {
    title: "Hayati Karya",
    sector: "Carbon Trading",
    image: hayatiImg,
    year: "2023",
    description:
      "Hayati Karya Lestari is a global carbon trading corporation with various business line, launching in Indonesia with the vision to create sustainable future for Indonesia.",
    services: "Branding strategy, social media & website, brand architecture",
  },
];
