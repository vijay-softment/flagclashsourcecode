"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface CountryContextType {
  isIndia: boolean;
  isLoading: boolean;
  price: string;
  buyLink: string;
}

const CountryContext = createContext<CountryContextType>({
  isIndia: false,
  isLoading: true,
  price: "$90",
  buyLink: "https://buy.stripe.com/cNiaEY3Q35sNcTz9BseME00",
});

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({ children }: { children: ReactNode }) {
  const [isIndia, setIsIndia] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function detectCountry() {
      try {
        const response = await fetch("http://ip-api.com/json/");
        const data = await response.json();
        setIsIndia(data.countryCode === "IN");
      } catch (error) {
        console.error("Failed to detect country:", error);
        setIsIndia(false);
      } finally {
        setIsLoading(false);
      }
    }

    detectCountry();
  }, []);

  const price = isIndia ? "₹9,000" : "$90";
  const buyLink = isIndia
    ? "https://rzp.io/rzp/8vu5mlt2"
    : "https://buy.stripe.com/cNiaEY3Q35sNcTz9BseME00";

  return (
    <CountryContext.Provider value={{ isIndia, isLoading, price, buyLink }}>
      {children}
    </CountryContext.Provider>
  );
}
