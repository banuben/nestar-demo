import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Agent: NextPage = () => {
  console.log("Agent COMPONENT - PAGES ROUTER");

  const [title, setTitle] = useState<string>("hello");

  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">Agent</Stack>
    </div>
  );
};

export default withLayoutBasic(Agent);
