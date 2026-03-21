"use client";

import {
  createContext,
  useContext,
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
  isLoading: false,
  price: "$90",
  buyLink: "https://buy.stripe.com/cNiaEY3Q35sNcTz9BseME00",
});

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({
  children,
  countryCode,
}: {
  children: ReactNode;
  countryCode?: string | null;
}) {
  const isIndia = countryCode?.toUpperCase() === "IN";
  const isLoading = false;
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
