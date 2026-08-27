export const metaTitle = "Spice Garden Restaurant";
export const metaDesc =
  "Authentic flavors, fresh ingredients, and a warm ambiance. Reserve your table today and enjoy a memorable dining experience.";

export const ogSize = {
  width: 1600,
  height: 800,
};

export const ogImageProps = {
  ...ogSize,
  alt: "Spice Garden Restaurant",
  contentType: "image/png",
};

export const defaultOpenGraph = {
  siteName: "Spice Garden Restaurant",
  images: [
    {
      url: "/images/og.png",
      ...ogImageProps,
    },
  ],
  locale: "en_US",
  type: "website",
};

export const defaultTwitter = {
  card: "summary_large_image",
  images: [
    {
      url: "/images/og.png",
      ...ogImageProps,
    },
  ],
};

export const currentYear = new Date().getFullYear();

export const staggerContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeUpAnimationVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const } },
};