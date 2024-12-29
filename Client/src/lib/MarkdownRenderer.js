// components/MarkdownRenderer.js
import React from 'react';
import { marked } from 'marked';

const MarkdownRenderer = ({ content }) => {
  // Parse markdown content to HTML
  const htmlContent = marked(content);

  return (
    <div
      className="markdown-container"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownRenderer;