<!DOCTYPE html>
<html>
<body>
  <form method="POST" action="">
    <label for="numero1">Primer número:</label>
    <input type="number" id="numero1" name="numero1" required>
    <br><br>
    <label for="numero2">Segundo número:</label>
    <input type="number" id="numero2" name="numero2" required>
    <br><br>
    <input type="submit" value="Verificar">
  </form>

  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $numero1 = $_POST["numero1"];
    $numero2 = $_POST["numero2"];

    if ($numero1 > $numero2) {
      echo "<p>El primer número es mayor.</p>";
    } elseif ($numero1 < $numero2) {
      echo "<p>El segundo número es mayor.</p>";
    } else {
      echo "<p>Los números son iguales.</p>";
    }
  }
  ?>
</body>
</html>