import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pfp from '../../assets/pfp2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me<span>.</span></h1>
        <img src={theme_pattern} alt="" />  
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={pfp} alt="Suraj Mallick" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I’m Wahaj Ahmed, a passionate Cloud & DevOps Engineer in the making, with a strong foundation in AWS services and DevOps practices. I specialize in learning and building cloud infrastructure using Infrastructure as Code, automation tools, and CI/CD pipelines to create scalable, secure, and efficient environments.</p>
            
            <div className="key-highlights">
              <p>-I've completed multiple Bootcamps and hands-on projects, including automated deployments on AWS using Kubernetes and Argo CD, as well as CI/CD integration using Jenkins. My mission is to bridge the gap between development and operations through automation and scalability.</p>
              <br />
              <p>-Beyond the terminal and YAML files, I love writing LinkedIn posts, learning from real-world DevOps scenarios, and connecting with like-minded tech enthusiasts. I'm continuously evolving in my DevOps journey and always excited to take on new challenges!</p>
              <br />
              <p>-Cloud Security & Cost Optimization: Enforcing security best practices, monitoring cloud environments, and optimizing resource utilization.</p>
            </div>

            <p>I am passionate about problem-solving in cloud infrastructure, continuously exploring emerging technologies, and improving system reliability through automation and best practices.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About