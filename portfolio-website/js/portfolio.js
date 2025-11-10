// This file handles the functionality specific to the portfolio section, such as filtering or displaying project details.

document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Project One',
            description: 'Description of Project One',
            link: 'https://example.com/project-one',
            image: 'assets/images/project-one.jpg'
        },
        {
            title: 'Project Two',
            description: 'Description of Project Two',
            link: 'https://example.com/project-two',
            image: 'assets/images/project-two.jpg'
        },
        {
            title: 'Project Three',
            description: 'Description of Project Three',
            link: 'https://example.com/project-three',
            image: 'assets/images/project-three.jpg'
        }
    ];

    const portfolioGrid = document.getElementById('portfolio-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('portfolio-item');

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        portfolioGrid.appendChild(projectCard);
    });
});