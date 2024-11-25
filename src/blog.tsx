/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 12 September 2024
 * 
 * Index page
 */


import React from 'react';
import ReactDOM from 'react-dom/client';

// styling
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './css/blog.css'
import Title from './components/Title';


import georgia from './assets/blog/georgia.jpg'
import season2024 from './assets/blog/season2024.jpg'
import september from './assets/blog/september.jpg'


interface BlogContainerProps {
    title: string;
    date: string
    image: any;
    category: string;
}

const BlogContainer: React.FC<BlogContainerProps> = ({title, date, image, category}) => {
    return <a href="./blog/georgia2025" className="blog-container col-xs-12 col0sm-12 col-md-6 col-lg-6" data-aos="fade-up">
        <img src={image} className="blog-image" />
        <span className="blog-category">{category}</span>
        <div className="blog-title">{title}</div>
        <div className="blog-date">{date}</div>
    </a>
}


function Blog() {
    return <>
        <Title title="Our" highlight="Blog" after="" subtitle="Learn about the club and what we do."></Title>

        <div className="primary-section row">
            <BlogContainer
                image={georgia}
                category="Competitions"
                title="2025 Georgia Scrimmage Results"
                date="October 24th, 2024" />
            <BlogContainer
                image={season2024}
                category="Blog"
                title="2023-2024: Season in Review"
                date="October 24th, 2024" />
            <BlogContainer
                image={september}
                category="Newsletter"
                title="September 2024 Newsletter"
                date="September 10, 2024" />
            
        </div>
    </>
}

export default Blog;