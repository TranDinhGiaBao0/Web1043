const image = document.getElementById('example-image');

image.addEventListener('mouseover', () => {
  image.style.transform = 'scale(1.2)'; // phóng to hình
  image.style.border = '2px solid blue'; // thêm border
});

image.addEventListener('mouseout', () => {
  image.style.transform = 'none'; // xóa hiệu ứng phóng to hình
  image.style.border = 'none'; // xóa border
});
