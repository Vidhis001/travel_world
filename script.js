const destinations = [
    {
        name: "Taj Mahal, Agra",
        position: { lat: 27.1751, lng: 78.0421 },
        post: {
            title: "Marvel at the Taj Mahal",
            description: "One of the Seven Wonders of the World, the Taj Mahal is a symbol of love and architectural beauty.",
            images: ["taj1.jpg", "taj2.jpg", "taj3.jpg"]
        }
    },
    {
        name: "Jaipur, Rajasthan",
        position: { lat: 26.9124, lng: 75.7873 },
        post: {
            title: "Explore the Pink City - Jaipur",
            description: "Known for its royal heritage, Jaipur is home to iconic palaces and forts like the Amer Fort and Hawa Mahal.",
            images: ["jp1.jpg", "jp2.jpg", "jp3.jpg"]
        }
    },
    {
        name: "Varanasi, Uttar Pradesh",
        position: { lat: 25.3176, lng: 82.9739 },
        post: {
            title: "Experience the Spirituality of Varanasi",
            description: "Varanasi, one of the oldest cities in the world, is a spiritual hub along the banks of the Ganges River.",
            images: ["varanasi1.jpg", "varanasi2.jpg", "varanasi3.jpg"]
        }
    },
    {
        name: "Kerala Backwaters",
        position: { lat: 9.9312, lng: 76.2673 },
        post: {
            title: "Cruise the Kerala Backwaters",
            description: "A network of interconnected canals, rivers, and lakes, the Kerala backwaters offer a peaceful retreat.",
            images: ["kerala1.jpg", "kerala2.jpg", "kerala3.jpg"]
        }
    },
    {
        name: "Golden Temple, Amritsar",
        position: { lat: 31.6200, lng: 74.8765 },
        post: {
            title: "Visit the Golden Temple",
            description: "The Golden Temple, a sacred site for Sikhs, is renowned for its stunning architecture and spiritual ambiance.",
            images: ["goldentemple1.jpg", "goldentemple2.jpg", "goldentemple3.jpg"]
        }
    },
    {
        name: "Goa Beaches",
        position: { lat: 15.2993, lng: 74.1240 },
        post: {
            title: "Relax on the Beaches of Goa",
            description: "Known for its vibrant nightlife and beautiful beaches, Goa is a popular destination for travelers.",
            images: ["goa1.jpg", "goa2.jpg", "goa3.jpg"]
        }
    },
    {
        name: "Ranthambore National Park, Rajasthan",
        position: { lat: 26.0173, lng: 76.5026 },
        post: {
            title: "Safari in Ranthambore National Park",
            description: "One of India’s largest national parks, Ranthambore is famous for its tiger reserve and rich wildlife.",
            images: ["ranthambore1.jpg", "ranthambore2.jpg", "ranthambore3.jpg"]
        }
    },
    {
        name: "Mysore Palace, Karnataka",
        position: { lat: 12.3051, lng: 76.6551 },
        post: {
            title: "Admire Mysore Palace",
            description: "An architectural masterpiece, the Mysore Palace is the epitome of grandeur and royal heritage.",
            images: ["mysore1.jpg", "mysore2.jpg", "mysore3.jpg"]
        }
    },
    {
        name: "Jaisalmer Fort, Rajasthan",
        position: { lat: 26.9157, lng: 70.9083 },
        post: {
            title: "Explore the Golden Jaisalmer Fort",
            description: "One of the largest forts in the world, the Jaisalmer Fort is known for its golden hues and intricate architecture.",
            images: ["jaisalmer1.jpg", "jaisalmer2.jpg", "jaisalmer3.jpg"]
        }
    },
    {
        name: "Rishikesh, Uttarakhand",
        position: { lat: 30.0869, lng: 78.2676 },
        post: {
            title: "Experience Adventure and Spirituality in Rishikesh",
            description: "Rishikesh is a destination for yoga, adventure sports, and a gateway to the Himalayas.",
            images: ["rishikesh1.jpg", "rishikesh2.jpg", "rishikesh3.jpg"]
        }
    },
    {
        name: "Eiffel Tower, France",
        position: { lat: 48.8584, lng: 2.2945 },
        post: {
            title: "Explore the Eiffel Tower",
            description: "Marvel at the iconic Eiffel Tower in Paris, a global symbol of France and a must-see landmark.",
            images: ["eiffel1.jpg", "eiffel2.jpg", "eiffel3.jpg"]
        }
    },
    {
        name: "Great Wall of China",
        position: { lat: 40.4319, lng: 116.5704 },
        post: {
            title: "Walk Along the Great Wall",
            description: "Take in the breathtaking views and rich history of the Great Wall of China.",
            images: ["wall1.jpg", "wall2.jpg", "wall3.jpg"]
        }
    },
    {
        name: "Statue of Liberty, USA",
        position: { lat: 40.6892, lng: -74.0445 },
        post: {
            title: "Visit the Statue of Liberty",
            description: "A symbol of freedom and democracy, the Statue of Liberty is one of the most famous landmarks in the USA.",
            images: ["liberty1.jpg", "liberty2.jpg", "liberty3.jpg"]
        }
    },
    {
        name: "Sydney Opera House, Australia",
        position: { lat: -33.8568, lng: 151.2153 },
        post: {
            title: "Discover the Sydney Opera House",
            description: "Known for its distinctive architecture, the Sydney Opera House is a cultural hub in Australia.",
            images: ["opera1.jpg", "opera2.jpg", "opera3.jpg"]
        }
    },
    {
        name: "Christ the Redeemer, Brazil",
        position: { lat: -22.9519, lng: -43.2105 },
        post: {
            title: "Christ the Redeemer",
            description: "Admire the stunning Christ the Redeemer statue, overlooking the city of Rio de Janeiro.",
            images: ["redeemer1.jpg", "redeemer2.jpg", "redeemer3.jpg"]
        }
    },
    {
        name: "Mount Fuji, Japan",
        position: { lat: 35.3606, lng: 138.7274 },
        post: {
            title: "Climb Mount Fuji",
            description: "Witness the beauty of Mount Fuji, Japan's tallest peak and a symbol of national pride.",
            images: ["fuji1.jpg", "fuji2.jpg", "fuji3.jpg"]
        }
    },
    {
        name: "Pyramids of Giza, Egypt",
        position: { lat: 29.9792, lng: 31.1342 },
        post: {
            title: "Explore the Pyramids of Giza",
            description: "Step back in time with a visit to the ancient Pyramids of Giza, one of the Seven Wonders of the Ancient World.",
            images: ["giza1.jpg", "giza2.jpg", "giza3.jpg"]
        }
    },
    {
        name: "Machu Picchu, Peru",
        position: { lat: -13.1631, lng: -72.5450 },
        post: {
            title: "Journey to Machu Picchu",
            description: "Discover the mystical ruins of Machu Picchu, an ancient Incan city set high in the Andes Mountains.",
            images: ["machu1.jpg", "machu2.jpg", "machu3.jpg"]
        }
    },
    {
        name: "Santorini, Greece",
        position: { lat: 36.3932, lng: 25.4615 },
        post: {
            title: "Relax in Santorini",
            description: "Enjoy the stunning sunsets and white-washed buildings of the beautiful island of Santorini.",
            images: ["santorini1.jpg", "santorini2.jpg", "santorini3.jpg"]
        }
    },
    {
        name: "Petra, Jordan",
        position: { lat: 30.3285, lng: 35.4444 },
        post: {
            title: "Explore Petra",
            description: "Visit Petra, the Rose City, an archaeological wonder and one of the new Seven Wonders of the World.",
            images: ["petra1.jpg", "petra2.jpg", "petra3.jpg"]
        }
    },
    {
        name: "Banff National Park, Canada",
        position: { lat: 51.4968, lng: -115.9281 },
        post: {
            title: "Banff National Park Adventure",
            description: "Experience the stunning natural beauty of Banff National Park in the Canadian Rockies.",
            images: ["banff1.jpg", "banff2.jpg", "banff3.jpg"]
        }
    },
    {
        name: "Angkor Wat, Cambodia",
        position: { lat: 13.4125, lng: 103.8670 },
        post: {
            title: "Discover Angkor Wat",
            description: "Explore the largest religious monument in the world, Angkor Wat, a marvel of ancient Khmer architecture.",
            images: ["angkor1.jpg", "angkor2.jpg", "angkor3.jpg"]
        }
    },
    {
        name: "Table Mountain, South Africa",
        position: { lat: -33.9628, lng: 18.4098 },
        post: {
            title: "Visit Table Mountain",
            description: "Enjoy panoramic views of Cape Town and the South Atlantic from the top of Table Mountain.",
            images: ["table1.jpg", "table2.jpg", "table3.jpg"]
        }
    },
    {
        name: "Galápagos Islands, Ecuador",
        position: { lat: -0.9538, lng: -89.6096 },
        post: {
            title: "Discover the Galápagos Islands",
            description: "Home to unique wildlife, the Galápagos Islands are a paradise for nature enthusiasts.",
            images: ["galapagos1.jpg", "galapagos2.jpg", "galapagos3.jpg"]
        }
    },
    {
        name: "Dubai, UAE",
        position: { lat: 25.276987, lng: 55.296249 },
        post: {
            title: "Experience Dubai",
            description: "A global destination known for luxury shopping, ultramodern architecture, and vibrant nightlife.",
            images: ["dubai1.jpg", "dubai2.jpg", "dubai3.jpg"]
        }
    },
    {
        name: "Hagia Sophia, Turkey",
        position: { lat: 41.0086, lng: 28.9802 },
        post: {
            title: "Visit Hagia Sophia",
            description: "Marvel at the architectural splendor of Hagia Sophia in Istanbul, an iconic landmark of both Christianity and Islam.",
            images: ["hagia1.jpg", "hagia2.jpg", "hagia3.jpg"]
        }
    },
    {
        name: "Stonehenge, UK",
        position: { lat: 51.1789, lng: -1.8262 },
        post: {
            title: "Explore Stonehenge",
            description: "An enigmatic prehistoric monument, Stonehenge attracts visitors from around the world.",
            images: ["stonehenge1.jpg", "stonehenge2.jpg", "stonehenge3.jpg"]
        }
    },
    {
        name: "Niagara Falls, Canada/USA",
        position: { lat: 43.0962, lng: -79.0377 },
        post: {
            title: "Experience Niagara Falls",
            description: "Witness the powerful beauty of Niagara Falls, one of the most famous waterfalls in the world.",
            images: ["niagara1.jpg", "niagara2.jpg", "niagara3.jpg"]
        }
    },
    {
        name: "Venice Canals, Italy",
        position: { lat: 45.4408, lng: 12.3155 },
        post: {
            title: "Stroll Through the Venice Canals",
            description: "Explore the enchanting canals of Venice, a city unlike any other.",
            images: ["venice1.jpg", "venice2.jpg", "venice3.jpg"]
        }
    },
    {
        name: "Mount Everest Base Camp, Nepal",
        position: { lat: 28.0026, lng: 86.8528 },
        post: {
            title: "Journey to Everest Base Camp",
            description: "A challenging yet rewarding trek to the base camp of the world's highest mountain.",
            images: ["everest1.jpg", "everest2.jpg", "everest3.jpg"]
        }
    },
    {
        name: "Iguazu Falls, Argentina/Brazil",
        position: { lat: -25.6953, lng: -54.4367 },
        post: {
            title: "Discover Iguazu Falls",
            description: "A breathtaking natural wonder located on the border of Argentina and Brazil.",
            images: ["iguazu1.jpg", "iguazu2.jpg", "iguazu3.jpg"]
        }
    },
    {
        name: "Lake Bled, Slovenia",
        position: { lat: 46.3625, lng: 14.0940 },
        post: {
            title: "Relax at Lake Bled",
            description: "Known for its beautiful island and medieval castle, Lake Bled is a must-see in Slovenia.",
            images: ["bled1.jpg", "bled2.jpg", "bled3.jpg"]
        }
    },
    {
        name: "Yellowstone National Park, USA",
        position: { lat: 44.4280, lng: -110.5885 },
        post: {
            title: "Explore Yellowstone National Park",
            description: "The first national park in the USA, known for geysers, hot springs, and diverse wildlife.",
            images: ["yellowstone1.jpg", "yellowstone2.jpg", "yellowstone3.jpg"]
        }
    },
    {
        name: "Fiordland National Park, New Zealand",
        position: { lat: -45.4150, lng: 167.7184 },
        post: {
            title: "Discover Fiordland National Park",
            description: "A stunning wilderness area in New Zealand, known for Milford Sound and breathtaking landscapes.",
            images: ["fiordland1.jpg", "fiordland2.jpg", "fiordland3.jpg"]
        }
    },
    {
        name: "Amsterdam Canals, Netherlands",
        position: { lat: 52.3702, lng: 4.8952 },
        post: {
            title: "Cruise the Amsterdam Canals",
            description: "Experience the charm of Amsterdam by exploring its picturesque canals and historic buildings.",
            images: ["amsterdam1.jpg", "amsterdam2.jpg", "amsterdam3.jpg"]
        }
    },
    {
        name: "Acropolis of Athens, Greece",
        position: { lat: 37.9715, lng: 23.7257 },
        post: {
            title: "Visit the Acropolis",
            description: "A symbol of ancient Greece, the Acropolis offers breathtaking views and a glimpse into history.",
            images: ["acropolis1.jpg", "acropolis2.jpg", "acropolis3.jpg"]
        }
    },
    {
        name: "Uluru, Australia",
        position: { lat: -25.3444, lng: 131.0369 },
        post: {
            title: "Witness Uluru",
            description: "Experience the cultural and natural wonder of Uluru, a sacred site for the indigenous Anangu people.",
            images: ["uluru1.jpg", "uluru2.jpg", "uluru3.jpg"]
        }
    },
    {
        name: "The Colosseum, Italy",
        position: { lat: 41.8902, lng: 12.4922 },
        post: {
            title: "Explore the Colosseum",
            description: "An iconic symbol of ancient Rome, the Colosseum offers a fascinating journey through history.",
            images: ["colosseum1.jpg", "colosseum2.jpg", "colosseum3.jpg"]
        }
    }
    // Add more destinations as needed
];

