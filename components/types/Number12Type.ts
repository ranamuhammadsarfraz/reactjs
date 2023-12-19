type dataComponent_type = {
    h1: string,
    span_1: string,
    span_2: string,
    city: string,
    type: string,
    placeholder: string,
    btn: string,
    alert_1: string,
    alert_2: string,
    developer_url: string,
    developer_name: string,
    aqi_desc: string
}

const dataComponent: dataComponent_type = {
    h1: "Pollution Checker Tool",
    span_1: "AQI:",
    span_2: "500",
    city: "Lahore",
    type: "text",
    placeholder: "Enter City Name *",
    btn: "Search City!",
    alert_1: "",
    alert_2: "City data not found, check spelling or Internet",
    developer_url: "https:///rmsencode.com",
    developer_name: "Developed by R.M.Sarfraz",
    aqi_desc: "AQI above 100 is UnHealthy that concludes Pollution and below 100 concludes Healthy Air"
};

export default dataComponent