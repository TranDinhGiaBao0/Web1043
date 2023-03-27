class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = new Date(dob);
    }
  
    getFullName() {
      return `${this.last_name} ${this.first_name}`;
    }
  
    getCurrentAgeByYear() {
      const diff = Date.now() - this.dob.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  
    getCurrentAgeByDay() {
      const diff = Date.now() - this.dob.getTime();
      return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
  }
  
  // Tạo danh sách sinh viên
  const students = [
    new Student(1, 'Trieu', 'Tran', 'Class 1', 'Trieutran@gmaill.com', '0123456789', '2004-05-12'),
    new Student(2, 'Bao', 'tran', 'Class 2', 'baotran@gmaill.com', '0987654321', '2004-09-20'),
    new Student(3, 'thanh', 'nguyen', 'Class 2', 'Thanhtran@gmaill.com', '0123456789', '2002-07-15'),
    new Student(4, 'tho', 'truong', 'Class 2', 'Thotran@gmaill.com', '0987654321', '2003-06-08'),
    new Student(5, 'dung', 'le', 'Class 1', 'dungtran@gmaill.com', '0123456789', '2004-05-29'),
  ];
  
  // Sắp xếp danh sách sinh viên theo tuổi tính theo ngày
  students.sort((a, b) => a.getCurrentAgeByDay() - b.getCurrentAgeByDay());
  
  // In ra danh sách sinh viên
  students.forEach((student) => {
    console.log(`${student.getFullName()} - ${student.getCurrentAgeByYear()} tuổi (${student.getCurrentAgeByDay()} ngày tuổi)`);
  });
  
  // In ra kích thước màn hình
  console.log(`Kích thước màn hình: ${window.screen.width} x ${window.screen.height}`);
        