import { Box } from "@mui/material";
import Header from "../components/Header";
import BarChart from "../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px" py="20px">
      <Header title="የባር ቻር" subtitle="ቀላል የባር ቻር" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
