
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const days = [
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thurs",
    "Fri",
    "Sat"
]

const orderDateFormat = (dateTime) => {
    console.log("Test: ", dateTime)
    let year = dateTime.getFullYear();
    let day = days[dateTime.getDay()]
    let date = dateTime.getDate();
    let month = months[dateTime.getMonth()];

    return `${day}, ${month} ${date}, ${year}`;
}

export default orderDateFormat;
