import React from 'react';

import marked from 'marked';
import Prism from 'prismjs';

import { IPreview } from '../types/IPreview';

const Preview: React.FC<IPreview> = ({ content }) => {
  marked.setOptions({
    breaks: true,
    highlight: (code) => Prism.highlight(code, Prism.languages.javascript, 'javascript'),
  });

  const renderer = new marked.Renderer();
  renderer.link = (href, text) => `<a 'href=${href}' target='_blank'>${text}</a>`;

  return (
    <div
      id="preview"
      className="preview"
      dangerouslySetInnerHTML={{
        __html: marked(content, { renderer: renderer }),
      }}
    />
  );
};

export default Preview;
