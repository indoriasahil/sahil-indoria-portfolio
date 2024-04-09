document.addEventListener('DOMContentLoaded', function () {
    // more script
    var projectButtons = document.querySelectorAll('.project .btn');
    projectButtons.forEach(function (button) {
        button.addEventListener('mouseover', function () {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', function () {
            button.style.transform = 'scale(1)';
        });
    });
});

function showProjectDetails(title, description, technologies) {
    alert(`Project: ${title}\nDescription: ${description}\nTechnologies: ${technologies}`);
}

function openProjectModal(projectUrl) {
    window.open(projectUrl, '_blank');
}

function validateForm() {
    var message = document.getElementById('message').value;
    if (message.trim() === '') {
        alert('Please enter a message before submitting.');
        return false;
    }
    return true;
}
