import { useState } from 'react';
import { Box, Button, Grid, Paper, Stack, TextField, Typography, IconButton, Divider } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const AiSettings = () => {
  // --- Settings State ---
  const [apiKey, setApiKey] = useState('');
  const [systemPrompt, setSystemPrompt] = useState('You are a helpful AI assistant for FloChat. Answer questions based on the Google Sheet data provided.');
  
  // --- Chat Widget State ---
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: 'Hello! I am your bot configured with the prompt above. How can I help?' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMsg = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI response (Replace this with actual API call to your Python backend)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'ai',
        content: `[Test Response] I received: "${userMsg.content}". (This response uses the system prompt: "${systemPrompt.substring(0, 15)}...")`
      }]);
    }, 1000);
  };

  return (
    <Grid container spacing={3} sx={{ height: 'calc(100vh - 140px)' }}>
      <Grid item xs={12}>
        <Typography variant="h4">AI Configuration</Typography>
      </Grid>

      {/* Left Column: Settings */}
      <Grid item xs={12} lg={7} sx={{ height: '100%' }}>
        <Stack spacing={3} sx={{ height: '100%' }}>
          {/* API Key Section */}
          <Paper sx={{ p: 3, borderRadius: 4 }}>
            <Typography variant="h6" mb={2}>API Configuration</Typography>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Gemini / OpenAI API Key"
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
              />
              <Button variant="contained" sx={{ alignSelf: 'flex-start' }}>
                Save API Key
              </Button>
            </Stack>
          </Paper>

          {/* System Prompt Section */}
          <Paper sx={{ p: 3, borderRadius: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" mb={2}>System Prompt</Typography>
            <TextField
              fullWidth
              multiline
              rows={10}
              label="System Instructions"
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              placeholder="You are a customer support agent..."
              sx={{ flexGrow: 1, '& .MuiInputBase-root': { height: '100%', alignItems: 'flex-start' } }}
            />
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button variant="contained">Update Prompt</Button>
            </Box>
          </Paper>
        </Stack>
      </Grid>

      {/* Right Column: Chat Tester */}
      <Grid item xs={12} lg={5} sx={{ height: '100%' }}>
        <Paper sx={{
          p: 0,
          borderRadius: 4,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid',
          borderColor: 'divider'
        }}>
          <Box p={2} bgcolor="background.neutral">
            <Typography variant="h6">Test Playground</Typography>
          </Box>
          <Divider />

          {/* Chat Area */}
          <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {messages.map((msg, idx) => (
              <Box
                key={idx}
                sx={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  bgcolor: msg.role === 'user' ? 'primary.main' : 'action.hover',
                  color: msg.role === 'user' ? 'primary.contrastText' : 'text.primary',
                  p: 2,
                  borderRadius: 2,
                  borderBottomRightRadius: msg.role === 'user' ? 0 : 16,
                  borderBottomLeftRadius: msg.role === 'ai' ? 0 : 16,
                }}
              >
                <Typography variant="body2">{msg.content}</Typography>
              </Box>
            ))}
          </Box>

          <Divider />

          {/* Input Area */}
          <Box p={2} component="form" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
            <Stack direction="row" spacing={1}>
              <TextField
                fullWidth
                size="small"
                placeholder="Type a message to test..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <IconButton color="primary" onClick={handleSendMessage} sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}>
                <IconifyIcon icon="mingcute:send-fill" />
              </IconButton>
            </Stack>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AiSettings;