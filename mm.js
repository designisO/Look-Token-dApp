// connect to Moralis server
Moralis.initialize("9ATsgPjQbkVkc8SxVnDgbBALhlFSLNzazCs9CFnk");
Moralis.serverURL = "https://y1mxcposiuvn.usemoralis.com:2053/server";

      // add from here down
      async function login() {
        let user = Moralis.User.current();
        if (!user) {
          user = await Moralis.Web3.authenticate();
        }
        console.log("logged in user:", user);
      }

      async function logOut() {
        await Moralis.User.logOut();
        console.log("logged out of wallet");
      }


      async function getPrice() {
          let address = document.getElementById("address").value;
          console.log(address);
          
          price = await Moralis.Cloud.run("getPrice", {address: address});
          console.log(price);
          let ethPrice = (price.nativePrice.value / (10**price.nativePrice.decimals)) + " ETH"
          console.log(ethPrice)
          let usdPrice = price.usdPrice + " USD"
          console.log(usdPrice)
          document.getElementById("usd_price").innerHTML = ethPrice;
          document.getElementById("eth_price").innerHTML = usdPrice;
          console.log('price');

      }
      getPrice();

      document.getElementById("button").addEventListener("click", getPrice);
      document.getElementById("btn-login").onclick = login;
      document.getElementById("btn-logout").onclick = logOut;
      