/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 22 November 2024
 * 
 * 2025 Georgia Scrimmage blog page
 */


// components
import BlogPage from './BlogPage';
import Rankings from './Rankings';


// assets
import season2024 from '../assets/blog/season2024.jpg'
import september2024 from '../assets/blog/september2024.jpg'
import georgia2025 from '../assets/blog/georgia2025.jpg'
import mvso2025 from '../assets/blog/mvso2025.jpg'
import fh2025 from '../assets/blog/fh2025.jpg'



export function Season2024() {
    return <BlogPage
        title="2023-2024: Season in Review"
        date="12 June 2024"
        author="Andrew Kim"
        image={season2024}
        category="Blog"
    >
        <p>Another school year has passed, indicating the end of another Science Olympiad season. </p>
        <h1>Performance Review</h1>
        <p>The 2023-2024 Science Olympiad season was WSO's best so far. Our team earned a total of 3 trophies and 72 medals, a considerable feat and a testament to the dedication and hard work of our members. Our competitions this year were:</p>
        <ul>
            <li>Georgia Scrimmage(4th): 5 medals</li>
            <li>Fairfax Invitational (2nd): 13 medals</li>
            <li>Princeton Invitational (8th): 7 medals</li>
            <li>Fairfax Regional (1st): 32 medals</li>
            <li>Virginia States Tournament (4th): 15 medals</li>
        </ul>
        <h1>Rising Above Struggles</h1>
        <p>The successes of WSO this season were achieved despite a number of significant setbacks. Most notable was the cancellation of the Fairfax Invitational due to weather. Our members had been gearing up to compete on January 6th, but due to winter weather, all activities in Fairfax County were canceled. As a result, the competition was rescheduled to February 2nd, the date of the Princeton Invitational. This meant that the Regionals teams would have to compete without the States team at Fairfax. However, due to the hard work of our Regionals teams, we ranked 2nd overall at Fairfax. Another conflict was the cancellation of the Carnegie Mellon Invitational. Despite months of preparation, our travel and hotel plans had to be cancelled days before the competition.</p>
        <h1>Season in Review: President's Remarks</h1>
        <p>Now that the season has come to a close, I would like to thank everyone on the Science Olympiad team this year for their remarkable dedication and hard work. Our competitors, for working on their notes and builds despite two cancelled competitions. Our officers, for serving their club on top of their difficult events. And Mrs. Babcock, for her ever-present passion and wisdom.</p>
        <p>And of course, I would like to thank our caring and supportive parents. Your commitment as volunteers, chauffeurs, and chaperones is a face of WSO that always deserves more appreciation. I thank you all for providing your children with so many resources that allowed us to succeed, and understanding the cancellations that must have been a logistical nightmare to all households.</p>
        <p>As the departing Vice President and the incoming President, I have to say that I certainly learned a lot this season. I will share those lessons with my officers, States members, and everyone else on the team to make the 2024-2025 season even better than the least. I look forward to a season filled with trophies, medals, and cheers!</p>
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
        <p>First, we want to thank you all for attending our interest meeting on Wednesday, September 4th. We hope you found it informative, and we hope you had some fun too! If you were unable to attend, not to worry! All of the information shared at the interest meeting will be included in this message.</p>
        <h1>Upcoming Dates</h1>
        <p>This week, we will be holding prep sessions to help students get ready for tryouts and to answer any questions, so feel free to join us in Mrs. Babcock's room, A140, after school on <b>September 11th and 12th</b>! Tryouts testing will be on <b>September 18th and 19th in Cavalier Hall</b>; students may choose what event tests they will be taking in each block and should come prepared with the materials they need for those tests. The tryouts sign up Google Form can be found <a href="https://forms.gle/o5fifLjPfiAJ3eCQ9">here</a>. Supplies such as pencils, field guides, and calculators will not be provided for students who fail to bring their own.</p>
        <h1>Tryouts Guide</h1>
        <p>Our officers have written up guidelines, clarifications, and test expectations in the <a href="https://docs.google.com/document/d/19y7ZXFXfjoNXjuedQgDqIaNd71Adz4r87anZi_SUbeI/edit?usp=sharing">2024-2025 Tryouts Guide</a>. Tryouts tests may not necessarily follow the official Science Olympiad guidelines for this season, so please refer to your specific event's guidelines to prepare. Students planning on trying out for build events should refer to the modified <a href="https://docs.google.com/document/d/1Yf9HwpVG-B8nPU1wzOUWPqes9EywRjVg8FlBEfkbyLI/edit?usp=sharing">Electric Vehicle guidelines</a>; this will be the tryouts process for all builders regardless of event.</p>
        <h1>Build Update</h1>
        <p>The following are clarifications for build tryouts this year. If you have any questions regarding build tryouts, please reach out to the officers.</p>
        <ul>
            <li>You may use capacitors</li>
            <li>You can only use the motors provided</li>
            <li>You may not use any ICs or PCBs (or any component containing these) for the purpose of power regulation (voltage </li>conversion, current regulation, etc)
            <li>The vehicle must be powered solely by the two AA batteries</li>
            <li>No two points on the vehicle may have a electric potential of more than 3V</li>
        </ul>
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
        <p>For this year's Georgia Scrimmage, Woodson Science Olympiad competitors took tests across a three-day period, from Tuesday, November 15th to Thursday, November 17th. During these days, Mrs. Babcock was crowded with exam takers for hours after school, showing the dedication of our members.</p>
        <h1>Performance Review</h1>
        <p>Woodson Science Olympiad had a strong start to its 2024-2025 season at the Georgia Scrimmage. Pitted against 88 other Division C teams, team Godzilla prevailed, ranking 2nd. This meant Woodson beat 2 other schools that attended the 2023-2024 Nationals Tournament, Marquette University High School and the Fulton Science Academy. Teams Rodan and Mothra ranked 25th and 35th, respectively, a strong showing for the Regionals teams. Individual event rankings were as follows: </p>
        <Rankings year={2025} compIndex={0} />
        <p>Build Captain Matthew Lee shared his positive thoughts on the tournament's results. Given how early it is in the season, Lee believed "the studies did really great" and the team had "really exceeded expectations." In regards to Lee's personal event rankings, this Georgia Scrimmage "was my best yet." Looking ahead, Lee said "Our strong team performance gives me an optimistic outlook for the rest of the season."</p>
        <q>Our strong team performance gives me an optimistic outlook for the rest of the season.</q>
        <p>The Georgia Scrimmage was one of six competitions planned for the 2024-2025 season. Our next and last virtual invitational, hosted by Monta Vista High School, will be in mid-November. Happy studying and building!</p>
    </BlogPage>
}

export function Mvso2025() {
    return <BlogPage
        title="2025 Monta Vista Invitational Results"
        date="25 November 2024"
        author="Andrew Kim"
        image={mvso2025}
        category="Competition"
    >
        <h1>Performance Review</h1>
        <Rankings year={2025} compIndex={1} />
    </BlogPage>
}

export function FlintHill2025() {
    return <BlogPage
        title="2025 Flint Hill Invitational Results"
        date="17 November 2024"
        author="Andrew Kim"
        image={fh2025}
        category="Competition">
            <h1>Performance Review</h1>
            <Rankings year={2025} compIndex={2} />
            <p>Once again, we would like to thank Mrs. Babcock, parents, event supervisors, and anyone involved in facilitating our amazing performance at Flint Hill. Our incredible placings would not have been possible without you all!</p>
    </BlogPage>
}