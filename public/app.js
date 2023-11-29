(async () => {
  // call my server to the /create-context endpoint to get a order id
  const response = await fetch('/create-context');
  const myJson = await response.json();
  console.log(myJson)

  // use the order id to initialize paypal
  paypal
    .Buttons({
      createOrder() {
        // your custom handler to return the order_id string
        return myJson.partner_metadata.order_id;
      },
      onApprove: async function (data) {
        // after paypal is done call my server on the /pay endpoint 
        fetch("/pay", {
          method: "POST",
          body: JSON.stringify({
            payment_context_id: myJson.id
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then((response) => response.json())
          .then((json) => console.log(json));;
      },
    })
    .render('#paypal-button-container');





})();