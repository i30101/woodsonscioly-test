/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 12 September 2024
 * 
 * Index page
 */


// components
import Page from './components/Page'


// assets
import season2024 from './assets/blog/season2024.jpg'
import september2024 from './assets/blog/september2024.jpg'
import georgia2025 from './assets/blog/georgia2025.jpg'
import mvso2025 from './assets/blog/mvso2025.jpg'
import fh2025 from './assets/blog/fh2025.jpg'
import React from "react";


interface BlogContainerProps {
    title: string;
    date: string
    image: any;
    category: string;
    path: string;
}

const BlogContainer: React.FC<BlogContainerProps> = ({title, date, image, category, path}) => {
    return <a href={path} className="blog-preview-container col-xs-12 col-sm-12 col-md-6 col-lg-6" data-aos="fade-up">
        <img src={image} className="blog-preview-image" alt={image}/>
        <span className="blog-preview-category">{category}</span>
        <div className="blog-preview-title">{title}</div>
        <div className="blog-preview-date">{date}</div>
    </a>
}


function Blog() {
    document.title = "Blog | Woodson Science Olympiad";
    return <Page title="Our" highlight="Blog" after="" subtitle="Learn about the club and what we do.">
         <div className="primary-section row">
             <BlogContainer title={"2025 Mary Washington Regional Results"} date={"March 2nd, 2025"} image={fh2025} category={"Competitions"} path={"./blog/fairfax2025"} />
             <BlogContainer title={"2025 Princeton Invitational Results"} date={"February 3rd, 2025"} image={fh2025} category={"Competitions"} path={"./blog/fairfax2025"} />
             <BlogContainer title={"2025 Fairfax Invitational Results"} date={"January 12th, 2025"} image={fh2025} category={"Competitions"} path={"./blog/fairfax2025"} />
             <BlogContainer image={fh2025} category="Competitions" title="2025 Flint Hill Invitational Results" date="December 17th, 2024" path="./blog/fh2025" />
             <BlogContainer image={mvso2025} category="Competitions" title="2025 Monta Vista Invitational Results" date="November 25th, 2024" path="./blog/mvso2025"/>
             <BlogContainer image={georgia2025} category="Competitions" title="2025 Georgia Scrimmage Results" date="October 24th, 2024" path="./blog/georgia2025"/>
             <BlogContainer image={september2024} category="Newsletter" title="September 2024 Newsletter" date="September 10, 2024" path="./blog/september2024"/>
             <BlogContainer image={season2024} category="Blog" title="2023-2024: Season in Review" date="June 12th, 2024" path="./blog/season2024"/>
        </div>
    </Page>
}

export default Blog;