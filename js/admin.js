function currency(num) { //don vi tinh
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}


// ADMIN (bill)
function hello() {
    var user = JSON.parse(localStorage.getItem('user-login'));
    document.getElementById('hello').innerHTML = user.fullName + '<button onclick="logout()">Đăng xuất</button>';
}

function logout() {
    localStorage.removeItem('user-login'); //user
    localStorage.removeItem('cart'); //Gio hang
    location.href = '../index.html';
}

function showBillList() {
    if (localStorage.getItem('bill') === null) {
        var s = '<tr><th>NGÀY</th><th>KHÁCH HÀNG</th><th>GIÁ</th><th>TRẠNG THÁI</th></tr>' +
            '<tr><td colspan=4>Không có đơn hàng nào</td></tr>';
        document.getElementById('bill-list').innerHTML = s;
        return false;
    }
    var s = '<tr><th>NGÀY</th><th>KHÁCH HÀNG</th><th>GIÁ</th><th>TRẠNG THÁI</th></tr>';
    var billArray = JSON.parse(localStorage.getItem('bill'));
    for (var i = 0; i < billArray.length; i++) {
        if (billArray[i].status == 'Chưa xử lý') {
            s += '<tr onClick="showBillInfo(' > billArray[i].id + ')">' +
                '<td>' + billArray[i].date + '</td>' +
                '<td>' + billArray[i].customer.fullName + '</td>' +
                '<td>' + currency(billArray[i].totalPrice) + '</td>' +
                '<td style="color: red">' + billArray[i].status + '</td>' +
                '</tr>';
        } else {
            s += '<tr onClick="showBillInfo(' + billArray[i].id + ')">' +
                '<td>' + billArray[i].date + '</td>' +
                '<td>' + billArray[i].customer.fullName + '</td>' +
                '<td style="color: blue">' + billArray[i].status + '</td>' +
                '</tr>';
        }
    }
    document.getElementById('bill-list').innerHTML = s;
}

function showBillInfo(id) {
    document.getElementById('modal1').style.display = 'block';
    var billArray = JSON.parse(localStorage.getItem('bill'));
    for (var i = 0; i < billArray.length; i++) {
        if(billArray[i].id == id) {

            s += '<h4>Thông tin đơn hàng:</h4>' +
                '<p>' + billArray[i].info + '</p>' +
                '<h4>Ngày tạo đơn hàng:</h4>' +
                '<p>' + billArray[i].date + '</p>' +
                '<h4>Tên khách hàng:</h4>' +
                '<p>' + billArray[i].customer.fullName + '</p>' +
                '<h4>Địa chỉ:</h4>' +
                '<p>' + billArray[i].customer.address + '</p>' +
                '<h4>Số điện thoại liên lạc:</h4>' +
                '<p>' + billArray[i].customer.phone + '</p>' +
                '<h4>Tổng giá tiền:</h4>' +
                '<p>' + currentcy(billArray[i].totalPrice) + '</p>';
            if(billArray[i].status == "Chưa xử lý") {
                s += '<h4>Tình trạng:</h4>' + 
                '<div><span id="status" style="color: red">' + billArray[i].status + '</span><label><input type="checkbox" onchange="changeStatus(this,' + billArray[i].id + ')"><span class="slider"></span></label></div>';
            } else {
                s += '<h4>Tình trạng:</h4>' + 
                    '<div><span id="status" style="color: blue">' + billArray[i].status + '</span><label><input type="checkbox" onchange="changeStatus(this,' + billArray[i].id + ')"><span class="slider"></span></label></div>';
            }
            s += '<button class="print-btn" onClick="window.print()">In đơn hàng</button>';
        }

    }
    document.getElementById('info').innerHTML = s;
}

function closeBillInfo() {
    document.getElementById('modal1').style.display = 'none';;
}

function searchBill() {
    var billArray = JSON.parse(localStorage.getItem('bill'));
    var status = document.getElementById('search-status').value;
    var name = document.getElementById('name').value.toLowerCase();
    var billArrayTemp = [];
    for(var i = 0; i < billArray.length; i++) {
        if(status == billArray[i].status && billArray[i].customer.fullName.toLowerCase.search(name) >= 0) {
            billArrayTemp.push(billArray[i]);
        }   
    }
    var s = '<th>NGÀY</th><th>KHÁCH HÀNG</th><th>GIÁ</th><th>TRẠNG THÁI</th>';
    for(var i = 0; i < billArrayTemp.length; i++) {
        if(billArrayTemp[i].status == 'Chưa xử lý') {
            s += '<tr onClick="showBillInfo(' + billArrayTemp[i].id + ')">' +
            '<td>' + billArrayTemp[i].date + '</td>' + 
            '<td>' + billArrayTemp[i].customer.fullName + '</td>' + 
            '<td>' + currency(billArrayTemp[i].totalPrice) + '</td>' + 
            '<td style="color: red">' + billArrayTemp[i].status + '</td>' +             
            '</tr>';
        } else {
            s += '<tr onClick="showBillInfo(' + billArrayTemp[i].id + ')">' + 
                '<td>' + billArrayTemp[i].date + '</td>' + 
                '<td>' + billArrayTemp[i].customer.fullName + '</td>' + 
                '<td>' + currency(billArrayTemp[i].totalPrice) + '</td>' + 
                '<td style="color: blue">' + billArrayTemp[i].status + '</td>' + 
                '</tr>';
        }
    }
    document.getElementById('bill-list').innerHTML = s;
}

