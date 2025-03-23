
import './Blogg.css'
import BlogItem from './BlogItem'
import blog1Image from '../../assets/images/post-1.jpg'
import blog2Image from '../../assets/images/post-2.jpg'
import blog3Image from '../../assets/images/post-3.jpg'



function Blogg(){

	let Blogs =[
		{blogImage:blog1Image,
			blogTitle:'post title 1',
			blogText:'Proin eget tortor risus. Pellentesque in ipsum id orci porta',
			blogAut:'Elham Bashari',
			blogTime:'15 min',
		},
		{blogImage:blog2Image,
			blogTitle:'post title 2',
			blogText:'Proin eget tortor risus. Pellentesque in ipsum id orci porta',
			blogAut:'Babak Porhossein',
			blogTime:'10 min',
		},
		{blogImage:blog3Image,
			blogTitle:'post title 3',
			blogText:' Proin eget tortor risus. Pellentesque in ipsum id orci porta',
			blogAut:'Ada Porhossein',
			blogTime:'20 min',
		}
	]
	return(

		<>
		
		<section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <BlogItem{...Blogs[0]}/>
		
        </div>
      </div>
    </section>
		
		</>
	)
}


export default Blogg