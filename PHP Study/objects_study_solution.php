<!DOCTYPE html>
<html>
<body>

<?php
$txt = "PHP";
echo "I love $txt!";

$object = new stdClass();
$object->name = 'Omar'; 

$card1 = new stdClass();
$card1->title = 'Basketball';

$arr = [
	'val' => 1,
];

$cards = [
	'card1' => $card1,
];

foreach ($cards as $card):

	echo '<div>' . $card->title . '</div>';

endforeach; 


?>

</body>
</html>
