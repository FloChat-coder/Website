import Grid from '@mui/material/Grid';
import TopCard from './TopCard';

const cardsData = [
  {
    id: 1,
    title: 'Total Conversations',
    value: '1,245',
    rate: '12.5%',
    isUp: true,
    icon: 'mingcute:chat-4-fill', // Chat icon
  },
  {
    id: 2,
    title: 'Leads Captured',
    value: '342',
    rate: '8.2%',
    isUp: true,
    icon: 'mingcute:user-add-fill', // User add icon
  },
  {
    id: 3,
    title: 'Active Bots',
    value: '3',
    rate: '0%',
    isUp: false,
    icon: 'mingcute:robot-fill', // Robot icon
  },
  {
    id: 4,
    title: 'API Usage (Tokens)',
    value: '450K',
    rate: '5.3%',
    isUp: true,
    icon: 'mingcute:lightning-fill', // Usage icon
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      {cardsData.map((item) => {
        return (
          <TopCard
            key={item.id}
            title={item.title}
            value={item.value}
            rate={item.rate}
            isUp={item.isUp}
            icon={item.icon}
          />
        );
      })}
    </Grid>
  );
};

export default TopCards;
