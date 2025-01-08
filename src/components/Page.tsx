/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 2 December 2024
 * 
 * Page template
 */


// external libraries
import React from "react";


// components
import Navbar from "./Navbar";
import Title from "./Title";
import Body from "./Body";
import Footer from "./Footer";



interface PageProps {
    children: React.ReactNode;
    title: string;
    highlight: string;
    after: string;
    subtitle: string;
}


const Page: React.FC<PageProps> = ({children, title, highlight, after, subtitle}) => (
    <>
        <Navbar />
        <Title title={title} highlight={highlight} after={after} subtitle={subtitle} />
        <Body>
            {children}
        </Body>
        <Footer />
    </>
);


export default Page;