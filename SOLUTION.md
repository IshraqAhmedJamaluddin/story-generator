# Solution Guide (Reference Only)

**Note: Try to solve the project on your own first! Only look at this solution if you're really stuck.**

## 1. Story Interface Implementation
```typescript
interface Story {
  characters: string;
  setting: string;
  plot: string;
}
```

## 2. State Management Implementation
```typescript
const [prompt, setPrompt] = useState('');
const [story, setStory] = useState<Story | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
```

## 3. Generate Story Function Implementation
```typescript
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
      model: "gpt-3.5-turbo",
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
      const cleanContent = content.replace(/^```json\s*|\s*```$/g, '').trim();
      storyContent = JSON.parse(cleanContent);
    } catch (err) {
      setError('Failed to parse story content. Please try again.');
      console.error(err);
      return;
    }

    setStory(storyContent);
    readStoryAloud(storyContent);
  } catch (err) {
    setError('Failed to generate story. Please try again.');
    console.error(err);
  }
  setLoading(false);
};
```

## 4. Text-to-Speech Implementation
```typescript
const readStoryAloud = (storyContent: Story) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = `Characters: ${storyContent.characters}. Setting: ${storyContent.setting}. Plot: ${storyContent.plot}`;
  window.speechSynthesis.speak(speech);
};
```

## 5. UI Components Implementation
```typescript
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
```

## Common Issues and Solutions

1. **API Key Not Working**
   - Make sure the .env file is in the root directory
   - Verify the environment variable name starts with VITE_
   - Check if the API key is valid in the OpenAI dashboard

2. **TypeScript Errors**
   - Ensure all properties in the Story interface are defined
   - Check that useState is properly typed with generics
   - Verify all function parameters have type annotations

3. **OpenAI API Errors**
   - Check your API key permissions
   - Verify you're using the correct model name
   - Ensure your prompt is appropriate and not too long

4. **Text-to-Speech Not Working**
   - Check browser compatibility
   - Ensure audio is not muted
   - Try using different voice options if available

Remember: The goal is to learn by doing. If you've looked at this solution, try to understand why each part works rather than just copying the code. 