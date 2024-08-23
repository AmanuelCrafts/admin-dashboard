import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ዳሽቦርድ" subtitle="ወደ ዳሽቦርድ እንኳን በደህና መጡ" />
      </Box>
    </Box>
  );
};

export default Dashboard;
