import { useState } from 'react'
import './App.css'
import pictureOfMe from './assets/me.jpg'
import coinFlip from './assets/coin-flip2.png'
import coinFlipDesign from './assets/coin-flip-design-1.png'

function getActiveClassName (page, articleid) {
  if (page === articleid) {
    return 'active'
  } else {
    return ''
  }
}

const Article = ({title, description, img, link}) => (
  <section>
    <h3>{title}</h3>
    <div className='content'>
      <img src={img} alt="" />
      <p>{description} 
        <span>
          <a href={link} target='_blank'>{link}</a>
        </span>
      </p>
    </div>
  </section>
);

const ArticleList = ({ articles, page, setPage }) => {
  const startIndex = (page - 1);
  const endIndex = startIndex + 1;
  const visibleArticles = articles.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (page === 1) {
      setPage(page + articles.length -1);
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page === articles.length) {
      setPage(page - (articles.length -1));
    } else {
      setPage(page + 1);
    }
  };
  
  return (
    <div>
      {visibleArticles.map(({title, description, img, id, link}) => (
        <Article title={title} description={description} img={img} key={id} link={link} />
      ))}
      <div className='pagination'>
        {<button className='pagination-button' onClick={handlePrevious} >&laquo;</button>}
        {articles.map((article) => (
        <div key={article.id} className={`pagination-count ${getActiveClassName(page, article.id)}`}>{article.id}</div>
        ))}
        {<button className='pagination-button' onClick={handleNext}>&raquo;</button>}
      </div>
    </div>
  );
};

const ArticlePage = () => {

  const link = 'https://flipsimu.com/';

  const [page, setPage] = useState(1);
  const articles = [
    {title: 'About me', description: 'I have studied front-end development for approximately 4 months. I am comfortable with html, css, javascript and jquery. I am now beginning my react journey!', img: pictureOfMe, id: 1},
    {title: 'A coin flip', description: 'For my first project I will create a coin flip application. I want to learn more about animations alongside react so I think it will be a reasonable first challenge', img: coinFlip, id: 2},
    {title: 'Design', description: 'This design is very simple. But I guess the focus will be to mimic the animation which can be found at:', img: coinFlipDesign, id: 3, link: link}
  ];

  if (page === 1) {
    console.log("page 1 active");
  }

  return (
    <ArticleList articles={articles} page={page} setPage={setPage} />
  );

};

export default ArticlePage;


