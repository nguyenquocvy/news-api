//xử lí cho phần search đóng mở nguồn w3school; 
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

//lấy dữ liệu từ api hiển thị lên trang
function showApi() {
    //hiển thị biểu tượng loading
    document.getElementById("spinner").removeAttribute("hidden");
    fetch("https://gnews.io/api/v4/top-headlines?&token=bd0c327c97e0a7a97f678b4d5fbef476")
        .then(result => result.json())
        .then(data => {
            //console.log(data.articles);
            let mang = data.articles;
            let out = "";
            for (var i in mang) {
                out += "<div class ='col-md-4 col-sm-4 col-xs-12' style='margin-top: 2%'>" +
                    "<img src = '" + mang[i].image + "'class ='img-fluid rounded mx-auto d-block' style='width: 100%'/>" +
                    "</div>" +

                    "<div class ='​col-md-8 col-sm-8 col-xs-12' style='margin-top: 1.8%'>" +
                    "<h4><a href='" + mang[i].url + "'target='_blank'>" + mang[i].title + "</a></h4>" +
                    "<p style='margin-top: 2%'><i>" + mang[i].publishedAt + "</i></p>" +
                    "<p style='margin-top: 4%'> " + mang[i].description + "</p>" +
                    "</div>";
            }
            document.getElementById("body").innerHTML = out;
            //hiển thị api xong thì ẩn biểu tượng loading
            document.getElementById("spinner").setAttribute('hidden', ' ');
        })
}
window.onload = showApi;

//hàm search
function search() {
    let keyword = document.getElementById("keywords").value;
    if (keyword == "" || keyword == " ") {
        alert("Bạn chưa nhập tìm kiếm ")
    } else {
        //hiển thị biểu tượng loading
        document.getElementById("spinner").removeAttribute("hidden");
        fetch("https://gnews.io/api/v4/search?q=" + keyword + "&token=bd0c327c97e0a7a97f678b4d5fbef476")
            .then(result => result.json())
            .then(data => {
                //console.log(data);
                let mang = data.articles;
                let out = "";
                for (var i in mang) {
                    out += "<div class ='col-md-4 col-sm-4 col-xs-12' style='margin-top: 2%'>" +
                        "<img src = '" + mang[i].image + "'class ='img-fluid rounded mx-auto d-block' style='width: 100%'/>" +
                        "</div>" +

                        "<div class ='​col-md-8 col-sm-8 col-xs-12' style='margin-top: 1.8%'>" +
                        "<h4><a href='" + mang[i].url + "'target='_blank'>" + mang[i].title + "</a></h4>" +
                        "<p style='margin-top: 2%'><i>" + mang[i].publishedAt + "</i></p>" +
                        "<p style='margin-top: 4%'> " + mang[i].description + "</p>" +
                        "</div>";
                }
                document.getElementById("myOverlay").style.display = "none";
                document.getElementById("body").innerHTML = out;
                document.getElementById("keywords").value = "";
                //hiển thị api xong thì ẩn biểu tượng loading
                document.getElementById("spinner").setAttribute('hidden', ' ');
            })

    }

}

