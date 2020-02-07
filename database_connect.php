

<?php
# Fill our vars and run on cli
# $ php -f db-connect-test.php
$dbname = 'gendujit_codeManagement';
$dbuser = 'gendujit_admin';
$dbpass = 'G3nd3rV3nd3r';
$dbhost = 'localhost';
$link = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die("Unable to Connect to '$dbhost'");

if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}


$sql = "SELECT one_time_code FROM story_one";
$result = $link->query($sql);


if (mysqli_query($link, $sql)) {
    echo "success" . "<br>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
}
$checkValid = 987929;
$checkNotValid = 111111;
$foundValid = false;
$foundNotValid = false;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        if($row["one_time_code"] == $checkValid ){
        echo "code: " . $row["one_time_code"]. "<br>";
        $foundValid = true;
        }
                if($row["one_time_code"] == $checkNotValid ){
        echo "code: " . $row["one_time_code"]. "<br>";
        $foundNotValid = true;
        }
    }
   if($foundValid == true ){
       echo "found" . "<br>";
   } else{
       echo "not found." . "<br>";
   }
   
   if($foundNotValid == true){
       echo "found" . "<br>";
   } else {
       
       echo "code: " . $checkNotValid . "<br>" . "not found " . "<br>";
   }
} else {
    echo "0 results";
}

mysqli_close($link);
?>


