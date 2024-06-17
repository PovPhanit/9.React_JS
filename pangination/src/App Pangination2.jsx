import React, { useState, useEffect } from 'react';

const App = () => {
  const [allItems] = useState([
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15', 'Item 16', 'Item 17', 'Item 18', 'Item 19', 'Item 20'
  ]);
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const showItemsOnPage = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, allItems.length);
    return allItems.slice(startIndex, endIndex);
  };

  const getTotalPages = () => Math.ceil(allItems.length / itemsPerPage);

  const handlePrevButtonClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    const totalPages = getTotalPages();
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleIndexButtonClick = (index) => {
    setCurrentPage(index);
  };

  const handleCustomIndexButtonClick = () => {
    const newIndex = parseInt(customIndex, 10);
    if (newIndex >= 1 && newIndex <= getTotalPages()) setCurrentPage(newIndex);
    setCustomIndex('');
  };

  const [customIndex, setCustomIndex] = useState('');

  return (
    <div>
      <div id="itemContainer">
        {showItemsOnPage(currentPage).map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <button id="prevButton" onClick={handlePrevButtonClick} disabled={currentPage === 1}>Previous</button>
      {[...Array(getTotalPages()).keys()].map(index => (
        <button key={index} className="indexButton" onClick={() => handleIndexButtonClick(index + 1)}>{index + 1}</button>
      ))}
      <button id="nextButton" onClick={handleNextButtonClick} disabled={currentPage === getTotalPages()}>Next</button>
      <input type="text" id="indexInput" placeholder="Go to Page" value={customIndex} onChange={(e) => setCustomIndex(e.target.value)} />
      <button id="customIndexButton" onClick={handleCustomIndexButtonClick}>Go</button>
    </div>
  );
};

export default App;
