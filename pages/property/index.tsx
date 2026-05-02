import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import {
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  console.log("PROPERTY COMPONENT -PAGES ROUTER");
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">PROPERTY LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
