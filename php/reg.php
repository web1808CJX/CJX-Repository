<?php
    header("Content-type:text/html;charset=utf-8;");

    $useremail = $_POST["useremail"];
    $userpw = $_POST["userpw"];
    $userid = $_POST["userid"];
    $username = $_POST["username"];

    $conn = mysql_connect("localhost","root","root");   //连接数据库
    if(!$conn){
        die("连接失败".mysql_error());
    }else{
        mysql_select_db("huawei",$conn);   //选择数据库

        $sqlstr = "select * from reg where useremail = '$useremail'";     //查询
        $result = mysql_query($sqlstr,$conn);  //返回值是表格
        $rows = mysql_num_rows($result);     //返回表格有几行
        if($rows==0){
            $sqlstr = "insert into reg(useremail,userpw,userid,username) values('$useremail','$userpw','$userid','$username')";  //保存
            $result = mysql_query($sqlstr,$conn);  

            mysql_close($conn);     //关闭数据库
            if($result == 1){
                echo "注册成功,请<a href = '../log.html'>登录</a>";
            }else{
                echo "注册失败,请重新<a href = '../reg.html'>注册</a>";
            }
        }else{
            echo "用户名已存在,请重新<a href = '../reg.html'>注册</a><br/>
                              请<a href = '../log.html'>登录</a>";
        }
    }
?>