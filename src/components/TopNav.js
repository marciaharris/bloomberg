export default function Carosel() {
  return (
    <div className="overscroll-contain bg-scroll">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="relative card card-side cardBlue orangeFont shadow-xl">
            <figure className=" "><img src="https://pbs.twimg.com/media/GM2hSVYWcAA0urh?format=png&name=small" alt="Movie" /></figure>
            <div className="card-body">
              <h2 className="card-title">Maya Patel</h2>
              <p>Role - Senior Data Scientist
                <br/> 
                Company - TechGenius Inc
                <br/>
                Experience - 12 years
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 end-2/4 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="card card-side cardBlue orangeFont shadow-xl">
            <figure><img src="https://pbs.twimg.com/media/GM2hWctW8AAnr3_?format=png&name=small" alt="Movie" /></figure>
            <div className="card-body">
              <h2 className="card-title">Ryan Johnson</h2>
              <p>Role - Data Science Manager
                <br/> 
                Company - Analytics Solutions
                <br/>
                Experience - 8 years
              </p>
              <p>Maya Patel, PhD</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="card card-side cardBlue orangeFont shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released SECOND LAST!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="card card-side cardBlue orangeFont shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released LAST!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  )
}