const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.listen(3000, () => console.log("Server running on http://localhost:3000"));


const PROCESSING_CHANNEL_ID = "pc_eb7s65gqhy5e3ig3xegfdlyaee";
const SECRET_KEY = "sk_sbox_f53xg6w5x4fzcyziyujfmmrh5u3";

// Write your code bellow. Here is an example of a route:
app.post("/create-context", async (req, res) => {
  const paymentResponse = await fetch(
    "https://api.sandbox.checkout.com/payment-contexts",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: {
          type: "paypal",
        },
        currency: "GBP",
        amount: 2000,
        capture: true,
        items: [
          {
          name: "laptop",
          unit_price: 2000,
          quantity: 1
          }
         ],
        processing_channel_id: PROCESSING_CHANNEL_ID,
        success_url: "http://www.example.com/success.html",
        failure_url: "http://www.example.com/failure.html",
      }),
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  res.send(paymentResponse);
});


