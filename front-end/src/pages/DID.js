"use client";
import { useEffect, useState } from "react";
import DID from "../../components/DID";

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
