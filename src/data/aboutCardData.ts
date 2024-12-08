type AboutCardData = {
  bgColor: string;
  cardTitle: string;
  cardText: string;
  buttonText: string;
  buttonColor: string;
  hoverColor: string;
  cardHref?: string;
  isModal: boolean;
};

// Structured data for cards
export const aboutCardData: AboutCardData[] = [
  {
    bgColor: "bg-desk-orange",
    cardTitle: "Why we do it",
    cardText: "To help brands resonate <br /> in a fast-changing world.",
    buttonText: "Read our manifesto",
    buttonColor: "group-hover:bg-desk-white",
    hoverColor: "group-hover:text-desk-orange",
    isModal: true,
  },
  {
    bgColor: "bg-desk-blue",
    cardTitle: "What we do",
    cardText: "We craft strategies that <br /> make brands unforgettable.",
    buttonText: "See our work",
    buttonColor: "group-hover:bg-desk-white",
    hoverColor: "group-hover:text-desk-blue",
    cardHref: "/deskreview/work",
    isModal: false,
  },
  {
    bgColor: "bg-desk-brown",
    cardTitle: "Who we do it for",
    cardText: "For brands seeking <br /> meaningful connections.",
    buttonText: "See who we've worked with",
    buttonColor: "group-hover:bg-desk-white",
    hoverColor: "group-hover:text-desk-brown",
    cardHref: "/deskreview/clients",
    isModal: true,
  },
  {
    bgColor: "bg-desk-gray-700",
    cardTitle: "How we do it",
    cardText: "By combining strategy with <br /> creativity to inspire belief.",
    buttonText: "See our services",
    buttonColor: "group-hover:bg-desk-white",
    hoverColor: "group-hover:text-desk-gray-700",
    isModal: true,
  },
];