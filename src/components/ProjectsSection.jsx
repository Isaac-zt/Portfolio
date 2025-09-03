import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "AI website",
        description: "An immersive ai website for Robots",
        image:"/Projects/PROJ3.png",
        tags:["HTML", "CSS", "JAVA SCRIPT"],
        URL: "#",
        GitHubURL:"#",
    },
    {
      id: 2, 
      title: "Coffee Shop",
      description: "A modern coffee shop website with a clean design.",
      image: "/Projects/Gorillacoffee.png",
      tags: ["HTML", "CSS", "JavaScript"],
      URL: "#",
      GitHubURL: "#",
    },
    {
      id: 3,
      title: "Headphone website",
      description: "A sleek headphone website.",
      image: "/Projects/Sound.png",
      tags: ["HTML", "CSS", "JavaScript"],
      URL: "#",
      GitHubURL: "#",
    },
]


export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span>
             </h2>

             <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Check out some of my recent work below.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden
                shadow-xs card-hover">
                     <div className="overflow-hidden h-48">
                      <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     </div>

                     <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                {tag}
                            </span>
                          ))}
                        </div>
                     
                      
                      <h3 className="text-xl font-semibold mb-1 ">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <div className="flex items-center justify-between">
                          <div className="flex space-x-3">
                          <a href={project.URL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            <ExternalLink size={20}/>
                          </a>
                          <a href={project.GitHubURL} target="_blank" 
                          className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            <Github size={20} />
                          </a>
                          </div>
                        </div>
                      </div>
                </div>
               ))}
             </div>

             <div className="text-center mt-12">
               <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Isaac-zt"
               target="_blank">
                Check My GitHub <ArrowRight size={16} />
               </a>
             </div>
            </div>
        </section>
    )
}