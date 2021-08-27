import React from 'react';

import { Preview, Editor } from './components';

import { previewContent } from './constants';

const Main = () => {
  const [content, setContent] = React.useState<string>(previewContent);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="main">
      <Editor content={content} handleChange={handleChange} />
      <Preview content={content} />
    </div>
  );
};

export default Main;
