"use client";
import { useEffect, useState } from "react";
import Landing from "../../components/Landing";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return <Landing />;
  } else {
    ("Not Working");
  }
}
