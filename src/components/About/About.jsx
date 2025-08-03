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
            <p>I am Suraj Mallick, a Cloud Engineer specializing in designing, deploying, and optimizing cloud infrastructure. With expertise in AWS cloud services and DevOps automation, I focus on building scalable, secure, and cost-efficient solutions.</p>
            
            <div className="key-highlights">
              <p>-Cloud Architecture & Infrastructure as Code (IaC): Designing resilient cloud environments using Terraform and CloudFormation.</p>
              <br />
              <p>-DevOps & Automation: Implementing CI/CD pipelines, configuration management, and container orchestration with Docker and Kubernetes.</p>
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