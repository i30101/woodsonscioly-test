/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 22 November 2024
 * 
 * Blog container
 */


// components
import Navbar from './Navbar';
import Footer from './Footer';



interface BlogProps {
    children: React.ReactNode;
    title: string;
    date: string;
    author: string;
    image: any;
    category: string;
}


const BlogPage: React.FC<BlogProps> = ({children, title, date, author, image, category}) => {
    const titleImage = <div className="blog-image" 
        style={{backgroundImage: `url(${image})`}}
    />

    return <>
        <Navbar />

        <div className="intro-container">
            <div className="blog-title" data-aos="fade-up">{title}</div>
            <div className="blog-subtitle" data-aos="fade-up" data-aos-delay="150">
                <span className="blog-preview-category">{category}</span>
                <span className="blog-date">{date}</span>
            </div>
            <img src={image} className="blog-image" data-aos="fade-up" data-aos-delay="200" />
        </div>
        
        <div className="blog-body row" data-aos="fade-up">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                <div className="detail-label">Date</div>
                <div className="detail">{date}</div>
                <div className="detail-label">Author</div>
                <div className="detail">{author}</div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 blog-main">
                {children}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
        </div>
        <Footer />
    </>
}

export default BlogPage;