function changeStatus(checkbox, id) {
    var billArray = JSON.parse(localStorage.getItem('bill'));
    if(checkbox.checked == true) {
        for(var i = 0; i < billArray.length; i++) {
            if(billArray[i].id == id){
                billArray[i].status = 'Đã xử lý';
            }
        }
        document.getElementById('status').innerHTML = 'Đã xử lý';
        document.getElementById('status').style.color = 'blue';
    } else {
        for(var i = 0; i < billArray.length; i++) {
            if(billArray[i].id == id) {
                billArray[i].status = 'Chưa xử lý';
            }
        }
        document.getElementById('status').innerHTML = 'Chưa xử lý';
        document.getElementById('status').style.color = 'red';
    }
    localStorage.setItem('bill', JSON.stringify(billArray));
    showBillList();
}

function showUserList() {
    if(localStorage.getItem('user') === null) {
        return false;
    }
    var userArray = JSON.parse(localStorage.getItem('user'));
    var tr = '<tr><th>STT</th><th>HỌ TÊN KH</th><th>TÊN ĐĂNG NHẬP</th><th>NGÀY ĐĂNG KÝ</th><th>XÓA</th></tr>';
    for(var i = 0; i < userArray.length; i++) {
        tr += '<tr><td>' + i + '</td><td>' + userArray[i].fullName + '</td><td>' + userArray[i].userName + '</td><td>' + userArray[i].signupDate + '</td><td><button class="delete" onClick="deleteUser(\'' + userArray[i].userName + '\')">&times;</button></td></tr>';
    }
    document.getElementById('user-list').innerHTML = tr;
}

function deleteUser(username) {
    var userArray = JSON.parse(localStorage.getItem('user'));
    for(var i = 0; i < userArray.length; i++) {
        if(userArray[i].username == username) {
            if(confirm('Bạn có muốn xóa tài khoản này?')) {
                userArray.splice(i, 1);
            }
        }
    }
    localStorage.removeItem('user', JSON.stringify(userArray));
    showUserList();
}

function searchProduct() {
    var productArray = JSON.parse(localStorage.getItem('product'));
    var name = document.getElementById('searchproductname').value.toLowerCase();
    var brand = document.getElementById('searchproductbrand').value.toLowerCase();
    var s = '<tr><th>#ID</th><th>Ảnh</th><th>TÊN SẢN PHẨM</th><th>THƯƠNG HIỆU</th><th>GIÁ</th><th>Xóa</th></tr>';
    if(brand == 'all') {
        if(!name) {
            showProductList(0);
        } else {
            for(var i = 0; i < productArray.length; i++) { 
                if(productArray[i].name.toLowerCase().search(name) >= 0) {
                    s += '<tr>' +
                        '<td>' + productArray[i].productId + '</td>' + 
                        '<td><img src="../' + productArray[i].img + '"></td>' + 
                        '<td>' + productArray[i].name + '</td>' + 
                        '<td>' + productArray[i].brand + '</td>' +                        
                        '<td>' + currency(productArray[i].price) + '</td>' +
                        '<td>' + 
                        '<button class="delete" onClick="deleteProduct(\'' + productArray[i].productId + '\')">&times;</button>' +                        
                        '<button class="change" onClick="showChangeProduct(\'' + productArray[i].productId + '\')">Sửa</button>' + 
                        '</td>' +
                        '</tr>';
                }
            }
            document.getElementById('product-list').innerHTML = s;
        }
    } else {
        for(var i = 0; i < billArray.length; i++) {
            if(productArray[i].name.toLowerCase().search(name) >= 0 && productArray[i].brand) {
                s += '<tr>' +
                    '<td>' + productArray[i].productId + '</td>' +
                    '<td><img src="../' + productArray[i].img + '"></td>' +
                    '<td>' + productArray[i].name + '</td>' +
                    '<td>' + productArray[i].brand + '</td>' +
                    '<td>' + currency(productArray[i].price) + '</td>' +
                    '<td>' + 
                    '<button class ="delete" onClick="deleteProduct(\'' + productArray[i].productId + '\')">&times;</button>' + 
                    '<button class ="change" onClick="showChangeProduct(\'' + productArray[i].productId + '\')">Sửa;</button>' + 
                    '</td>' + 
                    '</tr>';
            }
        }
        document.getElementById('product-list').innerHTML = s;
    }
}

