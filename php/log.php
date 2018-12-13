<?php
    header("Content-type:text/html;charset=utf-8;");

    $useremail = $_POST["useremail"];
    $userpw = $_POST["userpw"];

    $conn = mysql_connect("localhost","root","root");
    if(!$conn){
        // die("链接失败.mysql_error()")；
    }else{
        mysql_select_db("huawei",$conn);

        $sqlstr = "select * from reg where useremail='$useremail' and userpw='$userpw'";
        $result = mysql_query($sqlstr,$conn);
        
        mysql_close($conn);

        if(mysql_num_rows($result)==0){
            echo "登录失败,请重新<a href = '../log.html'>登录</a>";
        }else{
            echo "登录成功,请进入<a href = '../index.html'>首页</a>";
        }
    }
?>