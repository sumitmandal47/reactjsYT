

import Card from "./components/Card";
const App = (props) => {
 
  const jobOpenings = [
    {
      brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      name: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Mountain View, USA",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      name: "Amazon",
      datePosted: "2 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hr",
      location: "Seattle, USA",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png",
      name: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$70/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo:
        "https://i.pinimg.com/736x/95/d9/53/95d9534fab30d2a09cab60a9b2d65ec3.jpg",
      name: "Meta",
      datePosted: "3 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$100/hr",
      location: "Menlo Park, USA",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      name: "Netflix",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hr",
      location: "Los Gatos, USA",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      name: "Microsoft",
      datePosted: "5 weeks ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Redmond, USA",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg",
      name: "Tesla",
      datePosted: "8 days ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$78/hr",
      location: "Austin, USA",
    },
    {
      brandLogo:
        "https://www.nvidia.com/content/nvidiaGDC/us/en_US/about-nvidia/legal-info/logo-brand-usage/_jcr_content/root/responsivegrid/nv_container_392921705/nv_container/nv_image.coreimg.100.1070.png/1703060329053/nvidia-logo-vert.png",
      name: "NVIDIA",
      datePosted: "4 days ago",
      post: "AI Research Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Santa Clara, USA",
    },
    {
      brandLogo:
        "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
      name: "Adobe",
      datePosted: "10 weeks ago",
      post: "UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "San Jose, USA",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2024/07/OpenAI-Emblem.png",
      name: "OpenAI",
      datePosted: "6 days ago",
      post: "Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "San Francisco, USA",
    },
  ];

console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (elem,idx){
        return (
          <div key={idx}>
            
            <Card company={elem.name} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} pay={elem.pay} location={elem.location} />
          </div>
        );
     })}
    </div>
  );
}

export default App
