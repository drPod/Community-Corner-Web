export default function News() {
  return (
    <div>
      <div>
        <h1 className="news-heading">News</h1>
        <div className="news-column">
          <div>
            <div className="news-section">
              <div className="news-image">Enter image</div>
              <div>
                <h3>Article #1</h3>
                <p>Article description</p>
                <button className="news-button">Read More</button>
              </div>
            </div>

            <div className="news-section">
              <div className="news-image">Enter image</div>
              <div>
                <h3>Article #2</h3>
                <p>Article description</p>
                <button className="news-button">Read More</button>
              </div>
            </div>

            <div className="news-section">
              <div className="news-image">Enter image</div>
              <div>
                <h3>Article #3</h3>
                <p>Article description</p>
                <button className="news-button">Read More</button>
              </div>
            </div>

            <div className="news-section">
              <div className="news-image">Enter image</div>
              <div>
                <h3>Article #4</h3>
                <p>Article description</p>
                <button className="news-button">Read More</button>
              </div>
            </div>
          </div>
          <div className="list-column">
            <h1 className="list-heading">Exciting Reads</h1>
            <ul>
              <li>Number 1</li>
              <li>Number 2</li>
              <li>Number 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
