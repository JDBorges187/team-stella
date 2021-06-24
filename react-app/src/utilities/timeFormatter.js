
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
    // console.log("Test: ", dateTime)
    let year = dateTime.getFullYear();
    let day = days[dateTime.getDay()]
    let date = dateTime.getDate();
    let month = months[dateTime.getMonth()];

    let hour = ((dateTime.getHours()) % 12);
    if(hour == 0){
        hour = 12;
    }
    let minutes = dateTime.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    let ampm = dateTime.getHours < 12 ? "am" : "pm";

    return `${day}, ${month} ${date}, ${year} ${hour}:${minutes} ${ampm}`;
}

export default orderDateFormat;
