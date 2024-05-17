import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.articles); // Check the structure of the articles data
        setArticles(data.articles);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news, index) => (
        <Newsitem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
          publishedAt={news.publishedAt}
          author={news.author}
        />
      ))}
    </div>
  );
}

export default Newsboard;
