/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 22 November 2024
 * 
 * Blog container
 */


import React from 'react';

import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';


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
        <Navbar />

        <div className="intro-container"></div>
        
        <Body>
            hi
        </Body>
        <Footer />
    </>
}


export default BlogPage;