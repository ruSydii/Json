<?php

$data = file_get_contents('dumy.json');
$mahasiswa = json_decode($data, true);
var_dump($mahasiswa);

echo $mahasiswa[1]["pembimbing"]["pembimbing1"];


