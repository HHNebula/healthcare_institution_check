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
    <title>보건의료기관 정보 찾기</title>
</head>
<body>
    <%@ include file="/WEB-INF/views/header.jsp" %>

    <div class="container">
        <h2 class="my-4">
            서비스 목록
        </h2>
        <div class="row">
            <div class="col-12 col-md-3 my-3 m-auto">
                <div class="card">
                    <img src="imgs/total_search.png" class="card-img-top" alt="통합 검색 이미지">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">전국 약국 검색</h5>
                        <p class="card-text">사용자가 맞춤형으로 조회할 수 있는 검색 기능을 제공합니다.</p>
                        <a href="/pharmacy" class="btn btn-primary">검색하기</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3 my-3 m-auto">
                <div class="card">
                    <img src="imgs/night_img.png" class="card-img-top" alt="야간 영업 약국 조회 이미지">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">야간 영업 약국 조회</h5>
                        <p class="card-text">야간 영업 중인 약국을 간편하게 조회할 수 있는 기능을 제공합니다.</p>
                        <a href="#" class="btn btn-primary">검색하기</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3 my-3 m-auto">
                <div class="card">
                    <img src="imgs/weekend_img.png" class="card-img-top" alt="주말/공휴일 영업 약국 조회 이미지">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">주말/공휴일 영업 약국 조회</h5>
                        <p class="card-text">주말 및 공휴일 영업 중인 약국을 조회할 수 있는 기능을 제공합니다.</p>
                        <a href="#" class="btn btn-primary">검색하기</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3 my-3 m-auto">
                <div class="card">
                    <img src="imgs/animal_img.png" class="card-img-top" alt="주말/공휴일 영업 약국 조회 이미지">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">동물 약국 조회</h5>
                        <p class="card-text">동물용 의약품 취급 약국을 조회할 수 있는 기능을 제공합니다.</p>
                        <a href="#" class="btn btn-primary">검색하기</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
</body>

</html>