function populateSi() {
    const doMenu = document.getElementById('doSelect');
    const siMenu = document.getElementById('si');

    const selectedDo = doMenu.value;

    let siList = [];
    switch (selectedDo) {
        case '서울':
            siList = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];
            break;
        case '경기':
            siList = ['가평군', '고양시', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시', '성남시', '수원시', '시흥시', '안산시', '안성시', '안양시', '양주시', '양평군', '여주시', '연천군', '오산시', '용인시', '의왕시', '의정부시', '이천시', '파주시', '평택시', '포천시', '하남시', '화성시'];
            break;
        case '부산':
            siList = ['중구', '서구', '동구', '영도구', '부산진구', '동래구', '남구', '북구', '해운대구', '사하구', '금정구', '강서구', '연제구', '수영구', '사상구', '기장군'];
            break;
        case '대구':
            siList = ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군', '계양구', '영천시'];
            break;
        case '광주':
            siList = ['동구', '서구', '남구', '북구', '광산구', '고창군'];
            break;
        case '인천':
            siList = ['중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구', '강화군', '옹진군'];
            break;
        case '대전':
            siList = ['중구', '동구', '서구', '유성구', '대덕구', '공주시'];
            break;
        case '울산':
            siList = ['중구', '동구', '서구', '유성구', '대덕구', '공주시'];
            break;
        case '강원':
            siList = ['춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시', '고성군', '홍천군', '횡성군', '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '양양군', '영월군'];
            break;
        case '충청남도':
            siList = ['천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시', '금산군', '부여군', '서천군', '청양군', '홍성군', '태안군', '보령시', '공주시', '천안시'];
            break;
        case '충청북도':
            siList = ['청주시', '충주시', '제천시', '증평군', '진천군', '음성군', '단양군', '영동군', '옥천군', '보은군', '괴산군', '청원군', '청주시', '충주시'];
            break;
        case '전라남도':
            siList = ['목포시', '여수시', '순천시', '나주시', '광양시', '화순군', '나주시', '영암군', '무안군', '함평군', '장흥군', '강진군', '해남군', '고흥군', '보성군', '신안군', '담양군', '구례군', '곡성군', '장성군', '당진군'];
            break;
        case '전라북도':
            siList = ['전주시', '군산시', '익산시', '정읍시', '남원시', '고창군', '부안군', '임실군', '순창군', '장수군', '진안군', '무주군', '완주군', '김제시', '전주시'];
            break;
        case '경상남도':
            siList = ['창원시', '진주시', '통영시', '사천시', '김해시', '밀양시', '거제시', '양산시', '의령군', '함안군', '창녕군', '고성군', '남해군', '하동군', '산청군', '함양군', '거창군', '합천군'];
            break;
        case '경상북도':
            siList = ['김천시', '안동시', '영주시', '상주시', '문경시', '영양군', '영덕군', '청도군', '고령군', '성주군', '칠곡군', '예천군', '봉화군', '울진군', '을릉군', '포항시', '경산시'];
            break;
        case '제주':
            siList = ['제주시', '서귀포시', '남제주군', '북제주군'];
            break;
        default:
            break;
    }

    // 기존 시/군/구 목록 삭제
    while (siMenu.options.length > 1) {
        siMenu.options.remove(1);
    }

    // 새로운 시/군/구 목록 추가
    for (let i = 0; i < siList.length; i++) {
        const option = document.createElement('option');
        option.text = siList[i];
        option.value = siList[i];
        siMenu.add(option);
    }
}

function search() {
    document.getElementById("pageNo").value = 1;
    const data = new Map();
    data.set('doSelect', document.getElementById("doSelect").value);
    data.set('si', document.getElementById("si").value);
    data.set('medicalCode', document.getElementById("medicalCode").value);
    data.set('pageNo', document.getElementById("pageNo").value);
    searchAction(data);
}

function searchPrev() {
    let pageNo = parseInt(document.getElementById("pageNo").value);
    document.getElementById("pageNo").value = pageNo - 1;

    const data = new Map();
    data.set('doSelect', document.getElementById("doSelect").value);
    data.set('si', document.getElementById("si").value);
    data.set('medicalCode', document.getElementById("medicalCode").value);
    data.set('pageNo', document.getElementById("pageNo").value);
    searchAction(data);
}

function searchNext() {
    let pageNo = parseInt(document.getElementById("pageNo").value);
    document.getElementById("pageNo").value = pageNo + 1;

    const data = new Map();
    data.set('doSelect', document.getElementById("doSelect").value);
    data.set('si', document.getElementById("si").value);
    data.set('medicalCode', document.getElementById("medicalCode").value);
    data.set('pageNo', document.getElementById("pageNo").value);
    searchAction(data);
}

function searchAction(data) {
    const searchHeader = document.getElementById("searchHeader");
    searchHeader.innerHTML = "검색 결과"
    const searchResult = document.getElementById("searchResult");
    searchResult.innerHTML = "";
    $.ajax({
        url: '/getApiHolidayHospital',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(Object.fromEntries(data)),
        success: function (list) {
            console.log(list);
            resultUpdate(list);
            buttonUpdate();
        },
        error: function (error) {
            console.error(error);
        }
    });
}

function buttonUpdate() {
    let pageNo = parseInt(document.getElementById("pageNo").value);
    let buttonsElement = document.getElementById("buttons");
    buttonsElement.innerHTML = "";
    if (pageNo != 1) {
        var newElement = document.createElement("div");
        newElement.classList.add("mx-3", "btn", "btn-primary");
        newElement.innerHTML = "이전"
        newElement.addEventListener("click", searchPrev);
        buttonsElement.appendChild(newElement);
    }
    var newElement = document.createElement("div");
    newElement.classList.add("mx-3", "btn", "btn-primary");
    newElement.innerHTML = "다음"
    newElement.addEventListener("click", searchNext);
    buttonsElement.appendChild(newElement);
}

function resultUpdate(list) {
    if (list.length > 0) {
        for (var i = 0; i < list.length; i++) {
            var name = list[i].dutyName;
            var phone = list[i].dutyTel1;
            var address = list[i].dutyAddr;
            var address = list[i].dutyAddr;
            var type = list[i].dutyDivName;

            var dutyDay1 = null;
            var dutyDay2 = null;
            var dutyDay3 = null;
            var dutyDay4 = null;
            var dutyDay5 = null;
            var dutyDay6 = null;
            var dutyDaytime1 = '휴무';
            var dutyDaytime2 = '휴무';
            var dutyDaytime3 = '휴무';
            var dutyDaytime4 = '휴무';
            var dutyDaytime5 = '휴무';
            var dutyDaytime6 = '휴무';

            if (list[i].dutyDay1 != null) {
                dutyDay1 = list[i].dutyDay1;
                if (list[i].dutyDaytime1 != null) {
                    dutyDaytime1 = list[i].dutyDaytime1;
                }
            }

            if (list[i].dutyDay2 != null) {
                dutyDay2 = list[i].dutyDay2;
                if (list[i].dutyDaytime2 != null) {
                    dutyDaytime2 = list[i].dutyDaytime2;
                }
            }

            if (list[i].dutyDay3 != null) {
                dutyDay3 = list[i].dutyDay3;
                if (list[i].dutyDaytime3 != null) {
                    dutyDaytime3 = list[i].dutyDaytime3;
                }
            }

            if (list[i].dutyDay4 != null) {
                dutyDay4 = list[i].dutyDay4;
                if (list[i].dutyDaytime4 != null) {
                    dutyDaytime4 = list[i].dutyDaytime4;
                }
            }

            if (list[i].dutyDay5 != null) {
                dutyDay5 = list[i].dutyDay5;
                if (list[i].dutyDaytime5 != null) {
                    dutyDaytime5 = list[i].dutyDaytime5;
                }
            }

            if (list[i].dutyDay6 != null) {
                dutyDay6 = list[i].dutyDay6;
                if (list[i].dutyDaytime6 != null) {
                    dutyDaytime6 = list[i].dutyDaytime6;
                }
            }

            // Main Box
            var newElement = document.createElement("div");
            newElement.classList.add("d-flex", "justify-content-between", "my-3", "row");

            // 메인의 왼쪽 부분 - 병원 정보
            var leftDiv = document.createElement("div");
            leftDiv.classList.add("col-12", "col-md-8", "my-3");

            var nameElement = document.createElement("h4");
            nameElement.textContent = name;
            var typeElement = document.createElement("div");
            typeElement.textContent = "구분 : " + type;
            var phoneElement = document.createElement("div");
            phoneElement.textContent = "연락처 : " + phone;
            var addressElement = document.createElement("div");
            addressElement.textContent = "주소 : " + address;

            leftDiv.appendChild(nameElement);
            leftDiv.appendChild(typeElement);
            leftDiv.appendChild(phoneElement);
            leftDiv.appendChild(addressElement);

            // 메인의 우측 부분 - 진료 날짜 및 시간
            var rightDiv = document.createElement("div");
            rightDiv.classList.add("d-flex", "justify-content-center", "col-12", "col-md-4", "my-3");

            var rlDiv = document.createElement("div");
            var rrDiv = document.createElement("div");
            rlDiv.classList.add("me-5");

            var dateElement1 = document.createElement("div");
            dateElement1.textContent = "명절 날짜";
            rlDiv.appendChild(dateElement1);
            var dateElement2 = document.createElement("div");
            dateElement2.textContent = "진료 시간";
            rrDiv.appendChild(dateElement2);

            if (dutyDay1 != null) {
                var dutyDay1Element = document.createElement("div");
                dutyDay1Element.textContent = dutyDay1;
                rlDiv.appendChild(dutyDay1Element);
                var dutyDaytime1Element = document.createElement("div");
                dutyDaytime1Element.textContent = dutyDaytime1;
                rrDiv.appendChild(dutyDaytime1Element);
            }

            if (dutyDay2 != null) {
                var dutyDay2Element = document.createElement("div");
                dutyDay2Element.textContent = dutyDay2;
                rlDiv.appendChild(dutyDay2Element);
                var dutyDaytime2Element = document.createElement("div");
                dutyDaytime2Element.textContent = dutyDaytime2;
                rrDiv.appendChild(dutyDaytime2Element);
            }

            if (dutyDay3 != null) {
                var dutyDay3Element = document.createElement("div");
                dutyDay3Element.textContent = dutyDay3;
                rlDiv.appendChild(dutyDay3Element);
                var dutyDaytime3Element = document.createElement("div");
                dutyDaytime3Element.textContent = dutyDaytime3;
                rrDiv.appendChild(dutyDaytime3Element);
            }

            if (dutyDay4 != null) {
                var dutyDay4Element = document.createElement("div");
                dutyDay4Element.textContent = dutyDay4;
                rlDiv.appendChild(dutyDay4Element);
                var dutyDaytime4Element = document.createElement("div");
                dutyDaytime4Element.textContent = dutyDaytime4;
                rrDiv.appendChild(dutyDaytime4Element);
            }

            if (dutyDay5 != null) {
                var dutyDay5Element = document.createElement("div");
                dutyDay5Element.textContent = dutyDay5;
                rlDiv.appendChild(dutyDay5Element);
                var dutyDaytime5Element = document.createElement("div");
                dutyDaytime5Element.textContent = dutyDaytime5;
                rrDiv.appendChild(dutyDaytime5Element);
            }

            if (dutyDay6 != null) {
                var dutyDay6Element = document.createElement("div");
                dutyDay6Element.textContent = dutyDay6;
                rlDiv.appendChild(dutyDay6Element);
                var dutyDaytime6Element = document.createElement("div");
                dutyDaytime6Element.textContent = dutyDaytime6;
                rrDiv.appendChild(dutyDaytime6Element);
            }

            rightDiv.appendChild(rlDiv);
            rightDiv.appendChild(rrDiv);

            newElement.appendChild(leftDiv);
            newElement.appendChild(rightDiv);

            searchResult.appendChild(newElement);
        }
    } else {
        alert("검색 결과가 없거나 적어 페이지가 표시되지 않습니다.\n이전으로 돌아가거나 검색 조건을 바꾸어 새로 검색해보세요.");
    }
}

window.onload = function () {
    search();
}