import { useContext } from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../../context/authContext';

export default function BlogListItem ({
    title,
    imageUrl,
    desc,
    date,
    _id,
    authorName
}) {


  const {
   
    username
} = useContext(AuthContext);

    return (
    < >   
            <div className="single-blog-area mb-80">
              <div className="blog-thumbnail">
                <img src={imageUrl} alt="" />
                <div className="post-date">
                  <Link to={`/blog/${_id}`}>
                  {date}
                  </Link>
                </div>
              </div>
              {/* Content */}
              <div className="blog-content">
                <Link to={`/blog/${_id}`} className="post-title">
                  {title}
                </Link>
                <div className="meta-data">
                  by {authorName}
                
                </div>
                <p>
                 {desc}
                </p>
                <Link to={`/blog/${_id}`} className="btn delicious-btn mt-30">
                  Read More
                </Link>
              </div>
            </div>






      </>









        
   
    )
}