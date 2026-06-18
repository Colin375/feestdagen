const container = document.querySelector("#feestdagen")
const template = document.querySelector("#holiday-template");

fetch('https://date.nager.at/api/v3/NextPublicHolidays/NL')
// Check if the response is valid
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})

// Send the holiday name and date into the html
.then(data => {
    data.forEach(holiday => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".holiday-name").textContent =
            holiday.localName;

        clone.querySelector(".holiday-date").textContent =
            holiday.date;

        container.appendChild(clone)
            
    });

    // Send the full json to the console
    console.log(data)
})
.catch(error => {
    console.error('There was a problem with the fetch operation:',
        _error);
});

