
import CustomNavbar from '../components/CustomNavbar';
import '../assets/css/About.css';


const Contact = () => {
  return (
    <div className="aa">
      <CustomNavbar />
      <div className="bb"> 
      <section id="timeline">
      <p className='aus'>ABOUT US</p>
        <ul className="line">
          <li>
            <div className="cont">
              <h3>Title Here</h3>
              <p>
              In 2004, Adam Weissbarth was an enthusiastic chessplayer and a full-time graduate student in Statistics.
              </p>
              <time>16 Nov, 2016</time>
            </div>
          </li>
          <li>
            <div className="cont">
              <h3>Title Here</h3>
              <p>
              A friend came across an ad from a local elementary school looking for a chess coach and passed it along.
              </p>
              <time>16 Nov, 2016</time>
            </div>
          </li>
          <li>
            <div className="cont">
              <h3>Title Here</h3>
              <p>
              Adam responded to the ad and took the job. As soon as he started, he found that the best hour of his week.
              </p>
              <time>16 Nov, 2016</time>
            </div>
          </li>
          <li>
            <div className="cont">
              <h3>Title Here</h3>
              <p>
              He founded Silver Knights Chess in 2006, and in 2008, was joined by his brother Daniel, also a lifelong chessplayer.
              </p>
              <time>16 Nov, 2016</time>
            </div>
          </li>
          <li>
            <div className="cont">
              <h3>Title Here</h3>
              <p>
              Later that year,two of their students won national championships for the first time.
              </p>
              <time>16 Nov, 2016</time>
            </div>
          </li>
        </ul>
      </section>
      </div>
      </div>
  );
};

export default Contact;
