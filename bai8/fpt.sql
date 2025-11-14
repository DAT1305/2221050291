CREATE TABLE IF NOT EXISTS quan_ly_web_phim;
1 thể loaị
    mã thể loại varchar ,
    tên thể loại varchar,
    maphim foreign key,
2 phim
    id int auto increasement  primary key,
    tenphim varchar ,
    thoiluong float,
    namphathanh date


3 người dùng
    id int auto increasement primary key,
    username varchar ,
    password varchar


4 quốc gia
    id int auto increase ment primarykey,
    tenquocgia varchar ,
    maquocgia varchar

5 tập phim
    id int auto increase ment primarykey,
    phim forein key,
    sotap int ,
    thoiluong float 