const express = require("express");
const sdk = require("api")("@okra/v2.0#kny21cldvn4yc8");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

sdk.auth("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGE2MzU4MTMwYTk0MzQ4NmYzM2RjZWQiLCJpYXQiOjE2NzU4NDk5NTR9.DP2dfE9xDXKwviPeMQa6a1_pXkxIa3C8G8kPbg9o1Vk");

app.post("/process-spending-patterns", (req, res) => {
    const customerId = req.body.customerId;

    sdk.processSpendingPatterns({
        customer_id: customerId
    })
    .then(({data}) => {
        console.log(`Data: ${data}`);
        res.send(data);
    })
    .catch(error => {
        console.error(`Something went wrong ${error}`);
    });
});

app.post("/get-by-customer-id", (req, res) => {
    const customerId = req.body.customerId;

    sdk.getByCustomerSpendingPatterns({
        customer_id: customerId
    })
    .then(({data}) => {
        console.log(`Data: ${data}`);
        res.send(data);
    })
    .catch(error => {
        console.error(`Soemthing went wrong ${error}`);
    });
});

app.post("/get-by-id", (req, res) => {
    const id = req.body.id;

    sdk.getByCustomerSpendingPatterns({
        id: recordId //63e60d32567faa9d1579761e
    })
    .then(({data}) => {
        console.log(`Data: ${data}`);
        res.send(data);
    })
    .catch(error => {
        console.error(`Soemthing went wrong ${error}`);
    });
});

app.post("/get-by-date", (req, res) => {
    const customerId = req.body.customerId;

    sdk.getByCustomerSpendingPatterns({
        customer_id: customerId
    })
    .then(({data}) => {
        console.log(`Data: ${data}`);
        res.send(data);
    })
    .catch(error => {
        console.error(`Soemthing went wrong ${error}`);
    });
});

app.get("/welcome", (req, res) =>{
	res.send("Hi");
});


app.listen(3000, (error) => {
    if (!error) console.log("App running on port 3000...");
    else console.error(`Something went wrong: ${error}`);
});
