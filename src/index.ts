import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import fs from "fs";
let app: Application = express();
dotenv.config();
let { PORT, HOST } = process.env;
app.listen(PORT, () => console.log(`Hello ${HOST}:${PORT}`));
function count_zero(n: number) {
  let count = 0;
  let i = 0;
  let j = n;
  while (i == 0) {
    i = j % 10;
    j = j / 10;
    if (i != 0) return count;
    count++;
  }

  return count;
}
app.get("/", (req: Request, res: Response) => {
  res.send("HIhihih");
});
// ép kiểu cho hàm
let tesst: number = 2;
let tessst: number = 2;
// trong function phải ép kiểu
let func = (hihih: number) => {
  return 100000 * tessst;
};
//ubuntu
let ob = {
  id: 1,
  test: function () {
    // vì this chỉ có tác dụng trong 1 hàm function test do this là thằng cha trỏ tới thuộc tính con là id,
    // vì đã thêm 1 hàm khác nũa là hàm setTimeout lên lúc này this là this của thằng setTimeout lên khi trỏ tới id 1 và nó k tìm đc id 1 báo lỗi
    // các giải quyết là khi bạn muốn dùng 2 function lồng nhau mà sử dụng từ khóa this ở thằng function cha thì gán nó vào 1 biến ở function cha như vậy khi xuống bên dưới sẽ có thể sử dụng đc từ khóa this thông qua biến đã gấn, tránh bị nhầm lẫn do thằng function con cũng là 1 cái this.
    let hi = this;
    setTimeout(function () {
      console.log(hi.id);
    }, 1000);
  },
};
///Gán giá trị mặc định cho function
// Nếu không muốn để dữ liệu bên dưới có thể gán thẳng giá trị cho tham số của hàm
// trong trường hợp muốn thay đổi tham số thì ở phần gọi hàm thêm đối số là hàm sẽ hiểu là thay đổi
// Nếu không muốn thay đổi tham số biến a, nhưng lại muốn đổi biến b
// cần để a ở phần đối số là undifine vì như vậy nó sẽ hiểu đc là a lấy giá trị tham số tạo mặc định của hàm
function hihih(value = 1000, hehe = value * 2, ahh: number) {
  console.log(value + hehe);
  // argument là những tham số đã khai báo ở phía trên hàm, nếu muốn lấy tổng số lượng phần tử sài agument.length
}
//res Parameter
// nếu bạn muốn dữ liệu truyền vào hàm có thể là 1 mảng dữ liệu mà gồn nhiều tham số có thể sài aggument
// truyền vào từng phần tử lấy ra 1 mảng
function resparameter(...color: string[]) {
  for (let i in color) console.log(color[i]);
}
// spread Parameter
// Nếu resparameter chỉ khai báo mảng vs phần tử bất kỳ và tham số truyền sẽ là các biến ở bên dưới
// spead parameter sẽ khai báo 1 mảng
function speardParameter(...color: string[]) {
  for (let i in color) console.log(color[i]);
}
let colors = ["ahah", "bububu"];

