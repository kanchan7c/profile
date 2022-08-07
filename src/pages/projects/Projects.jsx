import React, { useState, useEffect } from 'react';
import Card from '../../components/card/Card';
import './Projects.scss';

const Projects = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('../data.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className='projects_page'>
      {data.data?.map((project, index) => (
        <Card
          title={project?.title}
          data={project?.date}
          description={project?.description}
          image={project?.imageURL}
          visit={project?.visitingURL}
          code={project?.codeURL}
          key={index}
        />
      ))}
    </div>
  );
};

export default Projects;
