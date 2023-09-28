// playPage.js

document.addEventListener('DOMContentLoaded', () => {
    const knowledgeCardBtn = document.getElementById('knowledge-card-btn');
    const crewedMissionBtn = document.getElementById('crewed-mission-btn');
    const nonCrewedMissionBtn = document.getElementById('non-crewed-mission-btn');

    // Replace 'YOUR_IMAGE_URL' with the actual URL of your image on Google Drive
    const imageUrl = 'https://drive.google.com/uc?id=11JLdgHhekYPit1Vswco9rKJ4T_s5AG0J';

    // Set the source of the image tag
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Mission Image">`;

    // Event listeners for mission buttons
    knowledgeCardBtn.addEventListener('click', () => goToMission('Knowledge Card'));
    crewedMissionBtn.addEventListener('click', () => goToMission('Crewed Mission'));
    nonCrewedMissionBtn.addEventListener('click', () => goToMission('Non Crewed Mission'));

    function goToMission(missionType) {
        // Perform actions based on the selected mission type
        console.log(`Selected mission: ${missionType}`);
        // You can navigate to a different page or perform other actions here
    }
});
