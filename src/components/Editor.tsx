import React from 'react';

import { IEditor } from '../types/IEditor';

const Editor: React.FC<IEditor> = ({ content, handleChange }) => (
  <textarea id="editor" className="editor" onChange={handleChange} value={content} />
);

export default Editor;
