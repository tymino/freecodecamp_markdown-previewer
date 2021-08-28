import React from 'react';

import { IEditor } from '../types/IEditor';

const Editor: React.FC<IEditor> = ({ content, handleChange }) => (
  <div className="editor">
    <div className="editor__title">Editor</div>
    <textarea id="editor" className="editor__textarea" onChange={handleChange} value={content} />
  </div>
);

export default Editor;
