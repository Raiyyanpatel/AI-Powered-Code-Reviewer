# AI-Powered-Code-Reviewer

An intelligent code review tool powered by Google's Gemini AI that provides detailed code reviews and improvement suggestions.

## Features

- **Interactive Code Editor**: Write or paste your code with proper syntax highlighting
- **AI-Powered Reviews**: Get detailed feedback and suggestions from Gemini AI
- **Modern UI/UX**: Clean interface with responsive design
- **Real-time Feedback**: Visual loading indicators during the review process
- **Scrollable Content**: Easily navigate through large code snippets and detailed reviews

## Project Structure

The project consists of two main parts:

- **Frontend**: React-based UI with code editor and review display
- **Backend**: Node.js server that processes code and interacts with the Gemini AI API

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- NPM or Yarn
- Google Gemini API key

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd code-review-main/BackEnd
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create or modify the `.env` file with your Gemini API key:
     ```
     GOOGLE_GEMINI_KEY=your-api-key
     ```
   - ⚠️ **Important Security Note**: Never commit your `.env` file with real API keys to public repositories.

4. Start the server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd code-review-main/Frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and go to the URL shown in the terminal (typically http://localhost:5173)

## How to Use

1. Enter or paste your code in the editor on the left side
2. Click the "Review" button at the bottom right of the editor
3. Wait for the AI to analyze your code (a loading indicator will show)
4. Read the detailed review that appears in the right panel
5. Scroll through longer code or reviews as needed

## Usage Example

![Screenshot 2025-04-16 125231](https://github.com/user-attachments/assets/581767c4-8386-46a6-9e64-dcd853aa6570)


## Technologies Used

- **Frontend**:
  - React.js
  - Prism.js (syntax highlighting)
  - react-simple-code-editor
  - react-markdown (for rendering reviews)

- **Backend**:
  - Node.js
  - Express
  - Google Gemini AI API

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Credits

- Created with ❤️ for developers who want AI-assisted code improvements
- Uses Google's Gemini AI for intelligent code analysis 
