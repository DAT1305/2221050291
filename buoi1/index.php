<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        echo 'hello world <br>';
        
        echo 'hello 1';
        $ten = 'dat';
        $tuoi = 21;
        
        //hằng
        define("soPi" , "3.14");
        echo soPi . '<br>';

        echo '$ten' .'<br>';
        echo "$ten" . '<br>';
        //chuỗi kiểm tra strlen
        echo strlen($ten) .'<br>';
        echo str_word_count($ten); 
        //tìm kiếm kí tự trong chuỗi
        echo strpos( $ten , "t");
       echo str_replace("dat" , "dat2" , $ten ) .'<br>';
       //toán tử
       $soThuNhat = 10;
       $soThuHai  = 5;
       $tong = $soThuNhat + $soThuHai;
       echo $soThuNhat + $soThuHai;
       echo '<br>';
       echo $soThuNhat - $soThuHai;
       echo '<br>';
       echo $soThuNhat * $soThuHai;
       echo '<br>';
       echo $soThuNhat / $soThuHai;
       echo '<br>';

//câu điều kiện
    if($tong < 15){
        echo 'nho hơn 15';
    }
    elseif($tong > 15){
        echo 'lớn hơn 15';
    }
    else{
        echo 'bằng 15';

    }

// switch case
$color = "red";
    switch ($color){
        case "red" :
         echo 'màu đỏ';
         break ;
         case "blue" :
         echo 'màu xanh';
         break ;
         default:
         echo 'ko màu';
         break ;
    };
for($i ; $i < 100 ; $i++){
    echo $i;
};
$mang = ['dat' , 'minh' , 'nhat'];
echo count($mang);
echo $mang[0];
print_r($mang);
$mang[0] = 'đatoi';
print_r($mang);
unset($mang[0]);
print_r ($mang);
    ?>
</body>
</html>