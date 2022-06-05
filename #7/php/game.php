<?php 
$data = json_decode(file_get_contents("php://input"));

$level_number;
$current_time = ((date('h') * 3600) + (date('i') * 60) + date('s'));
$time_on_question;
$question;
$right_answer;
$answers ;
$from_begin;
$game_continue;
$wait;
$lives;
$change;
$message = "";
$play_number = 0;
$max_level = 0;
session_start();
$login = "";
$password = "";
if (array_key_exists('login',  $_SESSION)){
    $login = $_SESSION['login'];
};
if (array_key_exists('password',  $_SESSION)){
    $password = $_SESSION['password'];
};
if (array_key_exists('level',  $_SESSION)){
    $level_number = $_SESSION["level"];
};
if (array_key_exists('time_on_question',  $_SESSION)){
    $time_on_question = $_SESSION["time_on_question"];
};
if (array_key_exists('question',  $_SESSION)){
    $question = $_SESSION["question"];
};
if (array_key_exists('right_answer',  $_SESSION)){
    $right_answer = $_SESSION["right_answer"];
};
if (array_key_exists('answers',  $_SESSION)){
    $answers = $_SESSION["answers"];
};
if (array_key_exists('from_begin',  $_SESSION)){
    $from_begin = $_SESSION["from_begin"];
};
if (array_key_exists('game_continue',  $_SESSION)){
    $game_continue = $_SESSION["game_continue"];
};
if (array_key_exists('wait',  $_SESSION)){
    $wait = $_SESSION["wait"];
};
if (array_key_exists('lives',  $_SESSION)){
    $lives = $_SESSION["lives"];
};
if (array_key_exists('change',  $_SESSION)){
    $change = $_SESSION["change"];
};

$other_users = [];
$file_datas = json_decode(file_get_contents("../data/statictics.json"), true);
foreach ($file_datas as $element){
    if($element["login"] == $login){
        $max_level = $element["max_level"];
        $play_number = $element["play_number"];
    } else {
        array_push($other_users, $element);
    };
};

if ($from_begin and !$wait){
    $level_number = 1;
    $time_on_question = ((date('h') * 3600) + (date('i') * 60) + date('s'));
    $current_time = $time_on_question;
    $lives = 3;
    if ($level_number > $max_level){
        $max_level = $level_number;
    };
    generation();
    $from_begin = false;
    $wait = true;
    $play_number++;
} else if ($game_continue and !$wait) {
    if ($change){
        $level_number++;
    };
    $time_on_question = ((date('h') * 3600) + (date('i') * 60) + date('s'));
    $current_time = $time_on_question;
    if ($level_number > $max_level){
        $max_level = $level_number;
    };
    generation();
    $game_continue = false;
    $wait = true;
    $change - false;
} else {
    $user_answer = check($data->answered);
    $answer_user = "";
    if (($user_answer == $right_answer - 1) and ($current_time - 9 <= $time_on_question) and ($lives > 0)){
        $wait = false;
        $game_continue = true;
        $message = "Правильно!";
        $answer_user = $answers[$right_answer - 1];
        $change  = true;
    } else if (($user_answer != $right_answer - 1) and ($user_answer != -1) and ($current_time - 9 <= $time_on_question)){
        $message = "Неправильно!";
        $game_continue = true;
        $wait = false;
        $change = false;
        $lives = $lives - 1;
        $answer_user = $answers[$user_answer];
    } else if ($current_time - 9 > $time_on_question){
        $message = "Время вышло!";
        $game_continue = true;
        $lives = $lives - 1;
        $wait = false;
        $change = false;
        $answer_user = $answers[$right_answer - 1];
    };
    if ($lives <= 0){
        $wait = false;
        $from_begin = true;
        $message = "Конец";
    };
    echo json_encode(
        [   
            "level" => $level_number,
            "time" =>  10 - ($current_time - $time_on_question),
            "question" => $question,
            "answers" => $answers,
            "message" => $message,
            "lives" => $lives,
            "user_answer" => $answer_user
        ]
    );
};
$_SESSION["level"] = $level_number;
$_SESSION["current_time"] = $current_time;
$_SESSION["time_on_question"] = $time_on_question;
$_SESSION["question"] = $question;
$_SESSION["right_answer"] = $right_answer;
$_SESSION["answers"] = $answers;
$_SESSION["from_begin"] = $from_begin;
$_SESSION["game_continue"] = $game_continue;
$_SESSION["wait"] = $wait;
$_SESSION["lives"] = $lives;
$_SESSION["change"] = $change;
$statistics_data = [
    "login" => $login,
    "play_number" => $play_number,
    "max_level" => $max_level
];
array_push($other_users, $statistics_data);
usort($other_users, function($a, $b){
    return ($b["max_level"] - $a["max_level"]);
});
file_put_contents("../data/statictics.json", json_encode(($other_users)));

function check($array){
    $i = 0;
    foreach ($array as $element){
        if ($element == true){
            return $i;
        } else {
            $i++;
        };
    };
    return -1;
};

function generation(){
    global $level_number, $current_time, $time_on_question, $message,
    $question, $right_answer, $answers;
    $temp = generate($level_number);
    $question = $temp["question"];
    $right_answer = $temp["right_number"];
    $answers = $temp["answers"];
    echo json_encode(
        [   
            "level" => $level_number,
            "time" => $time_on_question - $current_time,
            "question" => $question,
            "answers" => $answers,
            "message" => $message
        ]
    );
};

function generate($level){
    $first = rand(1*$level*$level, 5*$level*$level);
    $second = rand(1*$level*$level, 5*$level*$level);
    $question = $first . " + " . $second;
    $right_number = rand(1, 10);
    $answers = [];
    for ($i = 1; $i <= 10; $i++) {
        if ($i != $right_number){
            $temp_number = rand(-10*$level, 10*$level);
            while ($temp_number == 0){
                $temp_number = rand(-10*$level, 10*$level);
            };
            array_push($answers, $first + $second + $temp_number);
        } else {
            array_push($answers, $first + $second);
        };
    };
    return [
        "question" => $question,
        "right_number" => $right_number,
        "answers" => $answers
    ];
};
?>

