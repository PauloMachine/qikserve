import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { ThemeProvider } from "styled-components";
import { ITheme } from "./layout.types";
import type { IVenue } from "src/features/venue/venue.types";
import { useTranslation } from "react-i18next";

const defaultTheme: ITheme = {
  locale: "pt-BR",
  ccy: "BRL",
  webSettings: {
    bannerImage: "/images/bannerNotFound.avif",
    backgroundColour: "#ffffff",
    primaryColour: "#4f372f",
    primaryColourHover: "#4f372f",
    navBackgroundColour: "#4f372f",
  },
};

const LayoutContext = createContext<{
  theme: ITheme | null;
  isMobile: boolean;
  translation: any;
  setTheme: (theme: IVenue) => void;
  useFormatMoney: (value: number) => string;
} | null>(null);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const { t: translation, i18n } = useTranslation();
  const [theme, setThemeState] = useState<ITheme>(defaultTheme);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 600,
  });

  const setTheme = useCallback((venue: IVenue) => {
    setThemeState({
      webSettings: venue.webSettings,
      locale: venue.locale,
      ccy: venue.ccy,
    });
  }, []);

  const useFormatMoney = (value: number) => {
    const { locale, ccy } = theme || {};

    const formatter = useMemo(() => {
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: ccy,
      });
    }, [locale, ccy]);

    return formatter.format(value);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 600,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const { locale } = theme || {};
    if (locale) i18n.changeLanguage(locale);
  }, [i18n, theme]);

  return (
    <LayoutContext.Provider
      value={{
        theme,
        setTheme,
        useFormatMoney,
        isMobile: windowSize.isMobile,
        translation,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
