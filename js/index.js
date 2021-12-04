const searchButton = document.querySelector(".search_button");
const inputData = document.querySelector(".search_input");
const headerEl = document.querySelector(".sprint");
const searchCityHistory = document.querySelector(".search_history");

searchButton.onclick = () => {
    const city = inputData.value;
    window.localStorage.setItem("city", city);
    const storageCities = JSON.parse(window.localStorage.getItem("cities"));
    if (storageCities) {
        if (!storageCities.includes(city)) {
            window.localStorage.setItem("cities", JSON.stringify([city, ...storageCities]));
        }
    } else {
        window.localStorage.setItem("cities", JSON.stringify([city]));
    }
    window.location.replace("./content.html?city=" + city);
};

function viewHistoryValue() {
    const cities = JSON.parse(window.localStorage.getItem("cities"));
    if(cities) {
        cities.forEach(city => {
            const el = document.createElement("div");
            el.classList.add("cityHis");
            el.innerHTML = city;
            el.onclick = () => {
                window.localStorage.setItem("cities", JSON.stringify([city, ...cities]));
                window.location.replace("./content.html?city=" + city);
            };
            searchCityHistory.append(el);
        });
    }
};

viewHistoryValue();

// headerEl.onclick = () => {
//     localStorage.removeItem("")
// }