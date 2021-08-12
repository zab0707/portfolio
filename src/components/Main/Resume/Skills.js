import React from 'react';

import SkillItem from './SkillItem';

const Skills = () => {
  const skill1 = [
    {skill: 'C Programming', status: 'Intermediate', percent: '80%'},
    {skill: 'Java 11', status: 'Intermediate', percent: '70%'},
    {skill: 'Python 3', status: 'Advance', percent: '90%'},
    {skill: 'SQL', status: 'Intermediate', percent: '80%'},
    {skill: 'NoSQL', status: 'Intermediate', percent: '70%'},
    {skill: 'HTML 5', status: 'Advance', percent: '100%'},
    {skill: 'CSS 3', status: 'Advance', percent: '100%'},
  ];
  const skill2 = [
    {skill: 'Bootstrap 4', status: 'Intermediate', percent: '90%'},
    {skill: 'JavaScript ES6', status: 'Intermediate', percent: '90%'},
    {skill: 'Django 3', status: 'Advance', percent: '90%'},
    {skill: 'PHP 7.4', status: 'Intermediate', percent: '60%'},
    {skill: 'Node.js 14', status: 'Intermediate', percent: '70%'},
    {skill: 'React 17', status: 'Intermediate', percent: '70%'},
    {skill: 'Angular 10', status: 'Beginner', percent: '40%'},
  ];
  return (
    <div className="row">
        <div className="col-md-6">
            <div className="skills portfolio-info-card">
              {skill1.map((s)=>{
                return <SkillItem item={s} key={s.skill} />;
              })}
            </div>
        </div>
        <div className="col-md-6">
          <div className="skills portfolio-info-card">
            {skill2.map((s)=>{
                return <SkillItem item={s} key={s.skill} />;
              })}
          </div>
        </div>
    </div>
  );
};

export default Skills;