import { useState } from 'react';
import { Box, Button, Grid, Paper, Stack, TextField, Typography, Alert } from '@mui/material';

const GoogleSheets = () => {
  const [sheetUrl, setSheetUrl] = useState('');
  const [tabName, setTabName] = useState('');
  const [rangeStart, setRangeStart] = useState('A1');
  const [rangeEnd, setRangeEnd] = useState('Z100');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSave = () => {
    // TODO: Connect to your Python backend /api/integrations/sheets
    console.log({ sheetUrl, tabName, range: `${rangeStart}:${rangeEnd}` });
    setStatus('success');
    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" mb={1}>Google Sheets Integration</Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Connect your Google Sheet to power your AI chatbot with your own data.
        </Typography>
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 4, borderRadius: 4 }}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Google Sheet URL"
              placeholder="https://docs.google.com/spreadsheets/d/..."
              value={sheetUrl}
              onChange={(e) => setSheetUrl(e.target.value)}
              helperText="Ensure the sheet is Public or shared with the service account."
            />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                label="Tab Name"
                placeholder="Sheet1"
                value={tabName}
                onChange={(e) => setTabName(e.target.value)}
              />
              <TextField
                label="Range Start"
                placeholder="A1"
                value={rangeStart}
                onChange={(e) => setRangeStart(e.target.value)}
                sx={{ width: { sm: 120 } }}
              />
              <TextField
                label="Range End"
                placeholder="Z100"
                value={rangeEnd}
                onChange={(e) => setRangeEnd(e.target.value)}
                sx={{ width: { sm: 120 } }}
              />
            </Stack>

            {status === 'success' && (
              <Alert severity="success">Configuration saved successfully!</Alert>
            )}

            <Box>
              <Button variant="contained" size="large" onClick={handleSave}>
                Save Configuration
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GoogleSheets;