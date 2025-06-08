import { useState } from 'react';
import { TextField, Button, Paper, Typography, CircularProgress, Box } from '@mui/material';
import OpenAI from 'openai';

interface Story {
  characters: string;
  setting: string;
  plot: string;
}

const StoryGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateStory = async () => {
    if (!prompt) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{
          role: "system",
          content: "You are a creative story generator. Generate a story with distinct sections for characters, setting, and plot. Return only valid JSON without any markdown formatting."
        }, {
          role: "user",
          content: `Generate a story based on this prompt: ${prompt}. Return only the following JSON structure without any markdown: {"characters": "description of characters", "setting": "description of setting", "plot": "description of plot"}`
        }],
      });

      let storyContent;
      try {
        const content = response.choices[0].message.content || '';
        // Remove any potential markdown formatting
        const cleanContent = content.replace(/^```json\s*|\s*```$/g, '').trim();
        storyContent = JSON.parse(cleanContent);
      } catch (err) {
        setError('Failed to parse story content. Please try again.');
        console.error(err);
        return;
      }

      setStory(storyContent);
      
      // Read the story aloud
      const speech = new SpeechSynthesisUtterance();
      speech.text = `Characters: ${storyContent.characters}. Setting: ${storyContent.setting}. Plot: ${storyContent.plot}`;
      window.speechSynthesis.speak(speech);
    } catch (err) {
      setError('Failed to generate story. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        AI Story Generator
      </Typography>
      
      <TextField
        fullWidth
        label="Enter your story prompt"
        variant="outlined"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        margin="normal"
      />
      
      <Button
        variant="contained"
        onClick={generateStory}
        disabled={loading}
        sx={{ my: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Generate Story'}
      </Button>

      {error && (
        <Typography color="error" sx={{ my: 2 }}>
          {error}
        </Typography>
      )}

      {story && (
        <Paper sx={{ p: 3, mt: 3 }}>
          <Typography variant="h6" gutterBottom>Characters:</Typography>
          <Typography paragraph>{story.characters}</Typography>
          
          <Typography variant="h6" gutterBottom>Setting:</Typography>
          <Typography paragraph>{story.setting}</Typography>
          
          <Typography variant="h6" gutterBottom>Plot:</Typography>
          <Typography paragraph>{story.plot}</Typography>
        </Paper>
      )}
    </Box>
  );
};

export default StoryGenerator; 