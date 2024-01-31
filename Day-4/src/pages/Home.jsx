import CustomNavbar from '../components/CustomNavbar';
import '../assets/css/Home.css'
import { Carousel } from 'rsuite';
import image1 from '../assets/images/c1.jpg';
import image2 from '../assets/images/c2.jpg';
import image3 from '../assets/images/c3.jpg';
import image4 from '../assets/images/c4.jpg';
import image5 from '../assets/images/c5.jpg';


const Home = () => {
    return (
        <div className='home__container'>
         <CustomNavbar/>
        <div><br/>
        <Carousel autoplay className="cust">
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
        <img src={image4}/>
        <img src={image5}/>
        </Carousel>
        </div>
        <div className='cont12'>
            <div className='cont121'>
                <div className="cont1211">Learn from Activity Based Curriculum (ABC) for Chess</div>
                <div className='cont1212'>
                Build a strong foundation with the world’s first activity-based curriculum (ABC) for chess. It has over 2500+ interactive activities from over 150 lessons across 5 learning levels (from beginner to advanced).
                </div>
            </div>
            <div className='cont122'>
                <img src="https://classroom.skpobednik.rs/f4d6ca4c8f10aee7003a7d85e7adffa9.svg" alt="" />
            </div>
        </div>
        <div className='cont12'>
            <div className='cont121'>
                <div className="cont1211">Smart & Active Learning</div>
                <div className='cont1212'>
                Learn from interactive chess courses on openings, middlegames, endgames, tactics, and strategies. Watch instructive video lessons and solve the activities/puzzles to practice your learning!
                </div>
            </div>
            <div className='cont122'>
                <img src="https://classroom.skpobednik.rs/3bffffe1525ad027c014c532e4ff376d.svg" alt="" />
            </div>
        </div>
        <div className='cont12'>
            <div className='cont121'>
                <div className="cont1211">Compete in Online Tournaments</div>
                <div className='cont1212'>
                Participate in online chess tournaments. Compete with other students and try to win the tournaments of different formats (Swiss, Quad, Swiss Team).
                </div>
            </div>
            <div className='cont122'>
                <img src="https://classroom.skpobednik.rs/c47b55d81f29f391eda13e0b4a5243fc.svg" alt="" />
            </div>
        </div>
        <div className='cont12'>
            <div className='cont121'>
                <div className="cont1211">Solve Chess Quizzes</div>
                <div className='cont1212'>
                Solve chess puzzles, MCQs, fun-loaded capture activities, play with computer, and more from our interactive quizzes.
                </div>
            </div>
            <div className='cont122'>
                <img src="https://classroom.skpobednik.rs/3d1506b757c2958c91ba91028525588d.svg" alt="" />
            </div>
        </div>
        <div className='cont12'>
            <div className='cont121'>
                <div className="cont1211">Interactive Classroom</div>
                <div className='cont1212'>
                Attend online chess classes with our interactive classroom. Actively participate in the classes by answering questions, solving puzzles, and fight for the leaderboard by scoring more points!
                </div>
            </div>
            <div className='cont122'>
                <img src="https://classroom.skpobednik.rs/9a4a6bb173af24422a297730d34e9a2b.svg" alt="" />
            </div>
        </div>
        <div className='cont12'>
            <div className='cont121'>
                <div className="cont1211">Play with friends and bots</div>
                <div className='cont1212'>
                Play casual games with your friends or challenge computers/bots from over 20+ levels. You can also play blindfold chess to improve your calculation and visualization skills.
                </div>
            </div>
            <div className='cont122'>
                <img src="https://classroom.skpobednik.rs/a784f9f705a4c4ef6c2f7e40dcb20caf.svg" alt="" />
            </div>
        </div>
        <div className='cont12'>
            <div className='cont121'>
                <div className="cont1211">Student Reports</div>
                <div className='cont1212'>
                Get access to daily, weekly, and monthly student reports - see detailed statistics of classes attended, problems solved, quizzes completed, points scored, games won, and more.
                </div>
            </div>
            <div className='cont122'>
                <img src="https://classroom.skpobednik.rs/0fefa384cce8be95ec6e14b65743dae9.svg" alt="" />
            </div>
        </div>

        </div>
    
        
    );
}

export default Home;