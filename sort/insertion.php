<?php

$data = [5, 2, 4, 6, 1, 3];

function insertionSort(&$a) {
    for ($j = 1; $j < count($a); $j++) {
        $key = $a[$j];
        
        $i = $j - 1;
        for(; $i >= 0 && $a[$i] > $key; $i--) {
            $a[$i + 1] = $a[$i];
        }
        $a[$i + 1] = $key;
    }
}

print_r($data);

insertionSort($data);

print_r($data);
