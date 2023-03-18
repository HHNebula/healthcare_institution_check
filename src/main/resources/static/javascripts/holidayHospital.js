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
            var mon = list[i].dutyTime1s + " ~ " + list[i].dutyTime1c;
            var tue = list[i].dutyTime2s + " ~ " + list[i].dutyTime2c;
            var wed = list[i].dutyTime3s + " ~ " + list[i].dutyTime3c;
            var thu = list[i].dutyTime4s + " ~ " + list[i].dutyTime4c;
            var fri = list[i].dutyTime5s + " ~ " + list[i].dutyTime5c;
            var sat = list[i].dutyTime6s + " ~ " + list[i].dutyTime6c;
            var sun = list[i].dutyTime7s + " ~ " + list[i].dutyTime7c;
            var holiday = list[i].dutyTime8s + " ~ " + list[i].dutyTime8c;

            if (list[i].dutyTime1s == null) {
                mon = "휴무"
            }
            if (list[i].dutyTime2s == null) {
                tue = "휴무"
            }
            if (list[i].dutyTime3s == null) {
                wed = "휴무"
            }
            if (list[i].dutyTime4s == null) {
                thu = "휴무"
            }
            if (list[i].dutyTime5s == null) {
                fri = "휴무"
            }
            if (list[i].dutyTime6s == null) {
                sat = "휴무"
            }
            if (list[i].dutyTime7s == null) {
                sun = "휴무"
            }
            if (list[i].dutyTime8s == null) {
                holiday = "휴무"
            }

            var newElement = document.createElement("div");
            newElement.classList.add("d-flex", "justify-content-between", "my-3", "row");

            var leftDiv = document.createElement("div");
            leftDiv.classList.add("col-12", "col-md-8", "my-3");

            var nameElement = document.createElement("h4");
            nameElement.textContent = name;
            var phoneElement = document.createElement("div");
            phoneElement.textContent = "연락처 : " + phone;
            var addressElement = document.createElement("div");
            addressElement.textContent = "주소 : " + address;

            leftDiv.appendChild(nameElement);
            leftDiv.appendChild(phoneElement);
            leftDiv.appendChild(addressElement);

            if (list[i].dutyMapimg != null) {
                var mapimgElement = document.createElement("div");
                mapimgElement.textContent = "상세 위치 : " + list[i].dutyMapimg;
                leftDiv.appendChild(mapimgElement);
            }

            var rightDiv = document.createElement("div");
            rightDiv.classList.add("d-flex", "justify-content-between", "col-12", "col-md-4", "my-3");

            var rlDiv = document.createElement("div");
            rlDiv.classList.add("mx-5");
            var rrDiv = document.createElement("div");

            var monElement = document.createElement("div");
            monElement.textContent = "월요일 : " + mon;
            var tueElement = document.createElement("div");
            tueElement.textContent = "화요일 : " + tue;
            var wedElement = document.createElement("div");
            wedElement.textContent = "수요일 : " + wed;
            var thuElement = document.createElement("div");
            thuElement.textContent = "목요일 : " + thu;
            var friElement = document.createElement("div");
            friElement.textContent = "금요일 : " + fri;
            var satElement = document.createElement("div");
            satElement.textContent = "토요일 : " + sat;
            var sunElement = document.createElement("div");
            sunElement.textContent = "일요일 : " + sun;
            var holidayElement = document.createElement("div");
            holidayElement.textContent = "공휴일 : " + holiday;

            rlDiv.appendChild(monElement);
            rlDiv.appendChild(tueElement);
            rlDiv.appendChild(wedElement);
            rlDiv.appendChild(thuElement);
            rrDiv.appendChild(friElement);
            rrDiv.appendChild(satElement);
            rrDiv.appendChild(sunElement);
            rrDiv.appendChild(holidayElement);

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