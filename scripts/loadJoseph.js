function loadJoseph() {
    fetch('data/joseph.json')
        .then(response => response.json())
        .then(data => {
            const characterDetails = document.getElementById('character-details');
            characterDetails.style.display = 'block'; // Make it visible when content is loaded
            characterDetails.innerHTML = ''; // Clear previous details

            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');

            // Populate character details
            const name = document.createElement('h2');
            name.textContent = data.name;
            characterDiv.appendChild(name);

            const summary = document.createElement('p');
            summary.textContent = data.summary;
            characterDiv.appendChild(summary);

            // Birth and Background

            const birthAndBackgroundHeading = document.createElement('h2');
            birthAndBackgroundHeading.style.textAlign = 'center';
            birthAndBackgroundHeading.style.marginTop = '20px';
            birthAndBackgroundHeading.innerHTML = 'BIRTH AND BACKGROUND';
            characterDiv.appendChild(birthAndBackgroundHeading);

            // const birthAndBackground = document.createElement('p');
            // birthAndBackground.innerHTML = data.birth_and_background.place_of_birth;
            // characterDiv.appendChild(birthAndBackground);


            const birthAndBackground = document.createElement('div');
            data.birth_and_background.forEach(background => {
                const backgroundDiv = document.createElement('div');
                backgroundDiv.innerHTML = `<strong class="json-title">${background.title}</strong><p>${background.description.join('<br>')}</p>`;
                birthAndBackground.appendChild(backgroundDiv);
            });
            characterDiv.appendChild(birthAndBackground);


            // DETAILS
            
            // Betrayal and Slavery
            
            const betrayalAndSlaveryHeading = document.createElement('h2');
            betrayalAndSlaveryHeading.style.textAlign = 'center';
            betrayalAndSlaveryHeading.style.marginTop = '20px';
            betrayalAndSlaveryHeading.innerHTML = 'BETRAYAL AND SLAVERY';
            characterDiv.appendChild(betrayalAndSlaveryHeading);

            const betrayalAndSlavery = document.createElement('p');
            betrayalAndSlavery.innerHTML = data.details.betrayal_and_slavery;
            characterDiv.appendChild(betrayalAndSlavery);

            // Treatment by potiphar - as a slave in Egypt
            const treatmentByPotipharHeading = document.createElement('h2');
            treatmentByPotipharHeading.style.textAlign = 'center';
            treatmentByPotipharHeading.style.marginTop = '20px';
            treatmentByPotipharHeading.innerHTML = 'TREATMENT BY POTIPHAR WHEN A SLAVE IN EGYPT';
            characterDiv.appendChild(treatmentByPotipharHeading);

            const treatmentByPotiphar = document.createElement('p');
            treatmentByPotiphar.innerHTML = data.details.treatment_by_potiphar;
            characterDiv.appendChild(treatmentByPotiphar);            

            // False accusation and imprisonment in Egypt
            const imprisonmentHeading = document.createElement('h2');
            imprisonmentHeading.style.textAlign = 'center';
            imprisonmentHeading.style.marginTop = '20px';
            imprisonmentHeading.innerHTML = 'FALSE ACCUSATION AND IMPRISONMENT IN EGYPT';
            characterDiv.appendChild(imprisonmentHeading);

            const imprisonment = document.createElement('p');
            imprisonment.innerHTML = data.details.false_accusation_and_imprisonment;
            characterDiv.appendChild(imprisonment);            

            // Life in prison
            const lifeInPrisonHeading = document.createElement('h2');
            lifeInPrisonHeading.style.textAlign = 'center';
            lifeInPrisonHeading.style.marginTop = '20px';
            lifeInPrisonHeading.innerHTML = 'LIFE IN PRISON';
            characterDiv.appendChild(lifeInPrisonHeading);

            const lifeInPrison = document.createElement('p');
            lifeInPrison.innerHTML = data.details.life_in_prison;
            characterDiv.appendChild(lifeInPrison);

            // Interpretation of Dreams
            const intepretationOfDreamsHeading = document.createElement('h2');
            intepretationOfDreamsHeading.style.textAlign = 'center';
            intepretationOfDreamsHeading.style.marginTop = '20px';
            intepretationOfDreamsHeading.innerHTML = 'INTERPRETATION OF DREAMS';
            characterDiv.appendChild(intepretationOfDreamsHeading);

            const intepretationOfDreams = document.createElement('p');
            intepretationOfDreams.innerHTML = data.details.interpretation_of_dreams;
            characterDiv.appendChild(intepretationOfDreams);

            // Rise to Power
            const riseToPowerHeading = document.createElement('h2');
            riseToPowerHeading.style.textAlign = 'center';
            riseToPowerHeading.style.marginTop = '20px';
            riseToPowerHeading.innerHTML = 'RISE TO POWER AS GOVERNOR IN EGYPT';
            characterDiv.appendChild(riseToPowerHeading);

            const riseToPower = document.createElement('p');
            riseToPower.innerHTML = data.details.rise_to_power;
            characterDiv.appendChild(riseToPower);

            // reunion with family
            const reunionWithFamilyHeading = document.createElement('h2');
            reunionWithFamilyHeading.style.textAlign = 'center';
            reunionWithFamilyHeading.style.marginTop = '20px';
            reunionWithFamilyHeading.innerHTML = 'REUNION WITH FAMILY';
            characterDiv.appendChild(reunionWithFamilyHeading);

            const reunionWithFamily = document.createElement('p');
            reunionWithFamily.innerHTML = data.details.reunion_with_family;
            characterDiv.appendChild(reunionWithFamily);

            // Joseph's children
            const josephsChildrenHeading = document.createElement('h2');
            josephsChildrenHeading.style.textAlign = 'center';
            josephsChildrenHeading.style.marginTop = '20px';
            josephsChildrenHeading.innerHTML = 'JOSEPH\'S CHILDREN';
            characterDiv.appendChild(josephsChildrenHeading);

            const josephsChildren = document.createElement('p');
            josephsChildren.innerHTML = data.details.josephs_children;
            characterDiv.appendChild(josephsChildren);            

            // Faith and integrity
            const faithAndIntegrityHeading = document.createElement('h2');
            faithAndIntegrityHeading.style.textAlign = 'center';
            faithAndIntegrityHeading.style.marginTop = '20px';
            faithAndIntegrityHeading.innerHTML = 'FAITH AND INTEGRITY';
            characterDiv.appendChild(faithAndIntegrityHeading);

            const faithAndIntegrity = document.createElement('p');
            faithAndIntegrity.innerHTML = data.details.faith_and_integrity;
            characterDiv.appendChild(faithAndIntegrity);   

            // End of life
            const endOfLifeHeading = document.createElement('h2');
            endOfLifeHeading.style.textAlign = 'center';
            endOfLifeHeading.style.marginTop = '20px';
            endOfLifeHeading.innerHTML = 'END OF LIFE';
            characterDiv.appendChild(endOfLifeHeading);
            console.log('End of life heading appended');

            // Insert span for Shechem dynamically
            const endOfLifeContent = data.details.end_of_life.replace(
                'Shechem',
                "<span id='shechem'>Shechem</span>"
            );

            // Debug: Check if #shechem span is in the DOM
            console.log('endOfLifeContent created:', endOfLifeContent); // Log the created content
            console.log(document.querySelectorAll('#shechem'));     
            
            const endOfLife = document.createElement('p');
            endOfLife.innerHTML = data.details.end_of_life;
            characterDiv.appendChild(endOfLife); 
            console.log('End of life content appended'); // Log after appending content // Debug: Check if #shechem span is in the DOM after appending
            console.log('Check if #shechem span is in the DOM after appending:', document.querySelectorAll('#shechem'));


            // Legacy

            const legacyHeading = document.createElement('h2');
            legacyHeading.style.textAlign = 'center';
            legacyHeading.style.marginTop = '20px';
            legacyHeading.innerHTML = 'LEGACY';
            characterDiv.appendChild(legacyHeading);            

            const legacy = document.createElement('p');
            legacy.innerHTML = data.details.legacy;
            characterDiv.appendChild(legacy);

            // Major themes

            const themesHeading = document.createElement('h2');
            themesHeading.style.textAlign = 'center';
            themesHeading.style.marginTop = '20px';
            themesHeading.innerHTML = 'MAJOR THEMES';
            characterDiv.appendChild(themesHeading);

            const majorThemes = document.createElement('div');
            majorThemes.innerHTML = `
                <ul>
                    <li><strong>Faith and Trust in God:</strong> ${data.details.major_themes.faith_and_trust_in_god}</li>
                    <li><strong>Forgiveness and Reconciliation:</strong> ${data.details.major_themes.forgiveness_and_reconciliation}</li>
                    <li><strong>Resilience and Perseverance:</strong> ${data.details.major_themes.resilience_and_perseverance}</li>
                </ul>
            `;
            characterDiv.appendChild(majorThemes);

            characterDetails.appendChild(characterDiv);


            // Ensure to call the function to hide headings and display back button
            // Ensure to call the function to hide headings and display back button
            showCharacterDetails('Paul');
            console.log('showCharacterDetails called'); // Log after calling showCharacterDetails

            // Call the global hover effect function         
            // Call the global hover effect function after the content is inserted
            addGlobalHoverEffect();
            console.log('addGlobalHoverEffect called'); // Log after calling addGlobalHoverEffect                     

        })
        .catch(error => console.error('Error fetching character data:', error));
}
