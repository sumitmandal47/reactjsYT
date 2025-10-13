import React from 'react'
import Card from './components/Card';

const App = (elem) => {

  const hiringDevelopers = [
    {
      Logo: "https://logo.clearbit.com/google.com",
      name: "Aarav Sharma",
      work: "Frontend Developer",
      role: "Freelancer",
      experience: ["React",  "Next.js", "TypeScript", "Figma"],
      pay: "$65/hr",
      description:
        "Frontend engineer with 5+ years of experience building scalable web apps for Google Cloud projects.",
      available: true,
    },
    {
      Logo: "https://logo.clearbit.com/amazon.com",
      name: "Sophia Lee",
      work: "UI/UX Designer",
      role: "Epic Coders",
      experience: ["UI", "UX", "Photoshop", "Illustrator"],
      pay: "$55/hr",
      description:
        "Creative designer with a background in user research and product design for Amazon’s e-commerce platform.",
      available: false,
    },
    {
      Logo: "https://logo.clearbit.com/apple.com",
      name: "Liam Johnson",
      work: "iOS Developer",
      role: "Freelancer",
      experience: ["Swift", "Objective-C", "Xcode", "UI Design"],
      pay: "$70/hr",
      description:
        "Experienced iOS engineer specializing in performance optimization and smooth UX for Apple mobile products.",
      available: true,
    },
    {
      Logo: "https://logo.clearbit.com/meta.com",
      name: "Emma Wilson",
      work: "Full Stack Developer",
      role: "Epic Coders",
      experience: ["React", "Node.js", "MongoDB", "GraphQL"],
      pay: "$80/hr",
      description:
        "Full stack engineer who developed internal collaboration tools at Meta, focusing on scalability and UI consistency.",
      available: true,
    },
    {
      Logo: "https://logo.clearbit.com/netflix.com",
      name: "Noah Patel",
      work: "Backend Developer",
      role: "Freelancer",
      experience: ["Python", "Django", "AWS", "Microservices"],
      pay: "$75/hr",
      description:
        "Backend expert with experience optimizing streaming APIs and backend pipelines for Netflix's content platform.",
      available: false,
    },
    {
      Logo: "https://logo.clearbit.com/microsoft.com",
      name: "Olivia Brown",
      work: "Cloud Engineer",
      role: "Epic Coders",
      experience: ["Azure", "Kubernetes", "DevOps", "CI/CD"],
      pay: "$90/hr",
      description:
        "Microsoft-certified cloud engineer with deep experience in containerized applications and system reliability.",
      available: true,
    },
    {
      Logo: "https://logo.clearbit.com/tesla.com",
      name: "Ethan Davis",
      work: "Frontend Developer",
      role: "Freelancer",
      experience: ["Vue.js", "TailwindCSS", "UI", "Accessibility"],
      pay: "$60/hr",
      description:
        "Frontend specialist who designed responsive dashboards for Tesla’s internal analytics and IoT tools.",
      available: true,
    },
    {
      Logo: "https://logo.clearbit.com/nvidia.com",
      name: "Mia Chen",
      work: "AI Engineer",
      role: "Epic Coders",
      experience: ["Python", "TensorFlow", "PyTorch", "Deep Learning"],
      pay: "$95/hr",
      description:
        "AI engineer with experience developing neural network architectures and optimization models for NVIDIA research labs.",
      available: false,
    },
    {
      Logo: "https://logo.clearbit.com/adobe.com",
      name: "James Anderson",
      work: "UI Designer",
      role: "Freelancer",
      experience: ["Figma", "Sketch", "Photoshop", "UX Prototyping"],
      pay: "$58/hr",
      description:
        "Creative UI designer who crafted seamless design systems and layouts for Adobe Creative Cloud interfaces.",
      available: true,
    },
    {
      Logo: "https://logo.clearbit.com/openai.com",
      name: "Ava Martinez",
      work: "Machine Learning Developer",
      role: "Epic Coders",
      experience: ["Python", "LLMs", "Data Science", "NLP"],
      pay: "$110/hr",
      description:
        "Research-driven ML developer working on conversational AI and NLP systems at OpenAI projects.",
      available: false,
    },
  ];
console.log(hiringDevelopers);

 

  return (
    <div className="parent">

      {hiringDevelopers.map(function (elem,idx) {
          return (
            <div key={idx}>
              <Card
                name={elem.name}
                work={elem.work}
                role={elem.role}
                experience={elem.experience}
                pay={elem.pay}
                description={elem.description}
                available={elem.available}
              />
            </div>
          );
      })}
       
    </div>
  );
}

export default App
