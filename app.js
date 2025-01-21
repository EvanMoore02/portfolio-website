const express = require('express');
const path = require('path');
const app = express(); // This line is necessary to initialize the app
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Portfolio',
    name: 'Evan Moore',
    bio: 'A brief description about you.',
    resume: { // Make sure this object is here and is defined
      name: 'Evan Moore',
      address: '6 Bennington Street, Ottawa, Ontario K2G 5S5',
      cell: '(343) 262-0613',
      email: 'eqmoore1@gmail.com',
      skills: [
        'Python', 'R', 'Matlab', 'C++', 'SQL', 'Java', 'Javascript', 'HTML', 'CSS', 'C',
        'Git', 'Terraform', 'Qt', 'Node.js', 'Express.js', 'React',
        'Power BI', 'Power Apps', 'Qlik Sense',
        'AWS Certified Cloud Practitioner'
      ],
      workExperience: [
        {
          company: 'Canadian Internet Registration Authority (CIRA)',
          position: 'Junior Software Developer Co-Op',
          duration: 'May 2024 – August 2024',
          responsibilities: [
            'Decreased CIRA’s recovery time objective by developing a disaster recovery site with automated CI/CD pipelines.',
            'Implemented monitoring, logging, and data source verification to ensure seamless connectivity to the DR site.',
            'Automated the creation of Athena connectors and AWS Glue Data Catalog tables using Terraform.'
          ]
        },
        {
          company: 'CIRA',
          position: 'Data Analyst Co-Op',
          duration: 'May 2023 – August 2023',
          responsibilities: [
            'Improved CIRA’s forecasting capabilities for sales by 35%.',
            'Created dashboards using Qlik Sense and provided daily reports to CIRA staff on key performance indicators.'
          ]
        },
        {
          company: 'Canada Border Services Agency',
          position: 'Data Analyst Co-Op',
          duration: 'May 2022 – April 2023',
          responsibilities: [
            'Created dashboards and flowcharts to inform human resource planning.',
            'Used data analysis and visualisation tools like Power BI, Power Apps, and Python to present complex data.'
          ]
        },
        {
          company: 'Hospice Palliative Care Ontario',
          position: 'Web Developer',
          duration: 'May 2021 – August 2021',
          responsibilities: [
            'Collaborated on migrating client data to a custom-built information management system.',
            'Updated and enhanced the Windsor Essex Community Care Center website for better user experience.'
          ]
        }
      ],
      projects: [
        {
          name: 'AED Simulator',
          description: 'Developed a GUI simulating the process of using an AED on a patient using C++ and Qt.'
        },
        {
          name: 'Atari 2600 Video Game Implementation Using Reinforcement Learning',
          description: 'Implemented deep learning algorithms for PAC-MAN using reinforcement learning techniques.'
        },
        {
          name: 'Predictive Analysis of Dissolved Oxygen Levels',
          description: 'Used supervised learning techniques like SVM and Random Forest Classifier to predict dissolved oxygen levels.'
        }
      ],
      education: {
        school: 'Carleton University, Ottawa',
        degree: 'Honours Bachelor of Science in Computer Science (Co-op)',
        minors: 'Mathematics',
        awards: ['Entrance Scholarship', 'Faculty Scholarship', 'Deans’ Honour List']
      }
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
