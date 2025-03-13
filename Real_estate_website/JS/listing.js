// Dummy data for property listings (replace with actual data from backend
const properties = [
  { 
    id: 1, 
    title: "Beautiful Home in Suburbia", 
    location: "Suburbia", 
    price: "30000000", 
    imageUrl: "../images/house-img-1.webp", 
    availableFeature:['Elevator', 'Swimming Pool','Lawn','Private theater'],
    unavailableFeature:['Garden','Gym','Park','Security'],
    contact: '0123456789',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.'

  },
  { 
    id: 2, 
    title: "Downtown Loft with City Views", 
    location: "Downtown", 
    price:"50000000", 
    imageUrl: "../images/house-img-2.webp",
    availableFeature:['Elevator', 'Swimming Pool','Lawn','Private theater'],
    unavailableFeature:['Garden','Gym','Park','Security'],
    contact: '0123456789',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.'
  },
  { 
    id: 3, 
    title: "Cozy Cottage by the Lake", 
    location: "Lakefront", 
    price: "25000000", 
    imageUrl: "../images/house-img-3.jpg",
    availableFeature:['Elevator', 'Swimming Pool','Lawn','Private theater'],
    unavailableFeature:['Garden','Gym','Park','Security'],
    contact: '0123456789',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.'

  },
  { 
    id: 4, 
    title: "Modern Apartment in the City Center", 
    location: "City Center", 
    price: "40000000", 
    imageUrl: "../images/house-img-4.webp",
    availableFeature:['Elevator', 'Swimming Pool','Lawn','Private theater'],
    unavailableFeature:['Garden','Gym','Park','Security'],
    contact: '0123456789',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.'

  },
  { 
    id: 5, 
    title: "Rustic Farmhouse in the Countryside", 
    location: "Countryside", 
    price: "35000000", 
    imageUrl: "../images/house-img-5.webp",
    availableFeature:['Elevator', 'Swimming Pool','Lawn','Private theater'],
    unavailableFeature:['Garden','Gym','Park','Security'],
    contact: '0123456789',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.'

  },
  { 
    id: 6, 
    title: "Luxury Villa with Ocean View", 
    location: "Oceanfront", 
    price: "100000000", 
    imageUrl: "../images/house-img-6.webp",
    availableFeature:['Elevator', 'Swimming Pool','Lawn','Private theater'],
    unavailableFeature:['Garden','Gym','Park','Security'],
    contact: '0123456789',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.'

  },
  { 
    id: 7, 
    title: "Historic Mansion in the Heart of Town", 
    location: "Town Center", 
    price: "80000000", 
    imageUrl: "../images/house-img-1.webp",
    availableFeature:['Elevator', 'Swimming Pool','Lawn','Private theater'],
    unavailableFeature:['Garden','Gym','Park','Security'],
    contact: '0123456789',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.'

  },
  { 
    id: 8, 
    title: "Charming Bungalow with Garden", 
    location: "Suburban", 
    price: "20000000", 
    imageUrl: "../images/house-img-1.webp",
    availableFeature:['Elevator', 'Swimming Pool','Lawn','Private theater'],
    unavailableFeature:['Garden','Gym','Park','Security'],
    contact: '0123456789',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.'

  },
  { 
    id: 9, 
    title: "Sleek Penthouse with Skyline Views", 
    location: "City Skyline", 
    price: "70000000", 
    imageUrl: "../images/house-img-1.webp",
    availableFeature:['Elevator', 'Swimming Pool','Lawn','Private theater'],
    unavailableFeature:['Garden','Gym','Park','Security'],
    contact: '0123456789',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.'

  },
  { 
    id: 10, 
    title: "Quaint Cabin in the Woods", 
    location: "Wooded Area", 
    price: "15000000", 
    imageUrl: "../images/house-img-1.webp",
    availableFeature:['Elevator', 'Swimming Pool','Lawn','Private theater'],
    unavailableFeature:['Garden','Gym','Park','Security'],
    contact: '0123456789' 
  }
];
// Function to display property listings
function displayListings(listings) {
  const listingsContainer = document.getElementById('property-listings');
  listingsContainer.innerHTML = '';

  listings.forEach(property => {
    const listingElement = document.createElement('div');
    listingElement.classList.add('property-listing');
    listingElement.innerHTML = `
      <h2>${property.title}</h2>
      <img src="${property.imageUrl}" alt="${property.title}">
      <p><strong>Location:</strong> ${property.location}</p>
      <p><strong>Price: \u20B9</strong>  ${property.price}</p>
      <p style="display:none;">${property.description}</p>
    `;
    listingsContainer.appendChild(listingElement);

    // Add click event listener to each property listing
    listingElement.addEventListener('click', () => {
      const propertyId = property.id;

  // Construct the URL with query parameter for the selected property ID
  const newTabURL = `../HTML/Property_search.html?id=${propertyId}`;

  // Open a new tab/window with the URL
  const newTab = window.open(newTabURL, '_blank');
    });
  });
}

// Function to filter listings based on search query
function filterListings(query) {
  const filteredListings = properties.filter(property => {
    const title = property.title.toLowerCase();
    return title.includes(query.toLowerCase());
  });
  displayListings(filteredListings);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const searchInput = document.getElementById('search-input').value;
  filterListings(searchInput);
}

// Display initial listings
displayListings(properties);

// Add event listener to search form
document.getElementById('search-form').addEventListener('submit', handleFormSubmit);