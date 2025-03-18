navigator.geolocation.getCurrentPosition(
    function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);

        // Fetch location details using an IP-based API
        fetch("https://ipinfo.io/json?token=YOUR_TOKEN") // Replace with your token
            .then(response => response.json())
            .then(data => {
                console.log("City: " + data.city);
                console.log("Region: " + data.region);
                console.log("Country: " + data.country);
                console.log("IP Address: " + data.ip);
            })
            .catch(error => console.error("Error fetching location details:", error));
    },
    function (error) {
        console.error("Error getting location: " + error.message);
    }
);