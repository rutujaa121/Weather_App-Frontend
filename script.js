// http://api.weatherapi.com/v1/current.json?key=a05c5c8f9fd2472298172343251011&q=Mumbai&aqi=no

const fetchResults = async () => {
    let url = "http://api.weatherapi.com/v1/current.json?key=a05c5c8f9fd2472298172343251011&q=Mumbai&aqi=no";

    const res = await fetch(url);

    const data = await res.json();

    console.log(data);
}
fetchResults();
