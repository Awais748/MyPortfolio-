import { Briefcase, Code, User } from "lucide-react";
export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 ">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Frontend Developer & Learner
            </h3>

            <p className="text-muted-foreground">
              I started my web development journey and since then I’ve been
              fully committed to building modern, responsive, and user-friendly
              websites.
            </p>
            <p className="text-muted-foreground">
              I have hands-on experience with
              <span className="font-medium">
                HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React
              </span>
              . I love creating smooth interfaces and always look for new
              challenges to improve my skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start px-19">
              <a href="#contact" className="cosmic-button py-2">
                Get in Touch
              </a>
              <a
                href="/cv/awais-cv.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Skills</h4>
                  <p className="text-muted-foreground">
                    Skilled in building user-friendly and visually appealing web
                    interfaces using HTML, CSS, JavaScript, and React.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Learning Mindset</h4>
                  <p className="text-muted-foreground">
                    Always exploring new technologies and improving coding
                    skills with consistency.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects</h4>
                  <p className="text-muted-foreground">
                    Worked on small projects and UI designs to practice modern
                    layouts and functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
