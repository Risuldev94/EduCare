import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.location.replace("/educare.html");
  }, []);
  return null;
}
