import astraHondaImg from "../assets/astra.png";
import rococoImg from "../assets/rococo.png";
import hayatiImg from "../assets/hayati.png";
import salamGaneshaImg from "../assets/ganesha.png";
import telkomselImg from "../assets/telkomsel.png";

// portofolio image
import rococo1 from "../assets/rococo_1.jpg";
import rococo2 from "../assets/rococo_2.jpg";
import rococo3 from "../assets/rococo_3.jpg";
import ganesha1 from "../assets/ganesha_1.jpg";
import ganesha2 from "../assets/ganesha_2.jpg";
import ganesha3 from "../assets/ganesha_3.jpg";
import telkomsel1 from "../assets/telkomsel_1.jpeg";
import telkomsel2 from "../assets/telkomsel_2.jpeg";
import telkomsel3 from "../assets/telkomsel_3.jpeg";
import astra1 from "../assets/astra_1.jpg";
import astra2 from "../assets/astra_2.jpg";
import astra3 from "../assets/astra_3.jpg";

type WorkCardData = {
  title: string;
  sector: string;
  image: ImageMetadata;
  year: string;
  description: string;
  services: string;
  images?: ImageMetadata[];
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
    images: [astra1, astra2, astra3],
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
    images: [telkomsel1, telkomsel2, telkomsel3],
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
    images: [ganesha1, ganesha2, ganesha3],
  },
  {
    title: "Rococo Group Indonesia",
    sector: "Luxury Fashion Retail",
    image: rococoImg,
    year: "2023",
    description:
      "Rococo Group Indonesia is a luxury fashion retailer established in 2000, focusing on high-end fashion brands with partners from Italy, UK, and Hongkong.",
    services:
      "campaign strategy & development, social media development, kol management",
    images: [rococo1, rococo2, rococo3],
  },
  {
    title: "Hayati Karya Lestari",
    sector: "Carbon Trading",
    image: hayatiImg,
    year: "2023",
    description:
      "Hayati Karya Lestari is a global carbon trading corporation with various business line, launching in Indonesia with the vision to create sustainable future for Indonesia.",
    services: "Branding strategy, social media & website, brand architecture",
  },
];
