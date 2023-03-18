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
    <title>명절 진료 병원 정보 찾기</title>
</head>
<body>
    <%@ include file="/WEB-INF/views/header.jsp" %>
    <div class="container">
        <h2 class="my-4">
            통합 검색
        </h2>
        <div class="row m-auto">
            <div class="col-12 col-md-2 my-3">
                <label class="form-label" for="doSelect">시/도 선택</label>
                <select class="form-select" name="doSelect" id="doSelect" onchange="populateSi()">
                    <option value="">전체</option>
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>
                    <option value="부산">부산</option>
                    <option value="대구">대구</option>
                    <option value="광주">광주</option>
                    <option value="인천">인천</option>
                    <option value="대전">대전</option>
                    <option value="울산">울산</option>
                    <option value="강원">강원</option>
                    <option value="충청남도">충청남도</option>
                    <option value="충청북도">충청북도</option>
                    <option value="전라남도">전라남도</option>
                    <option value="전라북도">전라북도</option>
                    <option value="경상남도">경상남도</option>
                    <option value="경상북도">경상북도</option>
                    <option value="제주">제주</option>
                </select>
            </div>
            <div class="col-12 col-md-2 my-3">
                <label class="form-label" for="si">시/군/구 선택</label>
                <select class="form-select" name="si" id="si">
                    <option value="">전체</option>
                </select>
            </div>
            <div class="col-12 col-md-2 my-3">
                <label class="form-label" for="medicalCode">진료과 선택</label>
                <select class="form-select" name="medicalCode" id="medicalCode">
                    <option value="">전체</option>
                    <option value="D001">내과</option>
                    <option value="D002">소아청소년과</option>
                    <option value="D003">신경과</option>
                    <option value="D005">피부과</option>
                    <option value="D006">외과</option>
                    <option value="D007">흉부외과</option>
                    <option value="D008">정형외과</option>
                    <option value="D009">신경외과</option>
                    <option value="D010">성형외과</option>
                    <option value="D011">산부외과</option>
                    <option value="D012">안과</option>
                    <option value="D013">이비인후과</option>
                    <option value="D014">비뇨기과</option>
                    <option value="D015">결핵과</option>
                    <option value="D016">재활의학과</option>
                    <option value="D017">마취통증의학과</option>
                    <option value="D018">영상의학과</option>
                    <option value="D022">가정의학과</option>
                    <option value="D023">핵의학과</option>
                    <option value="D024">응급의학과</option>
                    <option value="D025">산업의학과</option>
                    <option value="D026">치과</option>
                    <option value="D029">예방의학과</option>
                    <%-- <option value="H">약국</option>
                    <option value="G">한의원</option> --%>
                </select>
            </div>
            <div class="col-12 col-md-1 my-3 d-flex align-items-end">
                <input class="form-control" id="pageNo" name="pageNo" type="hidden" value="1">
                <div class="btn btn-primary w-100" id="searchBtn" onclick="search()">검색</div>
            </div>
        </div>

        <h2 class="my-4" id="searchHeader">
        </h2>

        <div id="searchResult">
        </div>

        <div id="buttons" class="my-3 d-flex justify-content-center">
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/javascripts/holidayHospital.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
</body>

</html>