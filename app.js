// Function to load destinations data from destinations.json
function loadDestinations() {
    fetch('destinations.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayDestinations(data.destinations);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Function to display destinations on the page
function displayDestinations(destinations) {
    const destinationList = document.getElementById('destination-details');
    destinationList.innerHTML = ''; // Clear the content before adding new items

    destinations.forEach(destination => {
        const destinationItem = document.createElement('div');
        destinationItem.classList.add('destination-item');
        
        destinationItem.innerHTML = `
            <h3>${destination.name}, ${destination.country}</h3>
            <p>${destination.description}</p>
            <p><strong>Peak Season:</strong> ${destination.peak_season}</p>
            <img src="images/${destination.image}" alt="${destination.name}" style="width: 300px; height: auto;">
        `;
        
        destinationList.appendChild(destinationItem);
    });
}

// Load destinations when the page is ready
document.addEventListener('load', function() {
    loadDestinations();
});
