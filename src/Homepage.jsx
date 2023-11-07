import NewsIcon from './NewsIcon';
import './Homepage.css';
import reactLogo from './assets/react.svg'

function Homepage() {
    return (
        <div className="homepage-container">
            <div className="left-section">
                <NewsIcon 
                    picture={reactLogo}
                    articleType="NEWS"
                    author="Maysnarii Chotbunwong"
                    releaseDate="May 23, 2023"
                    title="Join the first cohort of UNITE Young Leaders"
                />
                <NewsIcon 
                    picture={reactLogo}
                    articleType="NEWS"
                    author="Jia Lee"
                    releaseDate="May 3, 2023"
                    title="Roald Dahl’s Books Rewritten"
                />
                <NewsIcon 
                    picture={reactLogo}
                    articleType="NEWS"
                    author="Naphat (Belle) Chonpangsaong"
                    releaseDate="May 2, 2023"
                    title="Living in a Box: Exploring Hong Kong’s Coffin Homes Amidst the Housing Crisis"
                />
            </div>
            <div className="center-section">
            <div className="center-section">
                {/* <div className="center-top">
                    <img src={reactLogo} alt="The Union logo" className="center-logo"/>
                    <h2 className="center-title">APPLY TO JOIN THE UNION 2023-24 STAFF</h2>
                    <h3 className="center-subtitle">CONFERENCE NEWS</h3>
                </div> */}
                <div className="center-bottom">
                    <h1 className="center-big-title">THE UNION IS RECRUITING! 2023-24 Academic Year</h1>
                    <h2 className="center-title">APPLY TO JOIN THE UNION STAFF</h2>
                    <p className="center-description">
                        Calling all existing and new members! Sign up now to join The Union 2023-24 Staff. New members: sign up to join as a staff member. Existing members: sign up to renew your interest in The Union, and apply for executive positions if you're interested. CLOSES OCTOBER 1, 2023 (Sunday) ...
                    </p>
                    <span className="center-author">By Luanne Poh - September 14, 2023 -</span>
                </div>
            </div>
            </div>
            <div className="right-section">
                <NewsIcon 
                    picture={reactLogo}
                    articleType="NEWS"
                    author="Alysha (Alice) Simic"
                    releaseDate="January 2, 2023"
                    title="The Ethics of Dispersing Protests: Examining the Morality of Using Force to Break Up Demonstrations"
                />
                <NewsIcon 
                    picture={reactLogo}
                    articleType="NEWS"
                    author="Giulia Pession"
                    releaseDate="January 1, 2023"
                    title="Should Children Worry about Censorship? Examining the Implications of Restricting Information for Young Minds through Winnie the Pooh"
                />
            </div>
        </div>
    );
}

export default Homepage;
