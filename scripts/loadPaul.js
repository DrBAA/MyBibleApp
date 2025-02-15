function loadPaul() {
    fetch('data/paul.json')
        .then(response => response.json())
        .then(data => {
            const characterDetails = document.getElementById('character-details');
            characterDetails.style.display = 'block'; // Make it visible when content is loaded
            characterDetails.innerHTML = ''; // Clear previous details

            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');

            // Populate character details
            // Name
            const name = document.createElement('h2');
            name.textContent = data.name;
            name.classList.add('character-name'); // Add this line to assign a class
            characterDiv.appendChild(name);

            const summary = document.createElement('p');
            summary.textContent = data.summary;
            characterDiv.appendChild(summary);

            const birthAndBackground = document.createElement('p');
            birthAndBackground.innerHTML = data.details.birth_and_background;
            characterDiv.appendChild(birthAndBackground);

            const attemptsHeading = document.createElement('h2');
            attemptsHeading.style.textAlign = 'center';
            attemptsHeading.style.marginTop = '20px';
            attemptsHeading.innerHTML = 'ATTEMPTS ON HIS LIFE';
            characterDiv.appendChild(attemptsHeading);

            const attempts = document.createElement('div');
            data.details.attempts_on_his_life.forEach(attempt => {
                const attemptDiv = document.createElement('div');
                attemptDiv.innerHTML = `<strong class="json-title">${attempt.title}</strong><p>${attempt.description.join('<br>')}</p>`;
                attempts.appendChild(attemptDiv);
            });
            characterDiv.appendChild(attempts);
            

            const miraclesHeading = document.createElement('h2');
            miraclesHeading.style.textAlign = 'center';
            miraclesHeading.style.marginTop = '20px';
            miraclesHeading.innerHTML = 'MIRACLES PERFORMED';
            characterDiv.appendChild(miraclesHeading);

            const miracles = document.createElement('div');
            data.details.miracles_performed.forEach(miracle => {
                const miracleDiv = document.createElement('div');
                miracleDiv.innerHTML = `<strong class="json-title">${miracle.title}</strong><p>${miracle.description.join('<br>')}</p>`;
                miracles.appendChild(miracleDiv);
            });
            characterDiv.appendChild(miracles);
            

            const missionaryHeading = document.createElement('h2');
            missionaryHeading.style.textAlign = 'center';
            missionaryHeading.style.marginTop = '20px';
            missionaryHeading.innerHTML = 'MISSIONARY JOURNEYS';
            characterDiv.appendChild(missionaryHeading);

            const missionaryDetails = document.createElement('p');
            missionaryDetails.innerHTML = data.details.additional_details.missionary_journeys;
            characterDiv.appendChild(missionaryDetails);

            const themesHeading = document.createElement('h2');
            themesHeading.style.textAlign = 'center';
            themesHeading.style.marginTop = '20px';
            themesHeading.innerHTML = 'MAJOR THEMES';
            characterDiv.appendChild(themesHeading);

            const majorThemes = document.createElement('div');
            majorThemes.innerHTML = `
                <ul>
                    <li><strong>Conversion:</strong> ${data.details.additional_details.major_themes.conversion}</li>
                    <li><strong>Missionary Work:</strong> ${data.details.additional_details.major_themes.missionary_work}</li>
                    <li><strong>Writings:</strong> ${data.details.additional_details.major_themes.writings}</li>
                    <li><strong>Suffering:</strong> ${data.details.additional_details.major_themes.suffering}</li>
                </ul>
            `;
            characterDiv.appendChild(majorThemes);

            characterDetails.appendChild(characterDiv);
            
            // Ensure to call the function to hide headings and display back button
            showCharacterDetails('Paul'); // Added this line
            
        })
        .catch(error => console.error('Error fetching character data:', error));
}
