<?php
header("Content-Type: text/plain");
// Connect do DB
$db = new mysqli("localhost", "root", "b925dc7eec099c270a3252c0be95ebfb", "webprog_db");
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

// Count messages
$query =  "SELECT count(*) as count FROM tbl_motd";
$result = $db->query($query);

if($result->num_rows >= 1 && $row = mysqli_fetch_assoc($result))
{
    // Get random id for message
    $count = $row['count'];
    $rnd = random_int(0, $count);

    // Get random message
    $message_query = "SELECT Message FROM tbl_motd WHERE Id = $rnd";
    $result = $db->query($message_query);
    if($result->num_rows >= 1 && $row = mysqli_fetch_assoc($result))
    {

        echo $row['Message'];
    }
    else
    {
        echo "Error on fetching 'Message of the day'...";
    }
}
else
{
    echo "Error on fetching count of 'Message of the day'...";
}