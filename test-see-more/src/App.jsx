import React, { useState, useEffect } from "react";

function App() {
  const [longWord, setLongWord] = useState([
    {
      name: "kfjdfkdjfsfdsfjdkfsfPhandk8urenrejbrehrhehfbuer8e8edfdf",
      key: 1,
    },
    {
      name: "kfjdfkdjfsfdsfjdkfsfPhandk8urenrejbrehrhehfbuer8e8edfdf",
      key: 2,
    },
    {
      name: "kfjdfkdjbrehrhehfbuer8e8edfdf",
      key: 3,
    },
  ]);
  return (
    <>
      {/* <div>{longWord}</div> */}
      {longWord.map((word) => (
        <ShowMore longWord={word.name} key={word.key} />
      ))}
    </>
  );
}

export default App;

function ShowMore({ longWord }) {
  console.log(longWord);
  const [partialContent, setPartialContent] = useState("");
  const [fullContent, setFullContent] = useState("");
  const [showMoreVisible, setShowMoreVisible] = useState(false);

  useEffect(() => {
    console.log(longWord.substring(0, longWord.length - 3));
    const partial = longWord.substring(0, 30);
    const full = longWord.substring(30);
    setPartialContent(partial);
    setFullContent(full);
    if (longWord.length > 30) {
      const partial = longWord.substring(0, 30) + "...";
      setPartialContent(partial);
      setShowMoreVisible(true);
    }
  }, []);

  const handleShowMore = () => {
    setPartialContent(
      partialContent.substring(0, partialContent.length - 3) + fullContent
    );
    setShowMoreVisible(false);
  };
  const handleShowLess = () => {
    if (longWord.length > 30) {
      const partial = longWord.substring(0, 30) + "...";
      setPartialContent(partial);
      setShowMoreVisible(true);
    }
  };

  return (
    <div>
      <div>{partialContent}</div>
      {showMoreVisible ? (
        <button onClick={handleShowMore}>Show More</button>
      ) : (
        partialContent.length > 30 && (
          <button onClick={handleShowLess}>Show Less</button>
        )
      )}
      <div>Menglong</div>
    </div>
  );
}
