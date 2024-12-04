/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 22 November 2024
 * 
 * 2025 Georgia Scrimmage blog page
 */


import BlogPage from './BlogPage';

import season2024 from '../assets/blog/season2024.jpg'
import september2024 from '../assets/blog/september2024.jpg'
import georgia2025 from '../assets/blog/georgia2025.jpg'
import mvso2025 from '../assets/blog/mvso2025.jpg'


export function Season2024() {
    return <BlogPage
        title="2023-2024: Season in Review"
        date="1 June 2024"
        author="Andrew Kim"
        image={season2024}
        category="Blog"
    >
        <p></p>
    </BlogPage>
}

export function September2024() {
    return <BlogPage
        title="September 2024 Newsletter"
        date="10 September 2024"
        author="James Kim"
        image={september2024}
        category="Newsletter"
    >
        <p></p>
    </BlogPage>
}


export function Georgia2025() {
    return <BlogPage 
        title="2025 Georgia Scrimmage Results"
        date="23 October 2024"
        author="Andrew Kim"
        image={georgia2025}
        category="Competitions"
    >
        <p>Great job to all WSO competitors! Since the 2022-2023 season, Woodson Science Olympiad has competed in the annual Georgia Scrimmage, a virtual invitational run by Georgia Science Olympiad. Drawing teams from across the nation, the Georgia Scrimmage is one of the earliest competitions and provides experience for study events.</p>
        <p>For this year's Georgia Scrimmage, Woodson Science Olypmiad competitors took tests across a three-day period, from Tuesday, November 15th to Thursday, November 17th. During these days, Mrs. Babcock was crowded with exam takers for hours after school, showing the dedication of our members.</p>
        <h1>Performance Review</h1>
        <p>Woodson Science Olympiad had a strong start to its 2024-2025 season at the Georiga Scrimmage. Pitted against 88 other Division C teams, team Godzilla prevailed, ranking 2nd. This meant Woodson beat 2 other schools that attended the 2023-2024 Nationals Tournament, Marquette University High School and the Fulton Science Academy. Teams Rodan and Mothra ranked 25th and 35th, respectively, a strong showing for the Regionals teams. Individual event rankings were as follows: </p>
        <ul>
            <li>Anatomy and Physiology (9th): Elaina Wi, Ian Gonzalez</li>
            <li>Codebusters (2nd): Andrew Kim, Katie Yen, Mortan Altier</li>
            <li>Ecology (8th): James Kim, Ivy Zhao</li>
            <li>Entomology (2nd): James Kim, Ivy Zhao</li>
            <li>Fossils (3rd): Ivy Zhao, Morgan Altier</li>
            <li>Optics (3rd): Matthew Lee, Timothy Lin-Lee</li>
            <li>Wind Power (5th): Matthew Lee, Timothy Lin-Lee</li>
        </ul>
        <p>Build Captain Matthew Lee shared his positive thoughts on the tournament's results. Given how early it is in the season, Lee believed "the studies did really great" and the team had "really exceeded expectations." In regards to Lee's personal event rankings, this Georgia Scrimmage "was my best yet." Looking ahead, Lee said "Our strong team performance gives me an optimistic outlook for the rest of the season."</p>
        <q>Our strong team performance gives me an optimistic outlook for the rest of the season.</q>
        <p>The Georgia Scrimmage was one of six comeptitions planned for the 2024-2025 season. Our next and last virtual invitational, hosted by Monta Vista High School, will be in mid-November. Happy studying and building!</p>
    </BlogPage>
}

export function Mvso2025() {
    return <BlogPage
        title="2025 Monta Vista Invitational"
        date="25 November 2024"
        author="Andrew Kim"
        image={mvso2025}
        category="Competition"
    >
        <h1>Performance Review</h1>
        <ul>
            <li>Air Trajectory (6th): Ada Qin, Nicolas Tong</li>
            <li>Brainrot Battle (6th): Shaheer Khan, Ryan Chong</li>
            <li>Codebusters (2nd): Andrew Kim, Katie Yen, Mortan Altier</li>
            <li>Entomology (5th): James Kim, Ivy Zhao</li>
            <li>Forensics (4th): Maddie Cho, Shaheer Khan</li>
            <li>Fossils (4th): Ivy Zhao, Morgan Altier</li>
            <li>Helicopter (1st): Timothy Lin-Lee, Catherine Han</li>
            <li>Microbe Mission (5th): Elaina Wi, Ian Gonzalez</li>
            <li>Robot Tour (4th): Andrew Kim, Matthew Lee</li>
            <li>Tower (2nd): Katie Yen, Andrew Kim</li>
            <li>Tower (5th): Laurent Pham, Maria Wang</li>
        </ul>
    </BlogPage>
}