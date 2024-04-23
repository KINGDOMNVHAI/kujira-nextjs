const fetchApi = async () => {
    const res = await fetch("http://localhost:8080/api/v1/public/signin", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: "nvhai061993@gmail.com",
            password: "Aa@123"
         }),
    });
    const json = await res.json();
    console.log(json);
}
fetchApi()
