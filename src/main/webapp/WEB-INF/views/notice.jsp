<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <title>약국 정보 찾기</title>
</head>
    <div class="container">
        <div class="text-center">
            <img src="imgs/notice_img.png" class="m-auto">
        </div>
        <div class="row">
            <div class="col-12 col-md-9 m-auto">
                <div class="my-3">
                    해당 프로젝트는 국립중앙의료원에서 제공하는 '전국 약국 정보 조회 서비스'의 REST API를 활용하여 개발된 프로젝트입니다.
                </div>
                <div class="my-3">
                    프로젝트를 실행하기 전에, 먼저 공공데이터 포털에서 '전국 약국 정보 조회 서비스'의 서비스키를 발급받아야 합니다.
                </div>
                <div class="my-3">
                    발급된 서비스키는 프로젝트 내 코드에서 "..." 부분을 수정하여 입력해야 합니다.
                </div>
                <div class="my-3 text-center">
                    <a href="/home" class="btn btn-primary col-12 col-md-4 my-5">시작하기</a>
                </div>
            </div>
        </div>
    </div>
<body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
</body>

</html>