<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel React</title>
    @vite(['resources/css/app.css'])
    @viteReactRefresh
</head>
<body>
    <div class="text-3xl">
        <h2>Laravel React App</h2>
    </div>
    <div>
        <div id="main-users"></div>
    </div>

    @vite(['resources/js/app.js'])
</body>
</html>
