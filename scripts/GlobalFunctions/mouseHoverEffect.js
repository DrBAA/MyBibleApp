function addGlobalHoverEffect() {
    const shechemElements = document.querySelectorAll('#shechem');
    // Debug: Log the shechemElements
    console.log(shechemElements);
    
    const tooltip = document.createElement('div');
    tooltip.id = 'tooltip';
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = '#f9f9f9';
    tooltip.style.border = '1px solid #ccc';
    tooltip.style.padding = '10px';
    tooltip.style.display = 'none';
    document.body.appendChild(tooltip);

    shechemElements.forEach(shechemElement => {
        shechemElement.addEventListener('mouseover', function() {
            fetch('data/explanations/locations.json')
                .then(response => response.json())
                .then(data => {
                    tooltip.innerHTML = data.shechem.description;
                    tooltip.style.display = 'block';
                })
                .catch(error => console.error('Error fetching location data:', error));
        });

        shechemElement.addEventListener('mousemove', function(event) {
            tooltip.style.top = (event.clientY + 10) + 'px';
            tooltip.style.left = (event.clientX + 10) + 'px';
        });

        shechemElement.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });
}
