let danhSachPhim = [
    {
        id : 1,
        tenPhim: "mưa đỏ", 
        namPhatHanh: 2025,
        tuoi: 16,
        thoiLuong:2,
        quocGia: "vietNam",
       poster: "mua-do-top-1-1756596974-4686-1756597005.webp",
        theLoai: "phim chiếu rạp"
    },
    {
         id : 2,
        tenPhim: "conan", 
        namPhatHanh: 2023,
        tuoi: 10,
        thoiLuong:1.5,
        quocGia: "nhật bản",
        poster: "biqr90h7_1920x1080-conan-viendando.png",
        theLoai: "phim hoạt hình"
    },
     {
         id : 3,
        tenPhim: "đào phở piano", 
        namPhatHanh: 2025,
        tuoi: 18,
        thoiLuong:1.5,
        quocGia: "việt nam",
        poster: "daopho.webp",
        theLoai: "lãng mạn sử thi"
    },
    {
         id : 4,
        tenPhim: "Kỷ băng hà (Ice Age)", 
        namPhatHanh: 2025,
        tuoi: 10,
        thoiLuong:1.2,
        quocGia: "việt nam",
        poster: "phim-hoat-hinh-cho-tre-gau-do-bien-hinh-845x475.jpg",
        theLoai: "Cuộc phiêu lưu, hài kịch, gia đình"
    },
];

let PhimHienTai = danhSachPhim[0];

let banner = document.getElementById('banner2');
let namephim = document.getElementById('namephim');
let namsinh = document.getElementById('namsinh');

let quocgia = document.getElementById('quocgia');

let thoiluong = document.getElementById('thoiluong');
let xemphim = document.getElementById('xemphim');
function clickphim(id){
    
    for(let i = 0; i < danhSachPhim.length ; i ++){
        if(danhSachPhim[i].id == id){
            banner.src = danhSachPhim[i].poster;
            namephim.innerText ="> " + danhSachPhim[i].tenPhim;
            namsinh.innerText = "> " + danhSachPhim[i].namPhatHanh;

            quocgia.innerText = "> " + danhSachPhim[i].quocGia;

            thoiluong.innerText = "> " + danhSachPhim[i].thoiLuong + "Giờ";
            xemphim.style.display ="block";

        }
    }
}
