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
import Page from './components/Page'


import season2024 from './assets/blog/season2024.jpg'
import september2024 from './assets/blog/september2024.jpg'
import georgia2025 from './assets/blog/georgia2025.jpg'
import mvso2025 from './assets/blog/mvso2025.jpg'


interface BlogContainerProps {
    title: string;
    date: string
    image: any;
    category: string;
    path: string;
}

const BlogContainer: React.FC<BlogContainerProps> = ({title, date, image, category, path}) => {
    return <a href={path} className="blog-preview-container col-xs-12 col-sm-12 col-md-6 col-lg-6" data-aos="fade-up">
        <img src={image} className="blog-preview-image" />
        <span className="blog-preview-category">{category}</span>
        <div className="blog-preview-title">{title}</div>
        <div className="blog-preview-date">{date}</div>
    </a>
}


function Blog() {
    return <Page title="Our" highlight="Blog" after="" subtitle="Learn about the club and what we do.">
         <div className="primary-section row">
            <BlogContainer
                image={mvso2025}
                category="Competitions"
                title="2025 Monta Vista Invitational Results"
                date="October 25th, 2024"
                path="./blog/mvso2025"
            />
             <BlogContainer
                image={georgia2025}
                category="Competitions"
                title="2025 Georgia Scrimmage Results"
                date="October 24th, 2024"
                path="./blog/georgia2025"
            />
            <BlogContainer
                image={september2024}
                category="Newsletter"
                title="September 2024 Newsletter"
                date="September 10, 2024"
                path="./blog/september2024"
            />
            <BlogContainer
                image={season2024}
                category="Blog"
                title="2023-2024: Season in Review"
                date="October 24th, 2024"
                path="./blog/season2024"
            />
        </div>
    </Page>
}

export default Blog;