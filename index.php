<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <title>Cours</title>

    <link rel="stylesheet" href="./assets/css/index.css" />
</head>

<body>
    <div class="registration-form">
        <form action="./fonctions/login.php" method="POST">
            <div class="form-icon">
                <span><i class="icon icon-music-tone-alt"></i></span>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="username" name="username" placeholder="Identifiant">
            </div>
            <div class="form-group2">
                <input type="password" class="form-control item" id="password" name="password" placeholder="Mot de passe">
            </div>


            <div class="form-group">
                <button type="submit" class="btn btn-block connect">Se connecter</button>
            </div>
        </form>
        <div class="social-media">
            <h5>Liens</h5>
            <div class="social-icons">
                <a href="#"><i class="icon-social-facebook" title="Facebook"></i></a>
                <a href="#"><i class="icon-social-youtube" title="Youtube"></i></a>

            </div>
        </div>
    </div>
</body>

</html>