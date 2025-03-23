

function BlogItem(props){
	return(
		<>
		
		<div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src="../../assets/images/post-1.jpg" className="img-fluid" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">post title 1</h3>
                <p className="blog-desc">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">Elham Bashari</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src="../../assets/images/post-2.jpg" className="img-fluid" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">post title 2</h3>
                <p className="blog-desc">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">Ada Porhossein</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 15 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src="../../assets/images/post-3.jpg" className="img-fluid" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">post title 3</h3>
                <p className="blog-desc">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">Babak Kisomi</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 20 min
                </div>
              </div>
            </div>
          </div>
		</>
	)
}
export default BlogItem