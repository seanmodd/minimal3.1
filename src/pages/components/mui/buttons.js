import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Tab } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
// routes
// layouts
// components
// sections
import TextButtons from 'src/sections/overview/mui/buttons/TextButtons';
import IconButtons from 'src/sections/overview/mui/buttons/IconButtons';
import ButtonGroups from 'src/sections/overview/mui/buttons/ButtonGroups';
import ToggleButtons from 'src/sections/overview/mui/buttons/ToggleButtons';
import OutlinedButtons from 'src/sections/overview/mui/buttons/OutlinedButtons';
import ContainedButtons from 'src/sections/overview/mui/buttons/ContainedButtons';
import FloatingActionButton from 'src/sections/overview/mui/buttons/FloatingActionButton';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import Page from '../../../components/Page';
import Layout from '../../../layouts';
import { PATH_PAGE } from '../../../routes/paths';

// ----------------------------------------------------------------------

const BUTTONS = [
  { name: 'Contained Buttons', component: <ContainedButtons /> },
  { name: 'Outlined Buttons', component: <OutlinedButtons /> },
  { name: 'TextButtons', component: <TextButtons /> },
  { name: 'Icon Buttons', component: <IconButtons /> },
  { name: 'Floating Action Button', component: <FloatingActionButton /> },
  { name: 'Button Groups', component: <ButtonGroups /> },
  { name: 'Toggle Buttons', component: <ToggleButtons /> },
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

// ----------------------------------------------------------------------

MUIButtons.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function MUIButtons() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page title="Components: Buttons">
      <RootStyle>
        <Box
          sx={{
            pt: 6,
            pb: 1,
            mb: 10,
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? 'grey.200' : 'grey.800',
          }}
        >
          <Container>
            <HeaderBreadcrumbs
              heading="Buttons"
              links={[
                { name: 'Components', href: PATH_PAGE.components },
                { name: 'Buttons' },
              ]}
              moreLink={[
                'https://mui.com/components/buttons',
                'https://mui.com/components/button-group',
                'https://mui.com/components/floating-action-button',
                'https://mui.com/components/toggle-button',
              ]}
            />
          </Container>
        </Box>

        <Container>
          <TabContext value={value}>
            <TabList onChange={handleChange}>
              {BUTTONS.map((tab, index) => (
                <Tab
                  disableRipple
                  key={tab.name}
                  label={tab.name}
                  value={String(index + 1)}
                />
              ))}
            </TabList>

            {BUTTONS.map((tab, index) => (
              <TabPanel key={tab.name} value={String(index + 1)} sx={{ mt: 5 }}>
                {tab.component}
              </TabPanel>
            ))}
          </TabContext>
        </Container>
      </RootStyle>
    </Page>
  );
}
