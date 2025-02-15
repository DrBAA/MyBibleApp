function loadCharacter(characterName) {
    fetch(`data/${characterName}.json`)
        .then(response => response.json())
        .then(data => {
            const characterDetails = document.getElementById('character-details');
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
            birthAndBackground.innerHTML = data.details.birth_and_background; // This renders the content as HTML
            characterDiv.appendChild(birthAndBackground);

            // Specific to David
            if (data.details.saul_attempts) {
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
            }

            if (data.details.kingship_and_reign) {
                const kingshipAndReign = document.createElement('p');
                kingshipAndReign.innerHTML = data.details.kingship_and_reign;
                characterDiv.appendChild(kingshipAndReign);
            }

            // Specific to Paul
            if (data.details.attempts_on_his_life) {
                const attemptsHeading = document.createElement('h2');
                attemptsHeading.style.textAlign = 'center';
                attemptsHeading.style.marginTop = '20px';
                attemptsHeading.innerHTML = 'ATTEMPTS ON HIS LIFE';
                characterDiv.appendChild(attemptsHeading);

                const attempts = document.createElement('div');
                data.details.attempts_on_his_life.forEach(attempt => {
                    const attemptDiv = document.createElement('div');
                    attemptDiv.innerHTML = `<strong>${attempt.title}</strong><p>${attempt.description}</p>`;
                    attempts.appendChild(attemptDiv);
                });
                characterDiv.appendChild(attempts);
            }

            if (data.details.miracles_performed) {
                const miraclesHeading = document.createElement('h2');
                miraclesHeading.style.textAlign = 'center';
                miraclesHeading.style.marginTop = '20px';
                miraclesHeading.innerHTML = 'MIRACLES PERFORMED';
                characterDiv.appendChild(miraclesHeading);

                const miracles = document.createElement('div');
                data.details.miracles_performed.forEach(miracle => {
                    const miracleDiv = document.createElement('div');
                    miracleDiv.innerHTML = `<strong>${miracle.title}</strong><p>${miracle.description}</p>`;
                    miracles.appendChild(miracleDiv);
                });
                characterDiv.appendChild(miracles);
            }

            if (data.details.additional_details && data.details.additional_details.missionary_journeys) {
                const missionaryHeading = document.createElement('h2');
                missionaryHeading.style.textAlign = 'center';
                missionaryHeading.style.marginTop = '20px';
                missionaryHeading.innerHTML = 'MISSIONARY JOURNEYS';
                characterDiv.appendChild(missionaryHeading);

                const missionaryDetails = document.createElement('p');
                missionaryDetails.innerHTML = data.details.additional_details.missionary_journeys;
                characterDiv.appendChild(missionaryDetails);
            }

            // Specific to Joseph
            if (data.details.betrayal_and_slavery) {
                const betrayalAndSlaveryHeading = document.createElement('h2');
                betrayalAndSlaveryHeading.style.textAlign = 'center';
                betrayalAndSlaveryHeading.style.marginTop = '20px';
                betrayalAndSlaveryHeading.innerHTML = 'BETRAYAL AND SLAVERY';
                characterDiv.appendChild(betrayalAndSlaveryHeading);

                const betrayalAndSlavery = document.createElement('p');
                betrayalAndSlavery.innerHTML = data.details.betrayal_and_slavery;
                characterDiv.appendChild(betrayalAndSlavery);
            }

            if (data.details.reunion_with_family) {
                const reunionWithFamilyHeading = document.createElement('h2');
                reunionWithFamilyHeading.style.textAlign = 'center';
                reunionWithFamilyHeading.style.marginTop = '20px';
                reunionWithFamilyHeading.innerHTML = 'REUNION WITH FAMILY';
                characterDiv.appendChild(reunionWithFamilyHeading);

                const reunionWithFamily = document.createElement('p');
                reunionWithFamily.innerHTML = data.details.reunion_with_family;
                characterDiv.appendChild(reunionWithFamily);
            }

            // Common Sections
            if (data.details.personal_struggles) {
                const personalStruggles = document.createElement('p');
                personalStruggles.innerHTML = data.details.personal_struggles;
                characterDiv.appendChild(personalStruggles);
            }

            if (data.details.legacy) {
                const legacy = document.createElement('p');
                legacy.innerHTML = data.details.legacy;
                characterDiv.appendChild(legacy);
            }

            if (data.details.major_themes) {
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
                        <li><strong>Forgiveness and Reconciliation:</strong> ${data.details.major_themes.forgiveness_and_reconciliation}</li>
                        <li><strong>Resilience and Perseverance:</strong> ${data.details.major_themes.resilience_and_perseverance}</li>
                    </ul>
                `;
                characterDiv.appendChild(majorThemes);
            }

            characterDetails.appendChild(characterDiv);
        })
        .catch(error => console.error('Error fetching character data:', error));
}
