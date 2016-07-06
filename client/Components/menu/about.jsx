import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  width: '100%',
};

const About = () => (
  <div className="menu-pad">
    <div>
      <h3>About</h3>
      <p>
        My name is Mark Tyneway and I am a
        full-stack software engineer. I believe
        in freely shared information and made this
        site to raise awareness about the American
        political system.
      </p>
      <p>
        Hiring? I am currently looking for a job
        and would love to help you build something
        awesome.
      </p>
    </div>
    <div>
      <FlatButton
        label="GitHub"
        linkButton={true}
        href="https://github.com/tynes"
        icon={<FontIcon
          className="fa fa-github"
        />}
        style={styles}
      />
      <FlatButton
        label="Twitter"
        linkButton={true}
        href="https://twitter.com/tyneslol"
        icon={<FontIcon
          className="fa fa-twitter"
        />}
        style={styles}
      />
      <FlatButton
        label="LinkedIn"
        linkButton={true}
        href="https://www.linkedin.com/in/marktyneway"
        icon={<FontIcon
          className="fa fa-linkedin-square"
        />}
        style={styles}
      />
      <FlatButton
        label="Email"
        linkButton={true}
        href="mailto:tyneway12@gmail.com"
        icon={<FontIcon
          className="fa fa-envelope-o"
        />}
        style={styles}
      />
    </div>
  </div>
);

export default About;
