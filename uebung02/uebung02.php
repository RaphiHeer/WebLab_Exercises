<!DOCTYPE html>
<html>
    <head>
        <title>Message of the day</title>
    </head>

    <body>

        <h1>Here is your message of the day:</h1>
        <p id="motd">

        </p>
    <input type="button" value="Get next message!" onclick="getNextMessage()">
    <script>
        getNextMessage();
        function getNextMessage()
        {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                    if (xmlhttp.status == 200) {
                        document.getElementById("motd").innerHTML = xmlhttp.responseText;
                    }
                    else if (xmlhttp.status == 400) {
                        alert('There was an error 400');
                    }
                    else {
                        alert('something else other than 200 was returned');
                    }
                }
            };

            xmlhttp.open("GET", "mofd.php", true);
            xmlhttp.send();
        }
    </script>
    </body>
</html>