// Bóc tác Array
// bên cạnh việc tạo mảng ta cũng có thể bóc tách các phần tử trong mảng ra ngoài vằng cách gán cho phần tử 1 key
// để truy xuất phần tử chỉ cần gọi tới key đó
// nếu muốn khai báo 1 phần tử trong mảng thì mà các phần từ kế nó k muốn thì để , và k điền thao số và phần tử k muốn khai báo
// Ngoài ra nó cũng có thể sử dụng dưới dạng res parameter
// Nếu để dạng resparameter thì nó sẽ lấy từ phần tử khai báo cho tới các phần tử phía sau nó và định dạng dưới dạng mảng
// Nếu giá trị bóc tách ở đây là 1 chuỗi thì sẽ trả vè từng ký tự trong chuỗ khi forin, nếu k forin sẽ trả về 1 cái mảng và mỗi phần tử trong mảng và 1 chữ trong cái chuỗi đó
let arr: string[] = ["A", "B", "C"];
let [a, ...b] = arr;
// Bóc tác Object
// ngoài cách trên ta có thể tạo 1 cái key cho các phần tử bóc tách bằng cách thêm sau phần tử đó là 1 cái ky
let Obtest = {
  id: 1,
  name: "Bùi ANh",
  address: "Hồ Chí Minh",
};
let { id, name, address } = Obtest;
// For in and of, cả 2 đứa này đều có thể sử dụng cho arr, ob, value is string
// For in duyệt index: Số thứ tự của từng phần tư trog array
let forOFTest = ["a", "b", "c"];
// for (const key in forOFTest) {
//     console.log(key);
// }
//For of duyệt value: giá trị của từng phần tử trong array
// for (const item of forOFTest) {
//     console.log(item);
// }
//Object
// Contructor hàm khởi tạo. hàm này đc gọi khi 1 đối tượng đc khởi tạo
// static nếu có phương thức này có thể trỏ thẳng tới class và gọi hàm thay vì việc phải tạo mới 1 đối tượng và truy vấm class thông qua đối tượng
// Kết thừa thì cần extend class cần kế thừa, và khai báo phương thức supper để class đc kế thừa hiểu cái thuộc tính này là kế thừa từ cha
// Module: Phân chia chương trình thành nhiều thành phần khác nhau, mỗi thành phần là 1 module
class Person {
  protected id: string;
  protected name: string;
  protected address: string;
  constructor(id: string, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
  public newSv(): void {
    console.log(`ID: ${this.id}
                    NAME: ${this.name}
                    ADDRESS: ${this.address}`);
  }
  public static getAllDataSV() {
    console.log("hiih");
  }
}
class Student extends Person {
  private mediumScore: number;
  constructor(id: string, name: string, address: string, mediumScore: number) {
    super(id, name, address);
    this.mediumScore = mediumScore;
  }
  public newPerson(): void {
    super.newSv();
  }
}
/**
 * basic javascript
 * array
 */
let arrr = ["a", "b", "c", "d", "e", "f", "g"];
// Tạo mảng mới bằng các phần tử string cho trước hoặc 1 mảng
let arrFrom = Array.from("abcdae");
// Array.isArray kiểu tra xem tham số truyền vào có phải là 1 một mảng, giá trị trả về là true or false
let arrIsArray = Array.isArray(arrr);
//concat liên kết nhiều mảng với nhau để tạo ra 1 mảng mới mà không làm thay đổi các phần tử trong mảng, nếu đã tồn tại 1 phần tư trong mảng thì thay thế bằng giá trị mới hơi
let newArrConcat = arrr.concat(arr);
// find trả về phần tử đầu tiên tìm thấy được ở trong mảng cung cấp, hoặc trả về undifine
let newArrFind = arrr.find((item) => item === "k");
// findIndex trả về chỉ số của phần tử đầu tiên được tìm thấy trong mảng, nếu k tìm thấy trả về -1
let newArrFindIndex = arrr.findIndex((item) => item === "a");
// includes kiểm tra xem phần tử có tồn tại trong mảng nếu tồn tại trả về true, không tồn tai trả vê false
let newArrIncludes = arrr.includes("a");
// join tạo 1 chuỗi mới bằng cách nối các phần tử trong mảng với nhau, mặc địch cách nhau dấu phẩy, có thể cách nhau bằng các dấu khác tùy người dùng truyền
let newStringToArrJoin = arrr.join("");
// keys trả về đối tượng mảng mới chứa các chỉ mục cho mỗi phần tử trong mảng
// values trả về đối tượng mảng mới chứa các giá trị của các phần tử trong mảng tương ứng các chỉ mục
// 2 đứa này như for in và for of, for in duyệt cả mảng lẫn object còn for of chỉ duyệt mảng
let newArrKey = arrr.keys();
// pop xóa phần tử cuối cùng trong mảng và làm thay đôi độ dài mảng
let newArrPOP = arrr.pop();
//shift xóa phần tử đầu tiên trong mảng và làm thay đổi độ dài của mảng
let newArrShift = arrr.shift();
// reverse đảo ngược các phần tử trong mảng từ cuối lên đầu và ngược lại
let newArrReverce = arrr.reverse();
// slice tạo ra mảng mới từ mảng cũ bằng tham số bắt đầu tới kết thúc nhưng k lấy kết thúc
let arrSlice = arrr.slice(1, 3);
// splice thay đổi 1 hoặc nhiều phần tử trong mảng hoặc nhiều phần tử bên cạnh nó bằng tham số bắt đầu và kết thúc, có thể thêm các phần tử  mới vào từ tham số bắt đầu
let arrSplice = arrr.splice(1, 2, "h", "g");
// reduce dung thực thi 1 hàm lên từng vị trí phần tư của mảng từ trái sang phải, vs 1 biến tích lũy thu về 1 giá trị duy nhất
// nếu k truyền giá trị cho accumalator thì mặc định giá trị nó là 0 ở làn chạy hàm đầu tiên
// nếu truyền thì gái trị nó là giá trị mình truyền ở lần chạy hàm đầu tiên
let arrNumber: number[] = [1, 2, 3, 4, 5];
let newArrReduce = arrNumber.reduce((accu, current) => {
  return accu + current;
}, 1);
// filter trả về mảng với với các tham số thỏa mãn điều kiện
let newArrFilter = arrNumber.filter((item) => item > 2);
// map trả vè 1 mảng mới từ mảng cũ, có thể là các phần tử sẽ được giữ nguyên hoặc sửa đổi
let newArrMap = arrNumber.map((item) => item * 2);
/**
 * basic javascript
 * object
 */
let student: object = {
  name: "Bui Anh",
  address: "Hồ Chí Mình",
};
//object.assign sao chép tất cả các giá trị của tất cả các thuộc tính riêng haowjc nhiều object vào 1 object khác
// Nếu các object có cùng 1 thuộc tính, thì sẽ lấy thuộc tính của object được duyệt cuối cùng
let objectAssign = Object.assign(this, student, { name: "Hihih", yearOld: 21 });
//object.entries
let arrPerson: any[] = [];
class Devoloper {
  constructor(data?: Partial<Devoloper>) {
    Object.assign(this, data);
  }
  id: number;
  name: string;
  address: string;
  yearOld: number;

