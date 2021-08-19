import React from 'react';

import Carousel from './Project/Carousel';
import CarouselDetails from './Project/CarouselDetails';

const Projects = () => {
  const importAll = (r) => {
      return r.keys().map(r);
  }
  const aiImg = importAll(require.context('../../../public/assets/img/projects/ai', false, /\.(png|jpe?g|svg)$/));
  const rsImg = importAll(require.context('../../../public/assets/img/projects/rs', false, /\.(png|jpe?g|svg)$/));
  const csVid = importAll(require.context('../../../public/assets/img/projects/cs', false, /\.(mp4|mkv)$/));
  const cData = {
    Informatics: {title: 'Informatics', name: 'AI-Based Attendance Monitoring', desc: 'A Web application to manage and update the attendance of students based on the group image captures during a particular className. This application permits the student to raise complaints regarding their attendance, apply for special leave of absence with a document of proof and this application permits the student to view their attendance percentage and how they can improve.', tech: 'Django, SQLite, face-recognition, HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax'},
    Housing:
    {title: 'Housing', name: 'Real Estate Management', desc: 'A Web application to manage a society and houses, their specifications, purchase, sales details, services and reports and to maintain the information of buyer and seller. In this website a user can view different houses available in different locations and can contact to the owner of the house.', tech: 'Microsoft Sql Server 2017, Visual Studio 2017, C#, HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax'},
    Cars:
    {title: 'Cars', name: 'Car Showroom Management', desc: 'A standalone application to manage the details of cars, their specifications, purchase, sales details, generate bills and reports and keep track of cars and to maintain the information of employee and customer.', tech: 'Oracle 11g, Visual Basic 6.0'}
  };

  return(<main className="page projects-page">
    <section className="portfolio-block projects-cards">
      <div className="container">
        <div className="heading">
            <h2>Recent Work</h2>
        </div>
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <div className="card border-0">
              <div className="card-body">
                <Carousel id='carouselAI' item={aiImg}/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <CarouselDetails item={cData['Informatics']} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <div className="card border-0">
              <div className="card-body">
                <Carousel id='carouselRS' item={rsImg}/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <CarouselDetails item={cData['Housing']} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <div className="card border-0">
              <div className="card-body">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe title="car" className="embed-responsive-item" src={csVid[0]['default']} allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <CarouselDetails item={cData['Cars']} />
          </div>
        </div>
      </div>
    </section>
  </main>);
}

export default Projects;