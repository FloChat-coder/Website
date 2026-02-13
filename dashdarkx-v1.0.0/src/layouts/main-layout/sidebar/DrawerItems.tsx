import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Image from 'components/base/Image';
import IconifyIcon from 'components/base/IconifyIcon';
import CollapseListItem from './list-items/CollapseListItem';
import ProfileListItem from './list-items/ProfileListItem';
import ListItem from './list-items/ListItem';
import LogoImg from 'assets/images/Logo.png';
import { topListData, bottomListData, profileListData } from 'data/sidebarListData';

const DrawerItems = () => {
  return (
    <>
      <Stack
        pt={5}
        pb={4}
        px={3.5}
        position={'sticky'}
        top={0}
        bgcolor="info.darker"
        alignItems="center"
        justifyContent="flex-start"
        zIndex={1000}
      >
        <ButtonBase component={Link} href="/" disableRipple>
          <Image src={LogoImg} alt="logo" height={24} width={24} sx={{ mr: 1 }} />
          <Typography variant="h5" color="text.primary" fontWeight={600} letterSpacing={1}>
            FloChat
          </Typography>
        </ButtonBase>
      </Stack>

      <Box px={3.5} pb={3} pt={1}>
        <TextField
          variant="filled"
          placeholder="Search..."
          sx={{ width: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconifyIcon icon={'mingcute:search-line'} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* --- THE FIX IS HERE --- */}
      <List component="nav" sx={{ px: 2.5 }}>
        {topListData.map((route, index) => {
          // If the item has a sub-menu (items), render the Collapsible component
          if (route.items) {
            return <CollapseListItem key={route.id || index} {...route} />;
          }
          // Otherwise, render the standard Link component
          return <ListItem key={route.id || index} {...route} />;
        })}
      </List>
      {/* ----------------------- */}

      <Divider />

      <List component="nav" sx={{ px: 2.5 }}>
        {bottomListData.map((route, index) => {
          if (route.items) {
            return <CollapseListItem key={route.id || index} {...route} />;
          }
          return <ListItem key={route.id || index} {...route} />;
        })}
      </List>

      <List component="nav" sx={{ px: 2.5 }}>
        {profileListData && <ProfileListItem {...profileListData} />}
      </List>

      <Box px={3.5} py={6} width={1}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="https://flochat.com/docs"
          target="_blank"
          endIcon={<IconifyIcon icon="mingcute:arrow-right-line" />}
          sx={{ width: 1 }}
        >
          Documentation
        </Button>
      </Box>
    </>
  );
};

export default DrawerItems;