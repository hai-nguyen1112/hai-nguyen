import React from 'react';

import styles from './About.module.scss';
import haiAvatar from '../../img/haiavatar.jpg';
import cx from 'classnames';

const About = () => {
  return (
    <div id="about" className={cx(styles.about, 'mt-sm')}>
      <div className={styles.aboutBox}>
        <div className={styles.aboutMe}>
          <img src={haiAvatar} alt="avatar" className={styles.avatar} />
          <h4 className={styles.name}>Hai Nguyen</h4>
          <p className={styles.intro}>
            I was born and raised in Chau Doc, a small town located on Mekong
            delta in the South of Vietnam, where you can find countless floating
            houses, tons of motorbikes on streets and endless green rice fields.
            I came to the USA in 2015 and graduated Summa Cum Laude with an
            Associate’s degree in Cybersecurity in 2018. Right after finishing
            college, I went to Flatiron School, a coding bootcamp, to learn full
            stack web development. I graduated from the bootcamp in April 2019
            and have been working professionally as a software engineer since
            then. So far, I have contributed to two major projects (one for the
            Washington DC Government, one for the Federal Government) and many
            other projects. I am a lifelong learner who is always looking to
            acquiring new techinial expertise to add more values to my products.
          </p>
        </div>
      </div>
      <div className={styles.education}>
        <h4 className={styles.categoryTitle}>Education</h4>
        <ul>
          <li>
            <span>
              Flatiron School, 1440 G St NW, Washington, DC 20005, April 2019
            </span>
            <span>
              Full Stack Web Development, Ruby on Rails, JavaScript and
              React/Redux immersive program
            </span>
          </li>
          <li>
            <span>
              Northern Virginia Community College, 5000 Dawes Ave, Alexandria,
              VA 22311, December 2018
            </span>
            <span>
              A.A.S. in Cybersecurity, Summa Cum Laude (4.0 final GPA)
            </span>
          </li>
          <li>
            <span>
              University of Economics Ho Chi Minh City (UEH), 59C Nguyen Dinh
              Chieu, Ward 6, District 3, Ho Chi Minh City, Vietnam, June 2009
            </span>
            <span>
              B.B.A. in International Trade, Concentration: Business
              Administration
            </span>
          </li>
          <li>
            <span>
              Advanced CSS/SASS, Test Driven Development with Jest/Enzyme,
              TypeScript for React/Redux/Express, NodeJS and MongoDB
              Certifications
            </span>
            <span>Certified by Udemy</span>
          </li>
          <li>
            <span>Security+</span>
            <span>Certified by CompTIA, June 2018 - June 2021</span>
          </li>
        </ul>
      </div>
      <div className={styles.workExperience}>
        <h4 className={styles.categoryTitle}>Employment History</h4>
        <ul>
          <li>
            <span>
              Dovel Technologies, LLC, 1700 Rockville Pike, Suite 600,
              Rockville, MD 20852
            </span>
            <span>Front End Developer, February 2020 - October 2020</span>
          </li>
          <li>
            <span>
              Netsource Interactive Inc., 1724 20th St NW, Washington, DC 20009
            </span>
            <span>Front End Developer, June 2019 - December 2019</span>
          </li>
          <li>
            <span>
              Saigon Thuong Tin Commercial Joint Stock Bank (SACOMBANK), 266-268
              Nam Ky Khoi Nghia Street, District 3, Ho Chi Minh City, Vietnam
            </span>
            <span>
              International Payment Supervisor, January 2014 - January 2015
            </span>
            <span>
              International Payment Officer, December 2009 - January 2014
            </span>
            <span>International Payment Teller, July 2009 - December 2009</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
