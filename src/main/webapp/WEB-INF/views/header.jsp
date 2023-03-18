<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <span class="navbar-brand">
            <img src="imgs/nav_logo.png">
        </span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="/home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pharmacy">전국 약국 검색</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/holidayHospital">전국 명절 비상 진료기관 조회</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/search">주말약국</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/search">동물약국</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
