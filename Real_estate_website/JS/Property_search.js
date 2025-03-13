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
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.',
      additional_photos:[
        "../images/house-img-1.webp",
          "../images/hall-img-1.webp",
          '../images/kitchen-img-1.webp',
          "../images/bathroom-img-1.webp"
      ],
      loc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110877854.70100297!2d-19.727318199999996!3d31.99550765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9163e828845%3A0x740ae65c91a88620!2sMovietime%3A%20Suburbia%2C%20Bandra%20West!5e0!3m2!1sen!2sin!4v1712565085203!5m2!1sen!2sin"
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
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.',
      additional_photos:[
        "../images/house-img-2.webp",
          "../images/hall-img-2.webp",
          "../images/kitchen-img-2.webp",
          "../images/bathroom-img-2.webp"
      ],
      loc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23587.56176948398!2d-71.09813741117033!3d42.3543500522985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370832503ad5b%3A0x18d02d6e8684bd98!2sDowntown%2C%20Boston%2C%20MA%2C%20USA!5e0!3m2!1sen!2sin!4v1712573573192!5m2!1sen!2sin"
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
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.',
      additional_photos:[
        "../images/house-img-3.jpg",
          "../images/hall-img-3.webp",
          '../images/kitchen-img-3.webp',
          "../images/bathroom-img-3.webp"
      ],
      loc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94877.53338294996!2d-71.42949580273438!3d42.00192980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e46150ead3d889%3A0x706051e2feb9c630!2sLakefront%20Living%20International%2C%20LLC!5e0!3m2!1sen!2sin!4v1712573750504!5m2!1sen!2sin"
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
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.',
      additional_photos:[
        "../images/house-img-4.webp",
          "../images/hall-img-4.webp",
          '../images/kitchen-img-4.webp',
          "../images/bathroom-img-4.jpg"
      ],
      loc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95235.52223756995!2d-71.61074690273436!3d41.761284599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e44edc42f7efc1%3A0xf6e1cb348d259fb!2sGarden%20City%20Center!5e0!3m2!1sen!2sin!4v1712573833683!5m2!1sen!2sin"
  
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
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.',
      additional_photos:[
        "../images/house-img-5.webp",
          '../images/hall-img-5.webp',
          "../images/kitchen-img-5.webp",
          "../images/bathroom-img-5.webp"
      ],
      loc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.731147998717!2d-71.55209591487026!3d41.85561329709958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e447a20de34239%3A0x8e563c9fd58f5ddf!2sCountryside%20Dr%2C%20Johnston%2C%20RI%2002919%2C%20USA!5e0!3m2!1sen!2sin!4v1712573890570!5m2!1sen!2sin"
  
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
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.',
      additional_photos:[
        "../images/house-img-6.webp",
          "../images/hall-img-6.webp.webp",
          '../images/kitchen-img-6.webp',
          "../images/bathroom-img-6.jpg"
      ],
      loc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142434.2910298263!2d-75.69169119196991!3d39.722048247817526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89fb3220f9c937c1%3A0x2a2ddd3f0207a213!2sThe%20Ocean%20View!5e0!3m2!1sen!2sin!4v1712573934722!5m2!1sen!2sin" 
  
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
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.',
      additional_photos:[
        "../images/house-img-1.webp",
          "../images/hall-img-1.webp",
          '../images/kitchen-img-1.webp',
          "../images/bathroom-img-1.webp"
      ],
      loc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142434.2910298263!2d-75.69169119196991!3d39.722048247817526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89fb3220f9c937c1%3A0x2a2ddd3f0207a213!2sThe%20Ocean%20View!5e0!3m2!1sen!2sin!4v1712573934722!5m2!1sen!2sin" 

  
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
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.',
      additional_photos:[
        "../images/house-img-1.webp",
          "../images/hall-img-1.webp",
          '../images/kitchen-img-1.webp',
          "../images/bathroom-img-1.webp"
      ],
      loc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142434.2910298263!2d-75.69169119196991!3d39.722048247817526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89fb3220f9c937c1%3A0x2a2ddd3f0207a213!2sThe%20Ocean%20View!5e0!3m2!1sen!2sin!4v1712573934722!5m2!1sen!2sin" 

  
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
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.',
      additional_photos:[
        "../images/house-img-1.webp",
          "../images/hall-img-1.webp",
          '../images/kitchen-img-1.webp',
          "../images/bathroom-img-1.webp"
      ],
      loc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142434.2910298263!2d-75.69169119196991!3d39.722048247817526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89fb3220f9c937c1%3A0x2a2ddd3f0207a213!2sThe%20Ocean%20View!5e0!3m2!1sen!2sin!4v1712573934722!5m2!1sen!2sin" 

  
    },
    { 
      id: 10, 
      title: "Quaint Cabin in the Woods", 
      location: "Wooded Area", 
      price: "15000000", 
      imageUrl: "../images/house-img-1.webp",
      availableFeature:['Elevator', 'Swimming Pool','Lawn','Private theater'],
      unavailableFeature:['Garden','Gym','Park','Security'],
      contact: '0123456789',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum facilis tempore tenetur vero. Deserunt odio necessitatibus eligendi quasi possimus molestias ex dolor? Eius, rerum nam. Ipsam deleniti maxime rerum.',
      additional_photos:[
        "../images/house-img-1.webp",
          "../images/hall-img-1.webp",
          '../images/kitchen-img-1.webp',
          "../images/bathroom-img-1.webp"
      ],
      loc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142434.2910298263!2d-75.69169119196991!3d39.722048247817526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89fb3220f9c937c1%3A0x2a2ddd3f0207a213!2sThe%20Ocean%20View!5e0!3m2!1sen!2sin!4v1712573934722!5m2!1sen!2sin" 

    }
];

