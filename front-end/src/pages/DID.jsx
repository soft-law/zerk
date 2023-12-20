"use client";
import { useEffect, useState } from "react";
import DID from "../../components/Dashboard";

// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return <DID />;
  } else {
    ("Not Working");
  }
}
