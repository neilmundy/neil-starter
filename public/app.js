(async () => {
  console.log("I an the front end");
}
// ...
paypal
.Buttons({
    createOrder() {
        return getOrderId();
    },
    onApprove: async function (data) {
        handlePaymentApproval();
  
    fetch("/pay", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      
      }),

  })
  .render('#paypal-button-container');
// ...
)();
