const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body style="background-color: lightblue; text-align: center; font-family: Cursive;">

    <nav style="background-color: #333; padding: 10px;">
        <a href="/" style="margin: 10px; color: white; text-decoration: none;">Home</a>
        <a href="/about" style="margin: 10px; color: white; text-decoration: none;">About</a>
        <a href="/contact" style="margin: 10px; color: white; text-decoration: none;">Contact</a>
    </nav>

    <h1 style="color: black;">Home Page</h1>
    <p style="color: black;">Welcome to our simple Node website.</p>

</body>
</html>
            `);
    } else if (req.method === 'GET' && req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
             <!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body style="background-color: lightblue; text-align: center; font-family: Cursive;">

    <nav style="background-color: #333; padding: 10px;">
        <a href="/" style="margin: 10px; color: white; text-decoration: none;">Home</a>
        <a href="/about" style="margin: 10px; color: white; text-decoration: none;">About</a>
        <a href="/contact" style="margin: 10px; color: white; text-decoration: none;">Contact</a>
    </nav>

    <h1 style="color: black;">About Page</h1>
    <p style="color: black;">This page tells you about us.</p>

</body>
</html>
            `);
    } else if (req.method === 'GET' && req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body style="background-color: lightblue; text-align: center; font-family: Cursive;">

    <nav style="background-color: #333; padding: 10px;">
        <a href="/" style="margin: 10px; color: white; text-decoration: none;">Home</a>
        <a href="/about" style="margin: 10px; color: white; text-decoration: none;">About</a>
        <a href="/contact" style="margin: 10px; color: white; text-decoration: none;">Contact</a>
    </nav>

    <h1 style="color: black;">Contact Page</h1>
    <p style="color: black;">You can contact us anytime.</p>

</body>
</html>
   
        `);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body style="background-color: lightblue; text-align: center; font-family: Cursive;">

    <nav style="background-color: #333; padding: 10px;">
        <a href="/" style="margin: 10px; color: white; text-decoration: none;">Home</a>
        <a href="/about" style="margin: 10px; color: white; text-decoration: none;">About</a>
        <a href="/contact" style="margin: 10px; color: white; text-decoration: none;">Contact</a>
    </nav>

    <h1 style="color: red;">404 Page Not Found</h1>
    <p style="color: red;">Invalid URL

</body>
</html>
            `);
    }

});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});