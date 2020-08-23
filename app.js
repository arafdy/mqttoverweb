(function() {

    client = new Paho.MQTT.Client("test.mosquitto.org", Number(8081), Math.random().toString(16).replace(/[^a-z]+/g, '').substr(0, 5));
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({onSuccess:onConnect, useSSL: true});

    function onConnect() {
        console.log("Komunikasi terhubung.");
        client.subscribe("rafdy/tester1");
        client.subscribe("rafdy/tester2");
    }

    function onConnectionLost() {
        alert("Koneksi terputus.");
    }

    function onMessageArrived(message) {
        if (message.destinationName == "rafdy/tester1"){ 
            oxy.innerHTML = message.payloadString;
            console.log(message.payloadString);
        }
        else 
        if (message.destinationName == "rafdy/tester2") {
            temp.innerHTML = message.payloadString;
            console.log(message.payloadString);
        }
    }
}())