function initMap() {
    const india = { lat: 20.5937, lng: 78.9629 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: india
    });

    destinations.forEach(destination => {
        const marker = new google.maps.Marker({
            position: destination.position,
            map,
            title: destination.name
        });

        marker.addListener("click", () => {
            showPostForDestination(destination);
        });
    });
}

function showPostForDestination(destination) {
    const postSection = document.getElementById("posts");
    postSection.innerHTML = `
        <div class="post">
            <h2>${destination.post.title}</h2>
            <div class="carousel">
                <img id="carouselImage" src="${destination.post.images[0]}" alt="${destination.name} Image" />
            </div>
            <p>${destination.post.description}</p>
            <div id="related-posts" class="related-posts"></div>
            <div class="comments-section">
                <h3>Comments</h3>
                <div id="comments-${destination.name.replace(/\s+/g, '')}"></div>
                <form onsubmit="addComment(event, '${destination.name}')">
                    <input type="text" placeholder="Your name" required>
                    <textarea placeholder="Your comment..." required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    `;

    loadRelatedPosts(destination);
    startCarousel(destination.post.images);
}

function loadRelatedPosts(destination) {
    const relatedPosts = document.getElementById("related-posts");
    relatedPosts.innerHTML = destinations
        .filter(dest => dest.name !== destination.name)
        .map(dest => `
            <div class="related-post">
                <h3>${dest.post.title}</h3>
                <p>${dest.post.description}</p>
                <button onclick="showPostForDestination(${JSON.stringify(dest)})">View More</button>
            </div>
        `).join("");
}

function addComment(event, destinationName) {
    event.preventDefault();
    const commentText = event.target.querySelector("textarea").value;
    const commentsSection = document.getElementById(comments-${destinationName.replace(/\s+/g, '')});
    commentsSection.innerHTML += <div class="comment">${commentText}</div>;
    event.target.reset();
}

// Function to search for a destination and display its post
function searchDestination() {
    const query = document.getElementById("search").value.trim().toLowerCase();
    const destination = destinations.find(dest => dest.name.toLowerCase().includes(query));

    if (destination) {
        showPostForDestination(destination);
    } else {
        const postSection = document.getElementById("posts");
        postSection.innerHTML = <p>No destination found for "${query}". Please try another search.</p>;
    }
}

// Carousel functionality for images
function startCarousel(images) {
    let index = 0;
    const carouselImage = document.getElementById("carouselImage");
    
    setInterval(() => {
        index = (index + 1) % images.length;
        carouselImage.src = images[index];
    }, 3000);
}
