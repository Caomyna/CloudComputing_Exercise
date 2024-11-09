const fs = require('fs'); //import module fs

//readFile: Đọc file không đồng bộ (async), sử dụng callback để xử lý lỗi và dữ liệu.
fs.readFile('./example.txt', (err, data) => {
    if(err){
        return console.log('Error occurred while reading file');
    }
    console.log(data.toString());
});

//readFileSync: Đọc file đồng bộ, trả về dữ liệu ngay lập tức.
const data = fs.readFileSync('./example.txt');
console.log(data.toString());



//fs.access: kiểm tra sự tồn tại của file
const path = './config.js';
fs.access(path, fs.F_OK, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File exists');
});


//Tạo file: fs.open, fs.writeFile, fs.appendFile
// fs.open: tạo file mới hoặc mở file hiện có
fs.open('file.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('File created!');
});

//fs.writeFile: Ghi dữ liệu vào file, nếu file không tồn tại thì sẽ tạo mới.
fs.writeFile('file.txt', 'Hello World!', (err) => {
    if (err) throw err;
    console.log('File written!');
});


//fs.appendFile: Thêm dữ liệu vào cuối file, nếu file không tồn tại thì sẽ tạo mới.
fs.appendFile('file.txt', ' Hello World', (err) => {
    if (err) throw err;
    console.log('File updated!');
});


//Sử dụng fs.unlink để xóa file.
fs.unlink('file.txt', (err) => {
    if (err) {throw err};
    console.log('File deleted!');
});


//Sử dụng fs.rename để đổi tên file.
fs.rename('oldfile.txt', 'newfile.txt', (err) => {
    if (err) {throw err};
    console.log('File renamed!');
});


//Sử dụng fs.copyFile để sao chép file.
fs.copyFile('test.txt', 'copyfile.txt', (err) => {
    if (err) throw err;
    console.log('File copied!');
});
