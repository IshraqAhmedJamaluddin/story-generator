import { useState } from 'react';
import { TextField, Button, Paper, Typography, CircularProgress, Box } from '@mui/material';
import OpenAI from 'openai';

// TODO: Define the Story interface
// HINT: Think about what properties a story should have
// - What information do we need to store for each story?
// - Each property should be of type string
// - Look at the UI section to see what story properties are displayed
interface Story {
  // Add the required properties here
}

const StoryGenerator = () => {
  // TODO: Set up state variables using useState
  // HINT: You'll need state for:
  // - prompt (string) - to store user input
  // - story (Story | null) - to store the generated story
  // - loading (boolean) - to track API call status
  // - error (string) - to store error messages
  // Remember to use the correct type annotations!
  // Add your state variables here

  // TODO: Implement the generateStory function
  // HINT: This function should:
  // 1. Validate the prompt (check if it's empty)
  // 2. Set loading to true before API call
  // 3. Create an OpenAI client with your API key
  // 4. Make the API call with appropriate parameters:
  //    - Use chat.completions.create()
  //    - Set up system and user messages
  //    - Request JSON response format
  // 5. Parse the JSON response
  // 6. Update the story state with the parsed content
  // 7. Handle any errors that occur
  // 8. Set loading to false when done
  const generateStory = async () => {
    // Your implementation here
  };

  // TODO: Implement the text-to-speech feature
  // HINT: Use the Web Speech API
  // 1. Create a new SpeechSynthesisUtterance
  // 2. Set the text to read (combine all story parts)
  // 3. Use window.speechSynthesis.speak()
  const readStoryAloud = (storyContent: Story) => {
    // Your implementation here
  };

  // TODO: Create the UI components
  // HINT: Use these Material-UI components:
  // - Typography for headings and text
  // - TextField for the prompt input
  // - Button for the generate action
  // - CircularProgress for loading state
  // - Paper for the story display
  // Remember to:
  // 1. Handle loading state in the button
  // 2. Display error messages when present
  // 3. Only show the story section when a story exists
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      {/* Add your UI components here */}
    </Box>
  );
};

export default StoryGenerator; 