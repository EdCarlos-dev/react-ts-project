
const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return '#' + color;
};

const TechDivs = () => {
  const technologies = ['CSS', 'HTML', 'JavaScript', 'React', 'Node'];

  return (
    <div className="tech-container">
      {technologies.map((tech, index) => (
        <div key={index} style={{ backgroundColor: hexaColor() }} className="tech-item">
          {tech}
        </div>
      ))}
    </div>
  );
};

export default TechDivs;