function showProductList(pos) {
    var productArray = JSON.parse(localStorage.getItem('product'));
    var s = '<tr><th>#ID</th><th>ẢNH</th><th>TÊN SẢN PHẨM</th><th>THƯƠNG HIỆU</th><th>GIÁ</th><th></th></tr>';
    var count = 0;
    for(var i = pos; i < productArray.length; i++) {
        s += '<tr>' +
			'<td>' + productArray[i].productId + '</td>' +
			'<td><img src="../' + productArray[i].img + '"></td>' +
			'<td>' + productArray[i].name + '</td>' +
			'<td>' + productArray[i].brand.toUpperCase() + '</td>' +
			'<td>' + currency(productArray[i].price) + '</td>' +
			'<td>' +
			'<button class="delete" onClick="deleteProduct(\'' + productArray[i].productId + '\')">&times;</button>' +
			'<button class="change" onClick="showChangeProduct(\'' + productArray[i].productId + '\')">Sửa</button>' +
			'</td>' +
			'</tr>';
		count++;
		if (count == 10) {
			break;
		}
	}
	document.getElementById('product-list').innerHTML = s;
	setPagination();
}

function deleteProduct(productId) {
	var productArray = JSON.parse(localStorage.getItem('product'));
	var pos;
	for (var i = 0; i < productArray.length; i++) {
		if (productArray[i].productId == productId) {
			if (confirm('Bạn có muốn xóa sản phẩm này?')) {
				productArray.splice(i, 1);
			}
			pos = (Math.floor(i / 10) * 10);
		}
	}
	localStorage.setItem('product', JSON.stringify(productArray));
	showProductList(pos);
}

function setPagination() {
	var productArray = JSON.parse(localStorage.getItem('product'));
	var pageNum = Math.ceil(productArray.length / 10);
	var button = '';
	for (var i = 1; i <= pageNum; i++) {
		pos = (i - 1) * 10;
		button += '<button class="pageNumber" onClick="showProductList(' + pos + ')">' + i + '</button>';
	}
	document.getElementById('pagination').innerHTML = button;
}

function showChangeProduct(productId) {
	document.getElementById('modal1').style.display = 'block';
	var productArray = JSON.parse(localStorage.getItem('product'));
	for (var i = 0; i < productArray.length; i++) {
		if (productArray[i].productId == productId) {
			document.getElementById('img-before').src = "../" + productArray[i].img;
			document.getElementById('img-after').src = "../images/product/temp2.jpg";
			document.getElementById('name').value = productArray[i].name;
			document.getElementById('price').value = productArray[i].price;
			document.getElementById('save').setAttribute('onClick', 'changeProduct(' + productArray[i].productId + ')');
		}
	}
}

function changeProduct(productId) {
	document.getElementById('modal1').style.display = 'none';
	var productArray = JSON.parse(localStorage.getItem('product'));
	var pos;
	for (var i = 0; i < productArray.length; i++) {
		if (productArray[i].productId == productId) {
			productArray[i].img = document.getElementById('img-before').src;
			productArray[i].name = document.getElementById('name').value;
			productArray[i].price = document.getElementById('price').value;
			pos = (Math.floor(i / 10)) * 10;
		}
	}
	localStorage.setItem('product', JSON.stringify(productArray));
	showProductList(pos);
}

function changeImg(input) {
	var reader = new FileReader();
	reader.onload = function (e) {
		document.getElementById('img-after').src = e.target.result;
	};
	reader.readAsDataURL(input.files[0]);
}

function changeImgAdd(input) {
	var reader = new FileReader();
	reader.onload = function (e) {
		document.getElementById('img-add').src = e.target.result;
	};
	reader.readAsDataURL(input.files[0]);
}

function closeChangeBox() {
	document.getElementById('modal1').style.display = 'none';
}

function addProduct() {
	var productArray = JSON.parse(localStorage.getItem('product'));
	var productId = productArray[0].productId + 1;
	var productName = document.getElementById('product-name');
	var brand = document.getElementById('brand');
	var price = document.getElementById('product-price');
	if (!brand.value || !productName.value || !price.value) {
		customAlert('Bạn chưa nhập đủ thông tin sản phẩm', 'warning');
		return false;
	}
	if (isNaN(Number(price.value))) {
		customAlert('Giá không hợp lệ', 'warning');
		return false;
	}
	var productTemp = { productId: productId, brand: brand.value, img: 'images/product/temp.jpg', name: productName.value, price: price.value};
	productArray.unshift(productTemp);
	localStorage.setItem('product', JSON.stringify(productArray));
	showProductList(0);
	customAlert('Thêm sản phẩm thành công', 'success');
}
/*END ADMIN*/



/*CUSTOM ALERT BOX*/
function customAlert(message, type) {
	if (type == 'success') {
		document.getElementById("custom-alert").style.backgroundColor = '#4CAF50';
	}
	if (type == 'warning') {
		document.getElementById("custom-alert").style.backgroundColor = '#f44336';
	}
	document.getElementById("custom-alert").innerHTML = message;
	var x = document.getElementById("custom-alert");
	x.className = "show";
	setTimeout(function () { x.className = x.classList.remove("show"); }, 3500);
}
