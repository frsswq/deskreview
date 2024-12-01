import astraHondaImg from "../assets/astra.png";
import rococoImg from "../assets/rococo.png";
import hayatiImg from "../assets/hayati.png";
import salamGaneshaImg from "../assets/ganesha.png";
import telkomselImg from "../assets/telkomsel.png";

type CardData = {
  title: string;
  description: string;
  image: ImageMetadata;
  year: string;
  modalDescription: string;
  modalServices: string;
};

export const cardData: CardData[] = [
  {
    title: "Astra Honda",
    description: "Vehicle Manufacture",
    image: astraHondaImg,
    year: "2023",
    modalDescription:
      "As their effort to gain trust with local wisdom and the spirit of #OneHeart, Honda aims to reach more trust and connection withing Indonesia market.",
    modalServices: "Content research & analytic, digital trend analytic",
  },
  {
    title: "Telkomsel",
    description: "Telecommunication",
    image: telkomselImg,
    year: "2023",
    modalDescription:
      "After their merger with IndiHome, Telkomsel aimed to create a nationwide corporate messaging campaign under #BersatuLebihMaju, resulting in +1 million impression, 20% increase of Engagement Rate, and more than 3000 followers.",
    modalServices:
      "campaign strategy & development, social media strategy, online activation development",
  },
  {
    title: "Salam Ganesha Academy",
    description: "Education Tech",
    image: salamGaneshaImg,
    year: "2024",
    modalDescription:
      "As an education startup, Salam Ganesha Academy transitioned to targeting a more mature senior executive market. Several digital strategies were executed to ensure a smooth transition.",
    modalServices:
      "campaign strategy & development, social media development, kol management",
  },
  {
    title: "Rococo Group",
    description: "Luxury Fashion Retail",
    image: rococoImg,
    year: "2023",
    modalDescription:
      "Rococo Group Indonesia is a luxury fashion retailer established in 2000, focusing on high-end fashion brands with partners from Italy, UK, and Hongkong.",
    modalServices:
      "campaign strategy & development, social media development, kol management",
  },
  {
    title: "Hayati Karya",
    description: "Carbon Trading",
    image: hayatiImg,
    year: "2023",
    modalDescription:
      "Hayati Karya Lestari is a global carbon trading corporation with various business line, launching in Indonesia with the vision to create sustainable future for Indonesia.",
    modalServices:
      "Branding strategy, social media & website, brand architecture",
  },
];
