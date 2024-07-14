import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = (page) => {
    fetch(`http://localhost:5000/api/data?page=${page}&limit=60`)
      .then(response => response.json())
      .then(newData => {
        if (newData.length === 0) {
          setHasMore(false);
        } else {
          setData(prevData => [...prevData, ...newData]);
          setPage(prevPage => prevPage + 1); // Increment page for the next fetch
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setHasMore(false);
      });
  };

  useEffect(() => {
    if(page==1){
      console.log('effect')
      fetchData(1);
    }
  }, []);

  const fetchMoreData = () => {
    console.log("more")
    fetchData(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Infinite Scrolling Data</h1>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to show</p>}
        >
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </InfiniteScroll>
      </header>
    </div>
  );
}

export default App;
