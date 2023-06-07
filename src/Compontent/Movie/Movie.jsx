import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import MediaItem from '../MediaItem/MediaItem';
import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom'

export default function Movies() {
  
  const [trendingMovies, setTrendingMovies] = useState([]);
  let pageList = new Array(10).fill("rehab").map((page, index) => index + 1);
  const [currentPage, setCurrentPage] = useState(1);


  async function getTrending(currentPage)
  {
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=bd7de1002d5d536889f2190d815dc7ec&language=en-US&page=${currentPage}`)
    setTrendingMovies(data.results);
    console.log(data.results);

  }
  useEffect(() => {
    getTrending(currentPage);

  }, [currentPage]);

  function onPaginate(page) {
    setCurrentPage(page);
  }
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }
  function prevPage() {
    setCurrentPage(currentPage - 1);
  }

  return <>
    <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>Movies Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="row py-5 my-5 align-items-center">
  <h1 className="fw-bolder text-center  py-2 pb-5">Trending Movies</h1>
    <div className="col-md-4 d-flex align-items-center">
      <div>
      <div className="brdr w-25 mb-3"></div>
      <h2 className=' h4'>Trending Movies <br/> To Watch Right Now</h2>
      <p className=' py-2 text-muted'>Watched Movies To Watch Right Now</p>
      <div className="brdr w-100 mt-3"></div>
      </div>
    </div>
    {trendingMovies.map((item ,index)=> <MediaItem key={index} item={item}/>)}
  </div>
  <nav
                aria-label="Page navigation example"
                className="d-flex justify-content-center py-5"
              >
                <ul className="pagination">
                  {currentPage > 1 ? (
                    <li className="page-item cursor" onClick={prevPage}>
                      <Link class="page-link">Prev</Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {pageList.map((page, index) => (
                    <li
                      className="page-item"
                      onClick={() => onPaginate(page)}
                      key={index}
                    >
                      <Link className="page-link">{page}</Link>
                    </li>
                  ))}
                  {currentPage < 10 ? (
                    <li className="page-item cursor" onClick={nextPage}>
                      <Link class="page-link"> Next</Link>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </nav>
  </>
}




