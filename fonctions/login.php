<?php
session_start();
// require('../require/check_data.php');

if (
   isset($_POST['username'])
   && isset($_POST['password'])
   && $_POST['password'] != NULL
) {

//    require('../require/co_bdd.php');

//    $req = $bdd->prepare('SELECT * FROM users WHERE email = :email');
//    $req->bindParam(':email', $post_email, PDO::PARAM_STR);
//    $req->execute();
//    $user = $req->fetch();

//    if ($user) {

//       if (password_verify($post_password, htmlspecialchars($user['password']))) {

//          $_SESSION['users']['id'] = htmlspecialchars($user['id']);
//          $_SESSION['users']['type'] = htmlspecialchars($user['type']);

//          $time = time();

//          $req = $bdd->prepare('UPDATE users SET time = :time WHERE id= :session_users_id');
//          $req->bindParam(':time', $time);
//          $req->bindParam(':session_users_id', $_SESSION['users']['id']);
//          $req->execute();

        //  $bdd = null;
         header('location: ../pages/accueil.php');
        //  die();
      } 
//       else {

//          $bdd = null;
//          header('location: ../../login.php?error=013119');
//          die();
//       }
//    } else {

//       $bdd = null;
//       header('location: ../../login.php?error=013120');
//       die();
//    }
// } else {

//    $bdd = null;
//    http_response_code(400);
//    header('location: ../../login.php?error=01315');
//    die();
// }