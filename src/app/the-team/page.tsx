import { type Metadata } from "next";
import TheTeamPageContent from "./inside";

/*
  metadata works only in server components
  that's why we have to split the page into two files
*/

export const metadata: Metadata = {
  title: "The Team | YeahApp",
  description:
    "Meet the team behind YeahApp — community builders building tools for community builders.",
};

export default function TheTeamPage() {
  return <TheTeamPageContent />;
}
