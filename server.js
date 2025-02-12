var express = require("express");
var path = require("path");
var app = express();

// Serve static files (CSS, JS, images) from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the root URL ("/") - serves index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for the "/yay" URL - serves yay.html
app.get("/yay", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "yay.html"));
});

// Start the server
app.listen(8080, "127.0.0.1", () => {
    console.log("Web server running @ http://127.0.0.1:8080");
});