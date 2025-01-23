import PageTransition from '@/components/PageTransition'

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-gray-300">
            <p className="mb-4">
              I'm a Computer Science and Mathematics student at The University of Texas at Austin, 
              passionate about solving complex problems at the intersection of technology and innovation. 
              With experience in both full-stack development and machine learning, I bring a unique 
              perspective to software engineering challenges.
            </p>
            <p className="mb-4">
              During my internships at companies like Vantashala and Vatson, I've had the opportunity 
              to work on impactful projects that improved system performance and user experience. I'm 
              particularly interested in distributed systems, machine learning applications, and building 
              scalable web applications.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">What I'm Looking For</h3>
              <p>
                I'm seeking opportunities where I can apply my dual background in Computer Science 
                and Mathematics to solve challenging problems. I'm particularly interested in roles 
                that involve machine learning, distributed systems, or full-stack development, where 
                I can continue to grow while making meaningful contributions to innovative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}