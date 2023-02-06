fetch("https://www.cc.puv.fi/~asa/cgi-bin/fetchOrders.py")
    .then(res => res.text())
    .then(teksti => printData(teksti));

    function printData(txt) {
        console.log(txt);
        let items = JSON.parse(txt);
        console.log(items);

        let a = "<table><tr><th>orderid</th><th>customerid</th><th>customer</th><th>Invaddr</th><th>Delivaddr</th><th>Deliverydate</th><th>Respsalesperson</th><th>Products</th><th>Totalprice</th><th>Comment</th><th>Link</th><tr>";
        for(let i = 0; i < items.length; i++ ) {
            let item = items[i];
            console.log(item);
            let h;
            for (let b = 0; b < item.products.length; b++){
            for (let x in item.products[b]){
                if (item.products[b][x] != ""){
                    h += x + ": " +item.products[b][x] + " ";
                }
            }
        }
            console.log(item.orderid + " " + item.customerid + " " + item.customer + " " + item.invaddr + " " + item.delivaddr + " " + item.deliverydate + " " + item.respsalesperson + " " + item.products + " " + item.totalprice + " " + item.comment);
            a += "<tr><td>" + item.orderid + "</td><td>" + item.customerid + "</td><td>" + item.customer + "</td><td>" + item.invaddr + "</td><td>" + item.delivaddr + "</td><td>" + item.deliverydate + "</td><td>" + item.respsalesperson + "</td><td>" + h + "</td><td>" + item.totalprice + "</td><td>" + item.comment + "</td><td>" + "<button>" + "</td></tr>"
        }
    
        console.log(a);
        document.getElementById("1").innerHTML = a+"</table>";
    }

    function BackToMenu () {
        window.location.href='Menu.html';
    }
    function GoToCollect () {
        window.location.href='Kerayslista.html';
    }