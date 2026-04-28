const viewProjectsBtn = document.getElementById('viewProjectsBtn');
const projectSection = document.getElementById('projects');

if (viewProjectsBtn && projectSection) {
  viewProjectsBtn.addEventListener('click', () => {
    projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
