import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [ count, setCount ] = useState(0)
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)
  const [ review, setReview ] = useState(``)
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    try {
      setIsLoading(true)
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data)
    } catch (error) {
      console.error("Error reviewing code:", error)
      setReview("Error: Could not complete code review. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code-container">
            <div className="editor-wrapper">
              <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                padding={10}
                className="code-editor"
                textareaClassName="editor-textarea"
                preClassName="editor-preview"
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 16,
                  width: "100%"
                }}
              />
            </div>
          </div>
          <div
            onClick={isLoading ? null : reviewCode}
            className={`review ${isLoading ? 'loading' : ''}`}>
            {isLoading ? 'Reviewing...' : 'Review'}
          </div>
        </div>
        <div className="right">
          <div className="response-container">
            {isLoading ? (
              <div className="loading-message">
                <p>Your code is being reviewed...</p>
              </div>
            ) : (
              <Markdown
                rehypePlugins={[ rehypeHighlight ]}
              >{review}</Markdown>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
