import Grid from '@mui/material/Grid';
import TopCards from 'components/sections/dashboard/top-cards';
import WebsiteVisitors from 'components/sections/dashboard/website-visitors';


const Dashboard = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      {/* Top Summary Cards */}
      <Grid item xs={12}>
        <TopCards />
      </Grid>

      {/* Analytics Chart (Renamed logically to Chat Traffic) */}
      <Grid item xs={12}>
         <WebsiteVisitors /> 
      </Grid>
      
      {/* Add your new sections here later, e.g., <RecentLeadsTable /> */}
    </Grid>
  );
};

export default Dashboard;