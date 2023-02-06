import { useState } from 'react'
import './App.css'
import pictureOfMe from './assets/me.jpg'
import coinFlip from './assets/coin-flip.png'


{/*
function getActiveClassName (activeArticle, currentArticle) {
  if (activeArticle !== currentArticle) {
    return 'hide-article'
  } else {
    return ''
  }
}

function App() {

  const ARTICLES = [
    {title: 'About me', description: 'I have studied front-end development for approximately 4 months. I am comfortable with html, css, javascript and jquery. I am now beginning my react journey!', img: pictureOfMe, id: 1},
    {title: 'A coin flip', description: 'For my first project I will create a coin flip application. I want to learn more about animations alongside react so I think it will be a reasonable first challenge', img: coinFlip, id: 2},
    {title: 'Design', description: 'I dont know?? A coin with some colors', img: '', id: 3}
  ];

  const [activeArticle, setActiveArticle] = useState(0);

  const [content, setContent] = useState(ARTICLES);

  
  console.log(content);
  

  const handlePrevious = () => {
    if (activeArticle === 0) {
      setActiveArticle(activeArticle + ARTICLES.length -1);
    } else {
      setActiveArticle(activeArticle - 1);
    }
  };

  const handleNext = () => {
    if (activeArticle === ARTICLES.length -1) {
      setActiveArticle(activeArticle - (ARTICLES.length -1));
    } else {
      setActiveArticle(activeArticle + 1);
    }
  };

  console.log(activeArticle)
  console.log(ARTICLES)

  return (
    <>
        {ARTICLES.map({title, img, description, id} => (
          <article className={` ${getActiveClassName(activeArticle, '')}`} key={article.id}>
            <h2>{article.title}</h2>
            <img src={article.img} height='200px' width='auto'></img>
            <p>{article.description}</p>
          </article>
        ))}
    
      <div className='pagination'>
          <button className='pagination-button' onClick={handlePrevious}> &laquo; </button>
          {ARTICLES.map((article) => (
            <div className='pagination-count' key={article.id}>{ARTICLES.indexOf(article) + 1}</div>
          ))}
          <button className='pagination-button' onClick={handleNext}> &raquo; </button>
      </div> 
             
    </>
  )
}
*/} 

function getActiveClassName (page, articleid) {
  if (page === articleid) {
    return 'active'
  } else {
    return ''
  }
}

const Article = ({title, description, img}) => (
  <section>
    <h3>{title}</h3>
    <div className='content'>
      <img src={img} alt="" height={"400px"} width={'auto'}/>
      <p>{description}</p>
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
      {visibleArticles.map(({title, description, img, id}) => (
        <Article title={title} description={description} img={img} key={id} />
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
  const [page, setPage] = useState(1);
  const articles = [
    {title: 'About me', description: 'I have studied front-end development for approximately 4 months. I am comfortable with html, css, javascript and jquery. I am now beginning my react journey!', img: pictureOfMe, id: 1},
    {title: 'A coin flip', description: 'For my first project I will create a coin flip application. I want to learn more about animations alongside react so I think it will be a reasonable first challenge', img: coinFlip, id: 2},
    {title: 'Design', description: 'I dont know?? A coin with some colors', img: '', id: 3}
  ];
  if (page === 1) {
    console.log("page 1 active");
  }

  return (
    <ArticleList articles={articles} page={page} setPage={setPage} />
  );

  
};



export default ArticlePage;


