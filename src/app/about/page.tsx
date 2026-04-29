import { type Metadata } from "next";
import AboutPageContent from "./inside";

/*
  metadata works only in server components
  that's why we have to split the page into two files
*/

export const metadata: Metadata = {
  title: "About | YeahApp",
  description:
    "Learn about the team behind YeahApp — community builders building tools for community builders.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
