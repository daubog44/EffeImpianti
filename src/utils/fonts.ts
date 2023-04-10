import {
  Inter,
  Roboto_Mono,
  Playfair_Display,
  Shantell_Sans,
  Arima,
} from "next/font/google";

const arima = Arima({
  subsets: ["latin"],
  variable: "--font-arima",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const shantell_sans = Shantell_Sans({
  subsets: ["latin"],
  variable: "--font-shantell-sans",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const fonts = { roboto_mono, inter, playfair_display, shantell_sans, arima };

const getStringFonts = () => {
  const stringFonts = Object.values(fonts).reduce(
    (prev, curr) => prev + `${curr.variable} `,
    ""
  );
  return stringFonts;
};

export default getStringFonts();
