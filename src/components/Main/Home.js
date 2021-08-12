import React from 'react';

import SkillDetails from './Home/SkillDetails';

const Home = () => {
  const skill = {
    web: {icon: 'ion-code-working', title: 'Web Developer', desc: 'Web Developer with 4+ years of hands-on experience in designing and developing user interfaces, testing, debugging. Proven ability in optimizing web functionality that improve data retrieval and workflow efficiencies.'},
    data: {icon: 'ion-stats-bars', title: 'Data Analyst', desc: 'Data Analyst with 1+ years of hands-on experience interpreting and analyzing data in order to drive successful business solutions. Proficient knowledge in statistics, mathematics, and analytics. Excellent understanding of business operations and analytics tools for effective analysis of data.'},
    full: {icon: 'ion-navicon-round', title: 'Full Stack Developer', desc: 'Full Stack Developer with 2+ years of hands-on experience in designing, developing and implementing both front-end and back-end applications and solutions using range of technologies and programming languages.'},
  };
  return(
  <div>
    <section className="portfolio-block block-intro">
      <div className="container">
          <div className="avatar" style={{backgroundImage: 'url(/assets/img/avatars/zabp.jpg)'}}></div>
          <div className="about-me">
              <p>Hello! I am <strong>Zain Ali Baig</strong>. A motivated individual with in-depth knowledge of programming languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.</p></div>
      </div>
    </section>
    <section className="portfolio-block skills">
      <div className="container">
          <div className="heading">
              <h2>Special Skills</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <SkillDetails item={skill['web']} />
            </div>
            <div className="col-md-4">
              <SkillDetails item={skill['data']} />
            </div>
            <div className="col-md-4">
              <SkillDetails item={skill['full']} />
            </div>
          </div>
      </div>
  </section>
  </div>);
}

export default Home;