
      var subtotalStr = document.getElementById("subtotal").innerText;
      var subtotal = parseFloat(subtotalStr);

      function count(plusIc, minusIc, productId, itemPrice){
         const minusBtn = document.getElementById(minusIc);
         const plusBtn = document.getElementById(plusIc);

         var valString = document.getElementById(productId).value;
         var priceString= document.getElementById(itemPrice).innerText;
         var val= parseInt(valString);
         var price=parseFloat(priceString);

         
         minusBtn.addEventListener("click", function(){
            if(val>0){
               val = val - 1;
               subtotal=subtotal-price;
               calCulate(val, subtotal,productId,itemPrice)
            }
         });
         
         
         plusBtn.addEventListener("click", function(){
            val = val + 1;
            subtotal=subtotal+price;
            calCulate(val, subtotal,productId,itemPrice)
         });

         function calCulate(val, subtotal,productId,itemPrice){
            var totalPrice = val*price;
            var tax= 5*subtotal/100;
            var total= subtotal+tax;
            document.getElementById(productId).value = val;
            document.getElementById(itemPrice).innerText = totalPrice;
            document.getElementById("subtotal").innerText= subtotal;
            document.getElementById("tax").innerText= tax;
            document.getElementById("total").innerText= total;
         }
      }

      count("phone-plus", "phone-minus", "phone-value", "phone-price");
      count("case-plus", "case-minus", "case-value", "case-price");

      var check=document.getElementById("checkout");
      check.addEventListener("click", function(){
         document.getElementById("body").style.display="none";
         document.getElementById("accept-order").style.display="block";
      })
      