const destinations = [
    {
                name: "Taj Mahal, India",
                position: { lat: 27.1751, lng: 78.0421 },
                post: {
                    title: "Visit the Taj Mahal",
                    description: "Experience the beauty of one of the Seven Wonders of the World, located in Agra.The Taj Mahal, located in Agra, India, is an iconic symbol of love and one of the Seven Wonders of the World. Built by the Mughal Emperor Shah Jahan in the 17th century as a mausoleum for his beloved wife, Mumtaz Mahal, this stunning white marble structure is renowned for its architectural beauty and intricate craftsmanship.",
                    images: ["taj1.jpeg", "taj2.webp", "taj4.jpeg"]
                }
            },
            {
                name: "Eiffel Tower, France",
                position: { lat: 48.8584, lng: 2.2945 },
                post: {
                    title: "Explore the Eiffel Tower",
                    description: "Marvel at the iconic Eiffel Tower in Paris, a global symbol of France and a must-see landmark. The monument combines elements of Islamic, Persian, and Indian architectural styles, with exquisite inlay work, calligraphy, and symmetrical gardens. Set on the banks of the Yamuna River, the Taj Mahal draws millions of visitors annually, captivated by its ethereal beauty and historical significance.",
                    images: ["eiffel1.jpeg", "eiffel2.jpg", "eiffel3.jpg"]
                }
            },
            {
                name: "Great Wall of China",
                position: { lat: 40.4319, lng: 116.5704 },
                post: {
                    title: "Walk Along the Great Wall",
                    description: "Take in the breathtaking views and rich history of the Great Wall of China. The monument combines elements of Islamic, Persian, and Indian architectural styles, with exquisite inlay work, calligraphy, and symmetrical gardens. Set on the banks of the Yamuna River, the Taj Mahal draws millions of visitors annually, captivated by its ethereal beauty and historical significance.",
                    images: ["wall1.jpeg", "wall2.jpeg", "wall3.jpeg"]
                }
            },
            {
                name: "Statue of Liberty, USA",
                position: { lat: 40.6892, lng: -74.0445 },
                post: {
                    title: "Visit the Statue of Liberty",
                    description: "A symbol of freedom and democracy, the Statue of Liberty is one of the most famous landmarks in the USA. The monument combines elements of Islamic, Persian, and Indian architectural styles, with exquisite inlay work, calligraphy, and symmetrical gardens. Set on the banks of the Yamuna River, the Taj Mahal draws millions of visitors annually, captivated by its ethereal beauty and historical significance.",
                    images: ["liberty1.jpg", "liberty2.jpg", "liberty3.jpg"]
                }
            },
            {
                name: "Sydney Opera House, Australia",
                position: { lat: -33.8568, lng: 151.2153 },
                post: {
                    title: "Discover the Sydney Opera House",
                    description: "Known for its distinctive architecture, the Sydney Opera House is a cultural hub in Australia. The monument combines elements of Islamic, Persian, and Indian architectural styles, with exquisite inlay work, calligraphy, and symmetrical gardens. Set on the banks of the Yamuna River, the Taj Mahal draws millions of visitors annually, captivated by its ethereal beauty and historical significance.",
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
                    images: ["turkey1.jpeg", "turkey2.jpeg", "turkey3.jpeg"]
                }
            },
            {
                name: "Fiordland National Park, New Zealand",
                position: { lat: -45.4150, lng: 167.7184 },
                post: {
                    title: "Discover Fiordland National Park",
                    description: "A stunning wilderness area in New Zealand, known for Milford Sound and breathtaking landscapes.",
                    images: ["np1.jpeg", "np2.jpeg", "np3.jpeg"]
                }
            },
            {
                name: "Amsterdam Canals, Netherlands",
                position: { lat: 52.3702, lng: 4.8952 },
                post: {
                    title: "Cruise the Amsterdam Canals",
                    description: "Experience the charm of Amsterdam by exploring its picturesque canals and historic buildings.Amsterdam's canals, an iconic feature of the Dutch capital, form a network of over 100 kilometers, with more than 1,500 bridges and 90 islands. Constructed during the 17th century, Amsterdam’s canal ring (Grachtengordel) is now a UNESCO World Heritage site, ",
                    images: ["canals1.jpeg", "canals2.jpeg", "canals3.jpeg"]
                }
            },
            {
                name: "Acropolis of Athens, Greece",
                position: { lat: 37.9715, lng: 23.7257 },
                post: {
                    title: "Visit the Acropolis",
                    description: "A symbol of ancient Greece, the Acropolis offers breathtaking views and a glimpse into history.",
                    images: ["aa1.jpeg", "aa2.jpeg", "aa3.jpeg"]
                }
            },
            {
                name: "Uluru, Australia",
                position: { lat: -25.3444, lng: 131.0369 },
                post: {
                    title: "Witness Uluru",
                    description: "Experience the cultural and natural wonder of Uluru, a sacred site for the indigenous Anangu people.",
                    images: ["ulu1.jpeg", "ulu2.jpeg", "ulu3.jpeg"]
                }
            },
            {
                name: "The Colosseum, Italy",
                position: { lat: 41.8902, lng: 12.4922 },
                post: {
                    title: "Explore the Colosseum",
                    description: "An iconic symbol of ancient Rome, the Colosseum offers a fascinating journey through history.",
                    images: ["italy1.jpeg", "italy2.jpeg", "italy3.jpeg"]
                }
            },
            {
                name: "Jaipur, Rajasthan",
                position: { lat: 26.9124, lng: 75.7873 },
                post: {
                    title: "Explore the Pink City - Jaipur",
                    description: "Known for its royal heritage, Jaipur is home to iconic palaces and forts like the Amer Fort and Hawa Mahal.",
                    images: ["jp1.jpeg", "jp2.jpeg", "jp3.jpeg"]
                }
            },
            {
                name: "Varanasi, Uttar Pradesh",
                position: { lat: 25.3176, lng: 82.9739 },
                post: {
                    title: "Experience the Spirituality of Varanasi",
                    description: "Varanasi, one of the oldest cities in the world, is a spiritual hub along the banks of the Ganges River.",
                    images: ["v1.jpeg", "v2.jpeg", "v3.jpeg"]
                }
            },
            {
                name: "Kerela Backwaters",
                position: { lat: 9.9312, lng: 76.2673 },
                post: {
                    title: "Cruise the Kerela Backwaters",
                    description: "A network of interconnected canals, rivers, and lakes, the Kerela backwaters offer a peaceful retreat.Kerala, a picturesque state on India’s southwestern coast, is known for itsThe state is celebrated for its traditional art forms like Kathakali and Theyyam, Ayurvedic treatments, and delicious cuisine with coconut-infused flavors. Kerala also hosts vibrant festivals, including Onam and Vishu, which reflect its deep-rooted cultural traditions. ",
                    images: ["kerela1.jpeg", "kerela2.jpeg", "kerela3.jpeg"]
                }
            },
            {
                name: "Golden Temple, Amritsar",
                position: { lat: 31.6200, lng: 74.8765 },
                post: {
                    title: "Visit the Golden Temple",
                    description: "The Golden Temple, a sacred site for Sikhs, is renowned for its stunning architecture and spiritual ambiance.",
                    images: ["gt1.jpeg", "gt2.jpeg", "gt3.jpeg"]
                }
            },
            {
                name: "Goa Beaches",
                position: { lat: 15.2993, lng: 74.1240 },
                post: {
                    title: "Relax on the Beaches of Goa",
                    description: "Known for its vibrant nightlife and beautiful beaches, Goa is a popular destination for travelers.Goa, a small coastal state in western India, is famed for its pristine beaches, vibrant nightlife, and rich cultural history. Known as a Portuguese colony until 1961, Goa blends Indian and European influences, evident in its architecture, cuisine, and festivals. Tourists flock to its popular beaches like Baga, Calangute, and Anjuna, while quieter spots like Palolem offer more serenity. The state is also home to UNESCO-listed churches, lush spice plantations, and wildlife sanctuaries. Goa’s annual Carnival, with parades and street celebrations, showcases its unique festive spirit.",
                    images: ["goa1.jpeg", "goa2.jpeg", "goa3.jpeg"]
                }
            },
            {
                name: "Ranthambore National Park, Rajasthan",
                position: { lat: 26.0173, lng: 76.5026 },
                post: {
                    title: "Safari in Ranthambore National Park",
                    description: "One of India’s largest national parks, Ranthambore is famous for its tiger reserve and rich wildlife.",
                    images: ["rt1.jpeg", "rt2.jpeg", "rt3.jpeg"]
                }
            },
            {
                name: "Mysore Palace, Karnataka",
                position: { lat: 12.3051, lng: 76.6551 },
                post: {
                    title: "Admire Mysore Palace",
                    description: "An architectural masterpiece, the Mysore Palace is the epitome of grandeur and royal heritage.",
                    images: ["my1.jpeg", "my2.jpeg", "my3.jpeg"]
                }
            },
            {
                name: "Jaisalmer Fort, Rajasthan",
                position: { lat: 26.9157, lng: 70.9083 },
                post: {
                    title: "Explore the Golden Jaisalmer Fort",
                    description: "One of the largest forts in the world, the Jaisalmer Fort is known for its golden hues and intricate architecture.",
                    images: ["jsf1.jpeg", "jsf2.jpeg", "jsf3.jpeg"]
                }
            },
            {
                name: "Rishikesh, Uttarakhand",
                position: { lat: 30.0869, lng: 78.2676 },
                post: {
                    title: "Experience Adventure and Spirituality in Rishikesh",
                    description: "Rishikesh is a destination for yoga, adventure sports, and a gateway to the Himalayas.",
                    images: ["rishi1.jpeg", "rishi2.jpeg", "rishi3.jpeg"]
                }
            }
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
    const commentsSection = document.getElementById(`comments-${destinationName.replace(/\s+/g, '')}`);
    commentsSection.innerHTML += `<div class="comment">${commentText}</div>`;
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
        postSection.innerHTML = `<p>No destination found for "${query}". Please try another search.</p>`;
    }
}

// Carousel functionality for images
function startCarousel(images) {
    let index = 0;
    const carouselImage = document.getElementById("carouselImage");
    
    setInterval(() => {
        index = (index + 1) % images.length;
        carouselImage.src = images[index];
    }, 2000);
}
