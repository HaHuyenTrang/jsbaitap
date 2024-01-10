// document.getElementById("myButton").addEventListener("click", function() {
    
// });
// alert("Xin chào!");

//bai2
// Khai báo và gán giá trị cho biến i kiểu số nguyên
let i = 10;

// Khai báo và gán giá trị cho biến f kiểu số thực
let f = 20.5;

// Khai báo và gán giá trị cho biến b kiểu logic
let b = true;

// Khai báo và gán giá trị cho biến s kiểu chuỗi
let s = "Hà Nội";

// In giá trị của các biến ra màn hình console
console.log("Giá trị của biến i: " + i);
console.log("Giá trị của biến f: " + f);
console.log("Giá trị của biến b: " + b);
console.log("Giá trị của biến s: " + s);



//bai3
// Khai báo biến width và gán giá trị độ rộng của hình chữ nhật
let width = 15;

// Khai báo biến height và gán giá trị chiều cao của hình chữ nhật
let height = 19;

// Tính diện tích của hình chữ nhật
let area = width * height;

// In ra màn hình trình duyệt diện tích của hình chữ nhật
console.log("Diện tích của hình chữ nhật là: " + area);


//bai4
// Hiển thị hộp thoại thông báo và yêu cầu người dùng xác nhận
let confirmation = confirm("Bạn đã đủ 18 tuổi chưa!");

// Kiểm tra xem người dùng đã xác nhận hay không
if (confirmation) {
  console.log("Người dùng đã xác nhận.");
} else {
  console.log("Người dùng đã không xác nhận.");
}


//bai5
// Yêu cầu người dùng nhập điểm cho các môn Vật lý, Hóa học và Sinh học
let diemVatLy = parseFloat(prompt("Nhập điểm Vật lý:"));
let diemHoaHoc = parseFloat(prompt("Nhập điểm Hóa học:"));
let diemSinhHoc = parseFloat(prompt("Nhập điểm Sinh học:"));

// Tính tổng điểm và điểm trung bình
let tongDiem = diemVatLy + diemHoaHoc + diemSinhHoc;
let diemTrungBinh = tongDiem / 3;

// In tổng điểm và điểm trung bình lên màn hình console
console.log("Tổng điểm: " + tongDiem);
console.log("Điểm trung bình: " + diemTrungBinh);


//bai6
// Yêu cầu người dùng nhập giá trị độ C
let doC = parseFloat(prompt("Nhập giá trị độ C:"));

// Chuyển đổi độ C sang độ F
let doF = (doC * 9/5) + 32;

// In kết quả độ F ra màn hình console
console.log("Giá trị độ F tương ứng: " + doF);




//bai7
// Yêu cầu người dùng nhập chiều dài và chiều rộng
let chieuDai = parseFloat(prompt("Nhập chiều dài của hình chữ nhật:"));
let chieuRong = parseFloat(prompt("Nhập chiều rộng của hình chữ nhật:"));

// Tính chu vi và diện tích hình chữ nhật
let chuViCN = 2 * (chieuDai + chieuRong);
let dienTichCN = chieuDai * chieuRong;

// In chu vi và diện tích ra màn hình console
console.log("Chu vi của hình chữ nhật là: " + chuViCN);
console.log("Diện tích của hình chữ nhật là: " + dienTichCN);



//bai8
// Khai báo hằng số PI
const PI = 3.14159;

// Yêu cầu người dùng nhập bán kính của hình tròn
let banKinh = parseFloat(prompt("Nhập bán kính của hình tròn:"));

// Tính chu vi và diện tích hình tròn
let chuViTron = 2 * PI * banKinh;
let dienTichTron = PI * Math.pow(banKinh, 2);

// In chu vi và diện tích ra màn hình console
console.log("Chu vi của hình tròn là: " + chuViTron);
console.log("Diện tích của hình tròn là: " + dienTichTron);



//bai9
let a = 5;
let c = "5";

console.log(a == c);   // Kết quả: true
console.log(a === c);  // Kết quả: false
console.log(a != c);   // Kết quả: false
console.log(a !== c);  // Kết quả: true

// Giải thích:

// a == c so sánh giá trị của a và c mà không quan tâm đến kiểu dữ liệu. Trong trường hợp này, giá trị của a là số 5, còn giá trị của c là chuỗi "5". Tuy kiểu dữ liệu khác nhau, nhưng JavaScript sẽ tự động chuyển đổi kiểu dữ liệu để thực hiện phép so sánh, và vì giá trị của a và c là như nhau, kết quả là true.

// a === c so sánh và kiểm tra giá trị cũng như kiểu dữ liệu của a và c. Trong trường hợp này, kiểu dữ liệu của a là số, còn kiểu dữ liệu của c là chuỗi. Vì kiểu dữ liệu không giống nhau, kết quả của phép so sánh là false.

// a != c so sánh giá trị của a và c, không quan tâm đến kiểu dữ liệu. Trong trường hợp này, giá trị của a và c là như nhau, nên kết quả là false.

// a !== c so sánh và kiểm tra giá trị cũng như kiểu dữ liệu của a và c. Vì giá trị của a và c là như nhau, nhưng kiểu dữ liệu khác nhau, kết quả của phép so sánh là true.




//bai10
let d = 6;
let result = ++d + d + d++ + ++d + d;

console.log(result);  // Kết quả: 33
console.log(d);       // Kết quả: 9

// Giải thích:

// ++d là toán tử tăng giá trị của biến d lên 1 trước khi sử dụng giá trị đó trong phép tính. Trong trường hợp này, giá trị của d được tăng lên 1 và trở thành 7.

// d++ là toán tử tăng giá trị của biến d lên 1 sau khi sử dụng giá trị đó trong phép tính. Trong trường hợp này, giá trị của d (là 7) được sử dụng trong phép tính và sau đó tăng lên 1. Do đó, giá trị của d++ trong phép tính là 7.

// Khi tính toán biểu thức ++d + d + d++ + ++d + d, ta có:

// ++d (7) + d (7) + d++ (7) + ++d (9) + d (9) = 7 + 7 + 7 + 9 + 9 = 39.
// Giá trị của result là 39.
// Sau khi thực hiện chương trình, giá trị của biến d là 9. Bởi vì ta đã thực hiện các phép tăng giá trị của d bằng ++d và d++ trong biểu thức.