// Fetch property details based on ID from query parameters
const urlParams = new URLSearchParams(window.location.search);
const propertyId = urlParams.get('id');

// Print the property ID
console.log("Property ID:", propertyId);

// Find the property with the matching ID from the properties array
const property = properties.find(property => property.id === parseInt(propertyId));

// Function to generate HTML for feature list with tick and cross marks
function generateFeatureList(features, available) {
let listHTML = '';
features.forEach(feature => {
    const icon = available ? '&#10004;' : '&#10008;'; // Tick mark or cross mark
    listHTML += `<li>${icon} ${feature}</li>`;
});
return listHTML;
}

// Display property details
if (property) {
let additionalPhotosHTML = '';
property.additional_photos.forEach(photo => {
    additionalPhotosHTML += `<img src="${photo}" class="photo" onclick="swapMainPhoto('${photo}')">`;
});

// Generate HTML for available features with tick mark
const availableFeaturesHTML = generateFeatureList(property.availableFeature, true);

// Generate HTML for unavailable features with cross mark
const unavailableFeaturesHTML = generateFeatureList(property.unavailableFeature, false);

document.getElementById('selected-property').innerHTML = `
    <h2>${property.title}</h2>
    <img src="${property.imageUrl}" alt="${property.title}" id="mainPhoto">
    <div class="photo-grid">${additionalPhotosHTML}</div>
    <p><strong>Location:</strong> ${property.location}</p>
    <iframe src="${property.loc}"></iframe>
    <p><strong>Price:</strong> ${property.price}</p>
    <p>${property.description}</p>
    <p>Contact for more information: ${property.contact}</p>
    <hr>
    <div class="features">
    <div class="available_features"><h3>Available Features:</h3>
    <ul>${availableFeaturesHTML}</ul></div>
    <div class="unavailable_features"><h3>Unavailable Features:</h3>
    <ul>${unavailableFeaturesHTML}</ul></div></div>
    
    <hr>
`;
}  
else {
// Property not found
document.getElementById('selected-property').innerHTML = '<p>Property not found.</p>';
}

function swapMainPhoto(newSrc) {
  document.getElementById('mainPhoto').src = newSrc;
}


function composeEmail() {
  var email = 'vikramadhanvi_paduchuri@srmap.edu.in';
  var message = document.getElementById('message').value;
  var subject = "Interested in "+property.title;
  var optionIds = ["opt0", "opt1", "opt2"];
  var name = document.getElementById('name').value;
  var selectedOptionId = document.getElementById("selection").value;

  if (selectedOptionId === 'opt0') {
      alert('Please select a valid purpose.');
      return;
  } 
  else if (selectedOptionId === 'opt1') {
      message = "Hello sir, my name is " + name + ". I am interested in renting your property with the following details:\n\n" + message;
  }
  else if (selectedOptionId === 'opt2') {
    message = "Hello sir, my name is " + name + ". I am interested in Buying your property with the following details:\n\n" + message;
}

  var encodedMessage = encodeURIComponent(message);
  var encodedSubject = encodeURIComponent(subject);

  var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=" + encodedSubject + "&body=" + encodedMessage;

  window.open(gmailUrl, '_blank');
}


