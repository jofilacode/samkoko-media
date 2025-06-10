import '../styles/programs.css';

const programsData = [
  {
    title: "Information Technology",
    items: [
      "Basic computer handling & programming",
      "Troubleshooting & operations",
      "Internet navigation",
      "Web development & graphics",
      "Cybersecurity fundamentals",
    ],
    image: "/computer.png" 
  },
  {
    title: "Film Production",
    items: [
      "Filmmaking & directing",
      "Cinematography & camera operation",
      "Lighting & video editing",
      "Live streaming",
      "Content creation",
    ],
    image: "/camera.png",
  },
  {
    title: "Audio Production",
    items: [
      "Sound engineering",
      "Music production",
      "Mixing and mastering",
      "DJ basics",
    ],
    image: "https://cdn-icons-png.flaticon.com/512/727/727218.png",
  },
  {
    title: "Electrical & Electronics",
    items: [
      "Basics of AC & DC systems",
      "Maintenance techniques",
    ],
    image: "/electrical.png",
  },
  {
    title: "Painting & Decoration",
    items: ["Introduction to painting", "Decorative skills"],
    image: "/painting.png",
  },
  {
    title: "Event Planning",
    items: ["Event planning fundamentals", "Basic management skills"],
    image: "/planing.png",
  },
  {
    title: "Fashion Design & Tailoring",
    items: ["Fashion design theory", "Basic tailoring techniques"],
    image: "/fashion.png",
  },
  {
    title: "Salon & Make-up",
    items: ["Basic salon operations", "Make-up artistry"],
    image: "/makeup.png",
  },
  {
    title: "Vulcanizing",
    items: ["Fundamentals of vulcanizing"],
    image: "vulcan.png",
  },
  {
    title: "Shoe Production",
    items: ["Footwear creation basics"],
    image: "shoe.png",
  },
  {
    title: "Driving & Road Safety",
    items: ["Driving techniques", "Road safety awareness"],
    image: "driving.png",
  },
];

const Programs = () => {
  return (
    <div className="dashboard programs-page">
      {/* Banner */}
      <div className="programs-banner">
        <h1>Our Skill Empowerment Programs</h1>
      </div>

      {/* Grid */}
      <div className="programs-grid">
        {programsData.map((program, index) => (
          <div className="program-card" key={index}>
            <img src={program.image} alt={program.title} />
            <h3>{program.title}</h3>
            <ul>
              {program.items.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;