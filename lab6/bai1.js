//khoi tao phuong thuc lay tat cac phan tu co lop skider-image
const images = document.querySelectorAll('.slider-image');
//khoi tao bien currentIndex de theo doi chi muc hinh anh hien tai dang duoc hien thi
let currentIndex = 0;
//hien thi hinh anh
function showSlide(index) {
  images[currentIndex].classList.remove('active');
  currentIndex = (index + images.length) % images.length;
  //them lop active vao hinh anh bang classist.add
  images[currentIndex].classList.add('active');
}
//chuyen doi cac anh bang cac ham
function nextSlide() {
  showSlide(currentIndex + 1);
}
function previousSlide() {
  showSlide(currentIndex - 1);
}
//goi ham showslide va currentIndex ban dau de hien thi anh dau tien khi trang duoc tai len
showSlide(currentIndex);

