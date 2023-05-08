import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('doge');
  const [memeUrl, setMemeUrl] = useState(
    'https://via.placeholder.com/400x400?text=No+Meme',
  );
  const templates = [
    'doge',
    'drake',
    'spongebob',
    'pooh',
    'success',
    'joker',
    'spiderman',
    'michael-scott',
    'grumpycat',
    'interesting',
    'disastergirl',
  ];

  const handleTopTextChange = (event) => {
    setTopText(event.target.value);
  };

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value);
  };

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
  };

  const handleGenerateClick = () => {
    const url = `https://api.memegen.link/images/${template}/${topText}/${bottomText}.png`;
    setMemeUrl(url);
  };

  const handleDownloadClick = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = memeUrl;
    downloadLink.download = 'meme.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className={styles.App}>
      <h1>Meme Generator</h1>
      <div>
        <label htmlFor="top-text-input">Top text:</label>
        <input
          id="top-text-input"
          className={styles.input}
          value={topText}
          onChange={handleTopTextChange}
        />
      </div>
      <div>
        <label htmlFor="bottom-text-input">Bottom text:</label>
        <input
          id="bottom-text-input"
          className={styles.input}
          value={bottomText}
          onChange={handleBottomTextChange}
        />
      </div>
      <div>
        <label htmlFor="template-select">Meme template:</label>
        <select
          id="template-select"
          className={styles.select}
          value={template}
          onChange={handleTemplateChange}
        >
          {templates.map((t) => (
            <option key={`template-${t}`} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.button} onClick={handleGenerateClick}>
        Generate
      </button>
      {!!memeUrl && (
        <div>
          <img
            className={styles.image}
            src={memeUrl}
            alt="Generated meme"
            data-test-id="meme-image"
          />
          <button className={styles.button} onClick={handleDownloadClick}>
            Download
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