  static viewDevoloper() {
    return arrPerson;
  }
  static addDevoloper(item) {
    return arrPerson.push(item);
  }
  static editDevoloper(id: number, item: { [type: string]: any }) {
    let findDevById = arrPerson.find((item) => item.id === id);
    if (findDevById) {
      findDevById.name = item.name;
      (findDevById.address = item.address),
        (findDevById.yearOld = item.yearOld);
      return findDevById;
    } else return `Không tồn tại`;
  }
  static deleteDevolop(id: number) {
    let findDevById = arrPerson.findIndex((item) => item.id === id);
    if (findDevById !== -1) {
      arrPerson.splice(findDevById, 1);
      return {};
    } else return `Không tồn tại`;
  }
}
class Hi extends Devoloper {
  constructor(data?: Partial<Hi>) {
    super(data);
    Object.assign(this, data);
  }
}
let dev1 = new Hi({ id: 2, name: "Bùi Anh", address: "Hihihi", yearOld: 21 });
Hi.addDevoloper(dev1);
// Devoloper.editDevoloper(dev1.id, { name: "Bùi Thế Anh", address: "Hihihi", yearOld: 23 });
// Devoloper.deleteDevolop(dev1.id);

// regular expresstion: Biểu thức chính quy
let re = /bui/;
let str = "Bùi Thế anh bui hihih";

// interface
// basic
interface A {
  name: string;
  address: string;
}
function A(p: A) {
  return p.name;
}
console.log(A({ name: "bui ANh", address: "HCM" }));

// optional propreties
interface Personnn {
  name?: string;
  address?: string;
  yearOld?: number;
}

// interface validate argument
// type in function validate parameter by optional propreties
function createPerson(
  person: Personnn
): { name: string; address: string; yearOld: number } {
  let newPerson = { name: "AAA", address: "HO CHI MINh", yearOld: 1998 };
  if (person.name) {
    newPerson["name"] = person.name;
  }
  return newPerson;
}

let miniPerson = {
  name: "Bui ANh",
  address: "Thai Binh",
  yearOld: null,
};
console.log(createPerson(miniPerson));

/**
 *
 * */ interface Point {
  readonly x: number;
  readonly y: string;
}

let p1: Point = { x: 3, y: "bhb" };
// with readonly, you can't change value in object, because it is constant
// when using array, you can't change propreties with ReadonlyArray <T>.
// This is a proprreties similar as Array, but change data in array
let num: number[] = [1, 2, 3, 4];
let readonlyNumber: ReadonlyArray<number> = num;
// function types
interface searchFunction {
  (source: string, subString: string): boolean;
}
let search: searchFunction;
search = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
//Index types
interface stringArray {
  //length: string khong duoc phai trung kieu du lieu voi chi so
  [index: number]: string;
}
// string Array ho tro ep kieu tra ve 1 cai mang voi type is number and value is string
let hihi: stringArray = ["hi", "ha", "hu"];
let myStr = hihi[2];
// class types
