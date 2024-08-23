import { Box } from "@mui/material";
import Header from "../components/Header";
import PieChart from "../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px" py="20px">
      <Header title="ፓይ ቻርት" subtitle="ቀላል ፓይ ቻርት" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
