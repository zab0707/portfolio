import React from 'react';

import Education from './Resume//Education';
import Skills from './Resume/Skills';
import Certificates from './Resume/Certificates';

const Resume = () => {
  return(
      <main className="page cv-page">
        <section className="portfolio-block block-intro">
          <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="avatar" style={{backgroundImage: 'url(/assets/img/avatars/zabp.jpg)'}}></div>
                </div>
                <div className="col-md-8">
                  <div className="about-me text-left">
                    <h1><strong>Zain Ali Baig</strong></h1>
                    <h5><i className="icon ion-at icon"></i> zainbaig8@gmail.com</h5>
                    <h5><i className="icon ion-ios-telephone icon"></i>+91 8861129859</h5>
                    <p>A motivated individual with in-depth knowledge of programming languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section className="portfolio-block cv">
            <div className="container">
                {/* <div className="work-experience group">
                    <div className="heading">
                        <h2 className="text-center">Work Experience</h2>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Web Developer</h3>
                                <h4 className="organization">Amazing Co.</h4>
                            </div>
                            <div className="col-md-6"><span className="period">10/2013 - 04/2015</span></div>
                        </div>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
                    </div>
                </div> */}
                <div className="education group">
                    <div className="heading">
                        <h2 className="text-center">Education</h2>
                    </div>
                    <Education />
                </div>
                <div className="group">
                    <div className="heading">
                        <h2 className="text-center">Skills</h2>
                    </div>
                    <Skills />
                </div>
                <div className="achievements group">
                    <div className="heading">
                        <h2 className="text-center">Achievements</h2>
                    </div>
                    <ul>
                      <li>Secured 1st place in Java programming at Java hackathon in 2020, Organized by PES University.</li>
                      <li>Member of INIT Club at PES University.</li>
                      <li>Awarded Distinction Scholarship for academic performance in December 2019.</li>
                      <li>Attended TECHBHARAT a national conclave of startups on January 17, 18 2020 at Bangalore.</li>
                      <li>Awarded M.R.D Scholarship for academic performance in June 2020.</li>
                      <li>Awarded Distinction Scholarship for academic performance in December 2020.</li>
                    </ul>
                </div>
                <div className="personal group">
                  <div className="heading">
                      <h2 className="text-center">Personal Profile</h2>
                  </div>
                   <div className="contact-info portfolio-info-card">
                     <div className="row">
                       <div className="col-md-6">
                        <div className="row">
                            <div className="col-1"><i className="icon ion-android-calendar icon"></i></div>
                            <div className="col-9"><span>07 July 1997</span></div>
                        </div>
                        <div className="row">
                            <div className="col-1"><i className="icon ion-earth icon"></i></div>
                            <div className="col-9"><span>Indian</span></div>
                        </div>
                        <div className="row">
                            <div className="col-1"><i className="icon ion-person icon"></i></div>
                            <div className="col-9"><span>Male</span></div>
                        </div>
                        <div className="row">
                            <div className="col-1"><i className="icon ion-ios-bookmarks icon"></i></div>
                            <div className="col-9"><span>English, Hindi, Urdu</span></div>
                        </div>
                       </div>
                       <div className="col-md-6">
                         <div className="row">
                            <div className="col-1"><i className="icon ion-social-github icon"></i></div>
                            <div className="col-9"><span>https://github.com/zab0707</span></div>
                        </div>
                        <div className="row">
                            <div className="col-1"><i className="icon ion-social-linkedin"></i></div>
                            <div className="col-9"><span>https://www.linkedin.com/in/zain-ali-baig-8a6557195/</span></div>
                        </div>
                        <div className="row">
                            <div className="col-1"><i className="icon ion-fork-repo icon"></i></div>
                            <div className="col-9"><span>https://www.hackerrank.com/zainbaig8</span></div>
                        </div>
                        <div className="row">
                            <div className="col-1"><i className="icon ion-code-working icon"></i></div>
                            <div className="col-9"><span>https://www.hackerearth.com/@zainali</span></div>
                        </div>
                       </div>
                     </div>
                    </div>
                </div> 
                <div className="certificates group">
                  <div className="heading">
                      <h2 className="text-center">Certificates & Badges</h2>
                  </div>
                  <Certificates c1='csc' c2='pc'/>
                  <br />
                  <Certificates c1='pds' c2='fig'/>
                  <br />
                  <Certificates c1='iweb' c2='dt'/>
                  <br />
                  <Certificates c1='dn' c2='lurp'/>
                  <br/>
                  <Certificates c1='lurc' c2=''/>
                </div>   
            </div>
        </section>
      </main>);
}

export default Resume;