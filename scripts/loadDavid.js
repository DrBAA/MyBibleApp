function loadDavid() {
    fetch('data/david.json')
        .then(response => response.json())
        .then(data => {
            const characterDetails = document.getElementById('character-details');
            characterDetails.style.display = 'block'; // Make it visible when content is loaded
            characterDetails.innerHTML = ''; // Clear previous details

            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');

            // Name
            const name = document.createElement('h2');
            name.textContent = data.name;
            characterDiv.appendChild(name);

            // Summary
            const summary = document.createElement('p');
            summary.textContent = data.summary;
            characterDiv.appendChild(summary);

            // Birth and Background
            const birthAndBackground = document.createElement('p');
            birthAndBackground.innerHTML = data.details.birth_and_background;
            characterDiv.appendChild(birthAndBackground);

            // Rise to Power
            if (data.details.rise_to_power) {
                const riseToPower = document.createElement('p');
                riseToPower.innerHTML = data.details.rise_to_power;
                characterDiv.appendChild(riseToPower);
            }

            // Saul Attempts on His Life
            const attemptsHeading = document.createElement('h2');
            attemptsHeading.style.textAlign = 'center';
            attemptsHeading.style.marginTop = '20px';
            attemptsHeading.innerHTML = 'SAUL ATTEMPTS ON HIS LIFE';
            characterDiv.appendChild(attemptsHeading);

            const attempts = document.createElement('div');
            data.details.saul_attempts.forEach(attempt => {
                const attemptDiv = document.createElement('div');
                attemptDiv.innerHTML = `<strong>${attempt.title}</strong><p>${attempt.description}</p>`;
                attempts.appendChild(attemptDiv);
            });
            characterDiv.appendChild(attempts);

            // Kingship and Reign
            const kingshipAndReign = document.createElement('p');
            kingshipAndReign.innerHTML = data.details.kingship_and_reign;
            characterDiv.appendChild(kingshipAndReign);

            // Personal Struggles
            const personalStruggles = document.createElement('p');
            personalStruggles.innerHTML = data.details.personal_struggles;
            characterDiv.appendChild(personalStruggles);

            // Legacy
            const legacy = document.createElement('p');
            legacy.innerHTML = data.details.legacy;
            characterDiv.appendChild(legacy);

            // Major Themes
            const themesHeading = document.createElement('h2');
            themesHeading.style.textAlign = 'center';
            themesHeading.style.marginTop = '20px';
            themesHeading.innerHTML = 'MAJOR THEMES';
            characterDiv.appendChild(themesHeading);

            const majorThemes = document.createElement('div');
            majorThemes.innerHTML = `
                <ul>
                    <li><strong>Faith and Trust in God:</strong> ${data.details.major_themes.faith_and_trust_in_god}</li>
                    <li><strong>Leadership and Governance:</strong> ${data.details.major_themes.leadership_and_governance}</li>
                    <li><strong>Repentance and Redemption:</strong> ${data.details.major_themes.repentance_and_redemption}</li>
                    <li><strong>Worship and Praise:</strong> ${data.details.major_themes.worship_and_praise}</li>
                </ul>
            `;
            characterDiv.appendChild(majorThemes);

            characterDetails.appendChild(characterDiv);
            
            // Ensure to call the function to hide headings and display back button
            showCharacterDetails('Paul'); // Added this line
            
        })
        .catch(error => console.error('Error fetching character data:', error));
}
