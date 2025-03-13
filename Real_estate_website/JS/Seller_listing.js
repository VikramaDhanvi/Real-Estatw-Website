// This is where you would add JavaScript code to fetch and display properties
// Since this is front-end only, you won't actually fetch data from a server
// Instead, this is a placeholder for any client-side interactions you may need

// Sample data for properties (replace this with actual data from your backend)
const properties = [
    { id: 1, title: "House in the suburbs", price: "$250,000" },
    { id: 2, title: "Apartment in the city", price: "$150,000" },
    { id: 3, title: "Vacation home by the beach", price: "$500,000" }
];

// Function to display properties
function displayProperties() {
    const propertiesList = document.getElementById('properties-list');

    // Clear previous content
    propertiesList.innerHTML = '';

    // Loop through properties and create HTML elements to display them
    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property');

        const propertyTitle = document.createElement('h3');
        propertyTitle.textContent = property.title;

        const propertyPrice = document.createElement('p');
        propertyPrice.textContent = `Price: ${property.price}`;

        propertyDiv.appendChild(propertyTitle);
        propertyDiv.appendChild(propertyPrice);

        propertiesList.appendChild(propertyDiv);
    });
}

// Call the function to display properties when the page loads
window.onload = displayProperties;
