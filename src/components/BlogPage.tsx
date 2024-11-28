/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 22 November 2024
 * 
 * Blog container
 */


import React from 'react';


// styling
import '../components-css/BlogPage.css'


interface BlogProps {
    title: string;
    date: string;
    author: string;
    image: any;
    category: string;
}


const BlogPage: React.FC<BlogProps> = ({title, date, author, image, category}) => {
    return <>
        <div className="intro-container"></div>
    </>
}


export default BlogPage;