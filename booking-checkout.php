<?php
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $date = new DateTimeImmutable($_POST["date"]);
    $date = $_POST["date"];
    $hour = $_POST["hour"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Checkout</title>
    <link rel="stylesheet" href="styles/global.css" />
    <link rel="stylesheet" href="styles/checkout.css" />
    <link rel="stylesheet" href="styles/animation.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600;700&display=swap"
      rel="stylesheet"
    />
</head>
<body>
    <header>
      <div class="logo">
        <a href="index.html">Motel City</a>
      </div>
      <nav class="links">
        <a href="index.html">home</a>
        <a href="service.html">serviços</a>
        <a href="suites.html">suites</a>
        <a href="loc.html">localização</a>
        <a href="contact.html">contato</a>
      </nav>
    </header>
    <main>
        <div class="container">
        <div class="img-success"></div>
        <h2 class="title">Checkout</h2>
        <p class="booking">Ola,
        <?php
        echo "<span>" . $name . "</span>"
        ?>
        sua reserva foi realizada com sucesso!
        </p>
        <p class="booking">Para o dia
        <?php
        echo "<span>" . str_replace('-', '/', $date) . ' as ' . $hour. "</span>"
        ?>
        </p>
        </div>
    </main>
</body>
</html>
