// playPage.js

document.addEventListener('DOMContentLoaded', () => {
    const imageUploadInput = document.getElementById('image-upload');
    const knowledgeCardBtn = document.getElementById('knowledge-card-btn');
    const crewedMissionBtn = document.getElementById('crewed-mission-btn');
    const nonCrewedMissionBtn = document.getElementById('non-crewed-mission-btn');

    // Event listener for the image upload
    imageUploadInput.addEventListener('change', handleImageUpload);

    // Event listeners for mission buttons
    knowledgeCardBtn.addEventListener('click', () => goToMission('Knowledge Card'));
    crewedMissionBtn.addEventListener('click', () => goToMission('Crewed Mission'));
    nonCrewedMissionBtn.addEventListener('click', () => goToMission('Non Crewed Mission'));

    function handleImageUpload(event) {
        const file = event.target.files[0];

        // You can perform actions with the uploaded image, e.g., display it on the page
        // For simplicity, let's log the file name to the console
        console.log('Uploaded image:', file.name);
    }

    function goToMission(missionType) {
        // Perform actions based on the selected mission type
        console.log(`Selected mission: ${missionType}`);
        // You can navigate to a different page or perform other actions here
    }
});
