
// bai 1

function checkPrime(number){
    if(number === 1 || number === 0){
        return false;
    }
    for( let i = 2; i <= number/2; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
var a=[];
var b = [];
function AddnewElement(){
    var n = +prompt("Nhap so luong phan tu mang");

    do{
        while(a.length< n){
            for(let i = 0; i < n; i++){
                a[i] = +prompt("nhap phan tu trong mang");
                if(checkPrime(a[i])){
                    b.push(a[i]);
                }
            }
        }

    }while(n>=50)
}

function Display(arr){
    for(let i = 0; i < arr.length; i++){
        alert(arr[i]);
    }
}
AddnewElement();
Display(a);
Display(b);


// bai 2

function checkEqual(tuso1,mauso1,tuso2,mauso2){
    if(tuso1*mauso2 !== mauso1*tuso2){
        return false;
    }
    return true;
}
function Input(tuso1, mauso1,tuso2,mauso2){
    var isTrue;
    // tuso1 = +prompt("nhap tu so thu  nhat");
    // mauso1 = +prompt("nhap mau so thu nhat");
    //
    // tuso2 = +prompt("nhap tu so thu  hai");
    // mauso2 = +prompt("nhap mau so thu  hai");

    document.write("phan so thu nhat: "+ tuso1 + "/" + mauso1 );
    document.write("  ");
    document.write("phan so thu hai: "+ tuso2 + "/" + mauso2 );

    isTrue = checkEqual(tuso1,mauso1,tuso2,mauso2);
    if(isTrue === true){
        document.write("True");
    }else{
        document.write("False");
    }
}
Input(1,2,2,4);
Input(1,2,1,2);
Input(1,2,2,3);

//bai 3

class Sotietkiem{
    constructor(maso,loaiTietKiem,tenKhachHang,cmnd,ngayMo,soTien) {
        this.maso = maso;
        this.loaiTietKiem = loaiTietKiem;
        this.tenKhachHang = tenKhachHang;
        this.cmnd = cmnd;
        this.ngayMo = ngayMo;
        this.soTien = soTien;
    }

}
const list_Sotietkiem=[];
function disPlay(){
    for(let i = 0; i < list_Sotietkiem.length; i++){
        document.write("ma so: "+list_Sotietkiem[i].maso);
        document.write("loai tiet kiem: "+list_Sotietkiem[i].loaiTietKiem);
        document.write("ten khach hang: "+list_Sotietkiem[i].tenKhachHang);
        document.write("cmnd: "+list_Sotietkiem[i].cmnd);
        document.write("ngay mo: "+list_Sotietkiem[i].ngayMo);
        document.write(" so tien: "+list_Sotietkiem[i].soTien);
    }


}
function addSotietkiem(sotietkiem){

        maso = prompt(" nhap ma so");
        loaiTietKiem= prompt("loai tiet kiem");
        tenKhachHang = prompt("ten khach hang");
        cmnd = +prompt("chung minh nhan dan");
        ngayMo = prompt("ngay mo");
        soTien = +prompt("So tien");
        if(maso.length > 5){
            document.write("ma so toi da 5 ki tu");
            maso = prompt(" nhap ma so");
        }
        for( let i = 0; i < list_Sotietkiem.length; i ++){
            if(list_Sotietkiem[i].maso === maso){
                document.write("Ma so trung nhau");
            }
        }
         sotietkiem = new Sotietkiem(maso,loaiTietKiem,tenKhachHang,cmnd,ngayMo,soTien);
        list_Sotietkiem.push(sotietkiem);
       disPlay();



}
function xoaSoTietKiem(maso){
    maso = +prompt("nhap vao ma so can so");

    for(let i = 0; i < list_Sotietkiem.length; i++){
        if(list_Sotietkiem[i].maso === maso){
            var index = i;
            list_Sotietkiem[i].disPlay();
            var option = prompt("ban chac muon xoa chu: yes/no");
            if(option === 'yes'){
                for(let i =list_Sotietkiem.length-1; i >= index; i-- ){
                    list_Sotietkiem[i] = list_Sotietkiem[i+1];
                    list_Sotietkiem.length--;
                }
            }
        }else{
            document.write("Ma so ban nhap khong trung. nhap lai");
            maso = +prompt("nhap vao ma so can so");
        }
    }
}
var sotietkiem1 = new Sotietkiem("123","ok","thanh","123",2007,123);

addSotietkiem(sotietkiem1);
disPlay();

