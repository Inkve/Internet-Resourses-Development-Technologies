<?php 
$data = json_decode(file_get_contents("php://input"));
$file_data = json_decode(file_get_contents("../data/temp_data.json"))[0];
$level_number = $file_data->level;
$current_time = $file_data->current_time + 1;
$time_on_question = $file_data->time_on_question;
$question = $file_data->question;
$right_answer = $file_data->right_answer;
$answers = $file_data->answers;
$from_begin = $file_data->from_begin;
$game_continue = $file_data->game_continue;
$wait = $file_data->wait;
$message = "";

if ($from_begin and !$wait){
    $level_number = 1;
    generation();
    $from_begin = false;
    $wait = true;
} else if ($game_continue and !$wait) {
    $level_number++;
    generation();
    $game_continue = false;
    $wait = true;
} else {
    $user_answer = check($data->answered);
    if (($user_answer == $right_answer-1) and $current_time <= $time_on_question){
        $wait = false;
        $game_continue = true;
        $message = "Правильно!";
        $current_time = 0;
    } else if (($user_answer != $right_answer) and ($user_answer != -1)){
        $message = "Неправильно!";
        $wait = false;
        $from_begin = true;
        $current_time = 0;
    } else if ($current_time > $time_on_question){
        $message = "Время вышло!";
        $wait = false;
        $from_begin = true;
        $current_time = 0;
    };
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

$data_2_file = [
    "level" => $level_number,
    "current_time" => $current_time,
    "time_on_question" => $time_on_question,
    "question" => $question,
    "right_answer" => $right_answer,
    "answers" => $answers,
    "from_begin" => $from_begin,
    "game_continue" => $game_continue,
    "wait" => $wait
];
file_put_contents("../data/temp_data.json", json_encode(array($data_2_file)));

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
    $question, $right_answer, $answers, $from_begin, $game_continue, $wait;
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

