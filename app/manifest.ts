import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jafar Madadi - Senior Software Engineer & Software Architect",
    short_name: "Jafar Madadi",
    description: "Professional portfolio of Jafar Madadi.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
  };
}
