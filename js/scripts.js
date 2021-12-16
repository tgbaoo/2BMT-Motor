// Script file

createProduct();
createAdmin();
function currency(num) {

	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}

function showMenu() {
	var menuList = ['HONDA', 'SUZUKI', 'YAMAHA', 'KAWASAKI'];
	var ul = document.getElementById('navbar-list-top');
	var li = '<li class="navbar-item1"><a href="./index.html" class="logo"><img src="./assets/img/header/navLogo.PNG" alt="2BMT MOTOR" /></a></li>' +
            '<li class="navbar-item1"><a class="home" href="./index.html">TRANG CHỦ</a></li>';
	for (var i = 0; i < menuList.length; i++) {
		li += '<li><a class="brand ' + menuList[i].toLowerCase() + '" href="index.html?' + menuList[i].toLowerCase() + '&0">' + menuList[i] + '</a></li>';
		ul.innerHTML = li;
	}
}

function showMenu2() {
	var menuList = ['HONDA', 'SUZUKI', 'YAMAHA', 'KAWASAKI'];
	var ul = document.getElementById('navbar-list-top');
	var li = '<li class="navbar-item1"><a href="../index.html" class="logo"><img src="../assets/img/header/navLogo.PNG" alt="2BMT MOTOR" /></a></li>' +
	'<li class="navbar-item1"><a class="home" href="../index.html">TRANG CHỦ</a></li>';
	for (var i = 0; i < menuList.length; i++) {
		li += '<li><a class="brand ' + menuList[i].toLowerCase() + '" href="../index.html?' + menuList[i].toLowerCase() + '&0">' + menuList[i] + '</a></li>';
		ul.innerHTML = li;
	}
}

function showMenuMobile() {
	var btn = document.getElementById('btn-menu');
	if (btn.className == "") {
		document.getElementById('btn-menu').classList.add('show');
		document.getElementById('btn-menu').innerHTML = '&times;';
		document.getElementById('nav-menu').classList.add('active');

	} else {
		document.getElementById('btn-menu').classList.remove('show');
		document.getElementById('btn-menu').innerHTML = '&#9776;';
		document.getElementById('nav-menu').classList.remove('active');
	}

}

/*PRODUCT*/
function createProduct() {
	if (localStorage.getItem('product') === null) {
		var productArray = [
			{ productId: 10042, brand: 'honda', img: './assets/img/product/honda/Honda CBR150R 2021.jpg', name: 'Honda CBR150R 2021', price: 72490000 },
			{ productId: 10040, brand: 'honda', img: './assets/img/product/honda/Honda CBR250RR 2021.jpg', name: 'Honda CBR250RR 2021', price: 160000000 },
			{ productId: 10039, brand: 'honda', img: './assets/img/product/honda/Honda Rebel 300.jpg', name: 'Honda Rebel 300', price: 124000000 },
			{ productId: 10033, brand: 'honda', img: './assets/img/product/honda/Honda CB500F.jpg', name: 'Honda CB500F', price: 177500000 },
			{ productId: 10032, brand: 'honda', img: './assets/img/product/honda/Honda CBR600RR HRC MotoGP.jpg', name: 'Honda CBR600RR HRC MotoGP', price: 720000000 },
			{ productId: 10025, brand: 'honda', img: './assets/img/product/honda/Honda Shadow Aero 750 ABS.jpg', name: 'Honda Shadow Aero 750 ABS', price: 475000000 },
			{ productId: 10024, brand: 'honda', img: './assets/img/product/honda/Honda CBR1000RR SP2.jpg', name: 'Honda CBR1000RR SP2', price: 950000000 },
			{ productId: 10020, brand: 'honda', img: './assets/img/product/honda/Honda Rebel 1100 DTC.jpg', name: 'Honda Rebel 1100 DTC', price: 620000000 },
			// {productId:10021, brand:'honda',    img:'../assets/img/', name:'Honada ' , price:10255000},
			// {productId:10017, brand:'honda',    img:'../assets/img/', name:'Honada ' , price:10375000},
			{ productId: 10041, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki GSX-R150.jpg', name: 'Suzuki GSX-R150', price: 71990000 },
			{ productId: 10035, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki GIXXER SF250.jpg', name: 'Suzuki GIXXER SF250', price: 125900000 },
			{ productId: 10034, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki-GSX-R750.jpg', name: 'Suzuki-GSX-R750', price: 290000000 },
			{ productId: 10027, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki GSXR1000 ABS Special Edittion.jpg', name: 'Suzuki GSXR1000 ABS Special Edittion', price: 880000000 },
			{ productId: 10026, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki GSX-S1000.jpg', name: 'Suzuki GSX-S1000', price: 399900000 },
			{ productId: 10018, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki V-STROM 1050ABS.jpg', name: 'Suzuki V-STROM 1050ABS', price: 419000000 },
			{ productId: 10019, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki Hayabusa 2018.jpg', name: 'Suzuki Hayabusa 2018', price: 494000000 },
			{ productId: 10010, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki Boulevard C90T.jpg', name: 'Suzuki Boulevard C90T', price: 400000000 },
			// {productId:10003, brand:'suzuki',    img:, name: , price:2949000},
			// {productId:10002, brand:'suzuki',    img:, name: , price:5350000},
			{ productId: 10038, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha YB 125 SP.jpg', name: 'Yamaha YB 125 SP', price: 43000000 },
			{ productId: 10037, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha 250 V-Star.jpg', name: 'Yamaha V-Star 250', price: 280000000 },
			{ productId: 10031, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha YZF-R6.jpg', name: 'Yamaha YZF-R6', price: 283000000 },
			{ productId: 10030, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha XSR700.jpg', name: 'Yamaha XSR700', price: 197000000 },
			{ productId: 10023, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha R7.jpg', name: 'Yamaha R7', price: 480000000 },
			{ productId: 10022, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha Bolt R950.jpg', name: 'Yamaha Bolt R950', price: 420000000 },
			{ productId: 10015, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha MT10.jpg', name: 'Yamaha MT10', price: 623000000 },
			{ productId: 10014, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha YZF-R1.jpg', name: 'Yamaha YZF-R1', price: 638000000 },
			// {productId:10006, brand:'yamaha',    img:, name: , price:17099000},
			// {productId:10007, brand:'yamaha',    img:, name: , price:15600000},
			{ productId: 10036, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki W175 SE.jpg', name: 'Kawasaki W175 SE', price: 69500000 },
			{ productId: 10029, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki Ninja ZX25R ABS KRT EDITION.png', name: 'Kawasaki Ninja ZX25R ABS KRT EDITTION', price: 189000000 },
			{ productId: 10028, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki Ninja 400 ABS.jpg', name: 'Kawasaki Ninja 400 ABS', price: 162000000 },
			{ productId: 10013, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki Vulcan S 650.jpg', name: 'Kawasaki Vulcan S 650', price: 239000000 },
			{ productId: 10012, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki Z900 ABS.jpg', name: 'Kawasaki Z900 ABS', price: 288000000 },
			{ productId: 10005, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki ZH2.jpg', name: 'Kawasaki ZH2', price: 690000000 },
			{ productId: 10004, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki ZX10R ABS.jpg', name: 'Kawasaki ZX10R ABS', price: 571000000 },
			{ productId: 10004, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki Z1000 ABS.jpg', name: 'Kawasaki Z1000 ABS', price: 412000000 },
			// {productId:10004, brand:'kawasaki',    img:, name: , price:17020000},
			// {productId:10004, brand:'kawasaki',    img:, name: , price:17020000},
			//-----------------------------------------------------------------------------------------
			// {productId:10009, brand:'honda',    img:, name: , price:12355000},
			// {productId:10008, brand:'honda',    img:, name: , price:2799000},
			// {productId:10001, brand:'honda',    img:, name: , price:6599000},
			// {productId:10000, brand:'honda',    img:, name: , price:15000000},	
			// {productId:10016, brand:'honda',    img:, name: , price:4130000},
			// {productId:10011, brand:'suzuki',    img:, name: , price:2330000},
		];
		localStorage.setItem('product', JSON.stringify(productArray));
	}
}

function showProduct() {
	var url = document.location.href;
	var temp = url.split("?");
	var s = '';
	var productArray = JSON.parse(localStorage.getItem('product'));
	if (temp[1] == '' || temp[1] == undefined || temp[1].search('all') == 0) {
		if (temp[1] == '' || temp[1] == undefined) {
			temp = 'all&0';
		}
		else {
			temp = temp[1];
		}
		var temp2 = temp.split("&");
		var pos = temp2[1];
		var pageNum = 0, count = 0;
		for (var i = pos; i < productArray.length; i++) {
			s += '<div class="card">' +
				'<img src="' + productArray[i].img + '">' +
				'<button class="btn" onClick="showProductInfo(' + productArray[i].productId + ')">Chi tiết</button></div>';
			count++;
			if (count == 12)
				break;
		}
		pageNum = Math.ceil(productArray.length / 12);
		var link = '';
		for (var i = 1; i <= pageNum; i++) {
			pos = (i - 1) * 12;
			var a = '<a href="index.html?all&' + pos + '">' + i + '</a>';
			link += '<div class="pageNumber">' + a + '</div>';
		}
		document.getElementById('page').innerHTML = link;
	}
	else {
		temp = temp[1];
		var temp2 = temp.split("&");
		var brand = temp2[0];
		var pos = temp2[1];
		var pageNum = 0, count = 0;
		var arrTemp = [];
		for (var i = 0; i < productArray.length; i++) {
			if (brand == productArray[i].brand)
				arrTemp.push(productArray[i]);
		}
		for (var i = pos; i < arrTemp.length; i++) {
			s += '<div class="card">' +
				'<img src="' + arrTemp[i].img + '">' +
				'<p>' + arrTemp[i].name + '</p>' +
				'<p> Price: ' + currency(arrTemp[i].price) + '</p>' +
				'<button class="btn" onClick="showProductInfo(' + arrTemp[i].productId + ')">Chi tiết</button></div>';
			count++;
			if (count == 8)
				break;
		}
		pageNum = Math.ceil(arrTemp.length / 8);
		var link = '';
		for (var i = 1; i <= pageNum; i++) {
			pos = (i - 1) * 8;
			var a = '<a href="index.html?' + brand + '&' + pos + '">' + i + '</a>';
			link += '<div class="pageNumber">' + a + '</div>';
		}
		document.getElementById('page').innerHTML = link;
	}
	document.getElementById('product').innerHTML = s;
}

function showProductInfo(productId) {
	document.getElementById('productInfo').style.display = 'block';
	var productArray = JSON.parse(localStorage.getItem('product'));
	for (var i = 0; i < productArray.length; i++) {
		if (productArray[i].productId == productId) {
			document.getElementById('productname').innerHTML = productArray[i].name;
			document.getElementById('productprice').innerHTML = 'Giá: ' + currency(productArray[i].price);
			document.getElementById('imgbig').src = productArray[i].img;
			document.getElementById('size').value = 36;
			document.getElementById('quantity').value = 1;
			document.querySelector('#info .right button.addtocart').setAttribute('onClick', 'addToCart(' + productId + ')');
		}
	}
}

function closeProductInfo() {
	document.getElementById('productInfo').style.display = 'none';
}

/*END PRODUCT*/


/*CART*/
function addToCart(productId) {
	var size = document.getElementById('size').value;
	var quantity = document.getElementById('quantity').value;
	var productArray = JSON.parse(localStorage.getItem('product'));
	var productTemp;
	for (var i = 0; i < productArray.length; i++) {
		if (productArray[i].productId == productId) {
			productTemp = productArray[i];
		}
	}
	if (localStorage.getItem('cart') === null) {
		var cartArray = [];
		productTemp.quantity = quantity;
		productTemp.size = size;
		productTemp.totalPrice = quantity * productTemp.price;
		cartArray.unshift(productTemp);
		localStorage.setItem('cart', JSON.stringify(cartArray));
	} else {
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		productTemp.quantity = quantity;
		productTemp.size = size;
		productTemp.totalPrice = quantity * productTemp.price;
		cartArray.unshift(productTemp);
		localStorage.setItem('cart', JSON.stringify(cartArray));
	}
	closeProductInfo();
}

function showCartTable() {
	if (localStorage.getItem('cart') === null || localStorage.getItem('cart') == '[]') {
		var s = '<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';
		document.getElementById('carttable').innerHTML = s;
		document.getElementById('totalprice').innerHTML = 0;
	} else {
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		var s = '<tr><th></th><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr>';
		var totalPrice = 0;
		for (var i = 0; i < cartArray.length; i++) {
			s += '<tr>' +
				'<td><img src="../' + cartArray[i].img + '"></td>' +
				'<td>' +
				'<div>' + cartArray[i].name + '</div>' +
				'<div>Size: ' + cartArray[i].size + '</div>' +
				'</td>' +
				'<td>' + currency(cartArray[i].price) + '</td>' +
				'<td>' +
				'<button onClick="quantityDown2(' + cartArray[i].productId + ')">-</button>' +
				'<input id="quantity" type="text" disabled value="' + cartArray[i].quantity + '" onchange="updateCart(this.value,' + cartArray[i].productId + ')">' +
				'<button onClick="quantityUp2(' + cartArray[i].productId + ')">+</button>' +
				'</td>' +
				'<td>' + currency(cartArray[i].price * cartArray[i].quantity) + '</td>' +
				'<td><button onClick="deleteCartItem(' + cartArray[i].productId + ')">&times;</button></td>' +
				'</tr>';
			totalPrice += cartArray[i].price * cartArray[i].quantity;
		}
		document.getElementById('carttable').innerHTML = s;
		document.getElementById('totalprice').innerHTML = currency(totalprice);
	}
}

function deleteCartItem(id) {
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if (cartArray[i].productId == id) {
			cartArray.splice(i, 1);
		}
	}
	localStorage.setItem('cart', JSON.stringify(cartArray));
	showCartTable();
}

function deleteCart() {
	localStorage.removeItem('cart');
	showCartTable();
}

function updateCart(quantity, id) {
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if (cartArray[i].productId == id) {
			cartArray[i].quantity = quantity;
		}
	}
	localStorage.setItem('cart', JSON.stringify(cartArray));
	showCartTable();
}

function quantityDown() {
	if (document.getElementById('quantity').value > 1) {
		document.getElementById('quantity').value--;
	}
}

function quantityUp() {

	document.getElementById('quantity').value++;
}

function quantityDown2(id) {
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if (cartArray[i].productId == id) {
			if (cartArray[i].quantity > 1)
				cartArray[i].quantity--;
		}
	}
	localStorage.setItem('cart', JSON.stringify(cartArray));
	showCartTable();
}

function quantityUp2(id) {
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if (cartArray[i].productId == id) {
			cartArray[i].quantity++;
		}
	}
	localStorage.setItem('cart', JSON.stringify(cartArray));
	showCartTable();
}

function buy() {
	if (localStorage.getItem('userlogin') === null) {
		customAlert('Bạn phải đăng nhập để mua sản phẩm', 'warning');
		return false;
	}
	var info = '';
	var totalPrice = 0;
	if (localStorage.getItem('cart') === null || localStorage.getItem('cart') == '[]') {
		return false;
	}
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		info += cartArray[i].quantity + ' x ' + cartArray[i].name + ' size ' + cartArray[i].size + '; ';
		totalPrice += cartArray[i].quantity * cartArray[i].price;
	}
	var customer = JSON.parse(localStorage.getItem('userlogin'));
	var date = new Date();
	var d = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
	if (localStorage.getItem('bill') === null) {
		var billArray = [];
		var bill = { id: billArray.length, info: info, totalPrice: totalPrice, customer: customer, date: d, status: 'Chưa xử lý' };
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else {
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var bill = { id: billArray.length, info: info, totalPrice: totalPrice, customer: customer, date: d, status: 'Chưa xử lý' };
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	localStorage.removeItem('cart');
	showCartTable();
	showBill();
}

function showBill() {
	if (localStorage.getItem('bill') === null) {
		document.getElementById('bill').style.display = 'none';
	}
	else {
		var user = JSON.parse(localStorage.getItem('user-login'))
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var s = '<h2>Đơn hàng đã đặt</h2>';
		for (var i = 0; i < billArray.length; i++) {
			if (user.username == billArray[i].customer.username) {
				document.getElementById('bill').style.display = 'block';
				s += '<div class="billcontent">' +
					'<div>' + billArray[i].info + '</div>' +
					'<div>' + currency(billArray[i].totalPrice) + '</div>' +
					'<div>' + billArray[i].date + '</div>' +
					'<div>' + billArray[i].status + '</div>' +
					'</div>';
			}
		}
		document.getElementById('bill').innerHTML = s;
	}
}
/*END CART*/

/*SEARCH*/
function showSearch() {

	document.getElementById('searchsection').style.display = 'block';
}

function closeSearch() {

	document.getElementById('searchsection').style.display = 'none';
}

function search() {
	var productSearch = document.getElementById('search').value.toLowerCase();
	var productArray = JSON.parse(localStorage.getItem('product'));
	var s = '';
	if (document.getElementById('searchextend').className == '') {
		for (var i = 0; i < productArray.length; i++) {
			if ((productArray[i].name.toLowerCase().search(productSearch) != -1 || productArray[i].brand.toLowerCase().search(productSearch) != -1) && productSearch != '') {
				s += '<div class="card">' +
					'<img src="' + productArray[i].img + '">' +
					'<p>' + productArray[i].name + '</p>' +
					'<p> Giá: ' + currency(productArray[i].price) + '</p>' +
					'<button class="btn" onClick="showProductInfo(' + productArray[i].productId + ')">Chi tiết</button></div>';
			}
		}
	}
	else {
		var brandSearch = document.getElementById('brandsearch').value;
		var priceForm = document.getElementById('priceform').value;
		var priceTo = document.getElementById('priceto').value;
		if (brandSearch == 'all') {
			for (var i = 0; i < productArray.length; i++) {
				if (productArray[i].name.toLowerCase().search(productSearch) != -1 && productArray[i].price >= priceForm && productArray[i].price <= priceTo) {
					s += '<div class="card">' +
						'<img src="' + productArray[i].img + '">' +
						'<p>' + productArray[i].name + '</p>' +
						'<p> Giá: ' + currency(productArray[i].price) + '</p>' +
						'<button class="btn" onClick="showProductInfo(' + productArray[i].productId + ')">Chi tiết</button></div>';
				}
			}
		}
		else {
			for (var i = 0; i < productArray.length; i++) {
				if (productArray[i].name.toLowerCase().search(productSearch) != -1 && productArray[i].brand == brandSearch && productArray[i].price >= priceForm && productArray[i].price <= priceTo) {
					s += '<div class="card">' +
						'<img src="' + productArray[i].img + '">' +
						'<p>' + productArray[i].name + '</p>' +
						'<p> Giá: ' + currency(productArray[i].price) + '</p>' +
						'<button class="btn" onClick="showProductInfo(' + productArray[i].productId + ')">Chi tiết</button></div>';
				}
			}
		}

	}
	document.getElementById('searchresult').innerHTML = s;
}

function showExtend() {
	if (document.getElementById('searchextend').className == '') {
		document.getElementById('searchextend').classList.add('active')
		document.querySelector('#searchsection .searchbox button img').src = './assets/img/icon/arrow2.svg';
	}
	else {
		document.getElementById('searchextend').classList.remove('active');
		document.querySelector('#searchsection .searchbox button img').src = './assets/img/icon/arrow.svg';
		var priceForm = document.getElementById('priceform').value = "";
		var priceTo = document.getElementById('priceto').value = "";
	}
}

function showExtend2() {
	if (document.getElementById('searchextend').className == '') {
		document.getElementById('searchextend').classList.add('active')
		document.querySelector('#searchsection .searchbox button img').src = './assets/img/icon/arrow2.svg';
	}
	else {
		document.getElementById('searchextend').classList.remove('active');
		document.querySelector('#searchsection .searchbox button img').src = './assets/img/icon/arrow.svg';
		var priceForm = document.getElementById('priceform').value = "";
		var priceTo = document.getElementById('priceto').value = "";
	}
}
/*END SEARCH*/




/*USER*/
function createAdmin() {
	if (localStorage.getItem('user') === null) {
		var userArray = [];
		var user = { username: 'admin', password: 'admin', fullName: 'Trần Lê Huy Quyền', address: '273 An Dương Vương, P3, Quận 5, TPHCM', phone: '0566490523', signupDate: '23-11-1999' };
		userArray.push(user);
		localStorage.setItem('user', JSON.stringify(userArray));
	}
}

function showFormLogin() {
	var userForm = document.getElementById('user');
	userForm.style.display = 'block';
	showLogin();
}

function showFormSignUp() {
	var userForm = document.getElementById('user');
	userForm.style.display = 'block';
	showSignUp();
}

function closeForm() {
	var userForm = document.getElementById('user');
	userForm.style.display = 'none';
}

function showSignUp() {
	document.getElementById('login').style.display = 'none';
	document.getElementById('signup').style.display = 'block';
}

function showLogin() {
	document.getElementById('signup').style.display = 'none';
	document.getElementById('login').style.display = 'block';
}
document.getElementById('signupform').addEventListener('submit', createUser);
document.getElementById('loginform').addEventListener('submit', login);
document.getElementById('user').addEventListener('click', closeForm);
document.getElementById('loginform').addEventListener('click', function(event) {
	event.stopPropagation();
});
document.getElementById('signupform').addEventListener('click', function(event) {
	event.stopPropagation();
});


function createUser(e) {
	e.preventDefault();
	var fullName = document.getElementById('fullname');
	var address = document.getElementById('address');
	var phone = document.getElementById('phone');
	var username = document.getElementById('usernameSignUp');
	var password = document.getElementById('passwordSignUp');
	var password2 = document.getElementById('passwordSignUp2');
	var flag = true;
	if (!fullName.value) {
		document.getElementById('fullnameerror').style.display = 'block';
		flag = false;
	} else {
		document.getElementById('fullnameerror').style.display = 'none';
	}
	if (!address.value) {
		document.getElementById('addresserror').style.display = 'block';
		flag = false;
	} else {
		document.getElementById('addresserror').style.display = 'none';
	}
	if (!phone.value) {
		document.getElementById('phoneerror').style.display = 'block';
		flag = false;
	} else {
		if (isNaN(Number(phone.value))) {
			document.getElementById('phoneerror').style.display = 'block';
			document.getElementById('phoneerror').innerHTML = 'Số điện thoại không hợp lệ';
			flag = false;
		} else {
			if (Number(phone.value) < 100000000 || Number(phone.value) > 999999999) {
				document.getElementById('phoneerror').style.display = 'block';
				document.getElementById('phoneerror').innerHTML = 'Số điện thoại không đúng';
				flag = false;
			} else {
				document.getElementById('phoneerror').style.display = 'none';
			}
		}
	}
	if (!username.value) {
		document.getElementById('usererror').style.display = 'block';
		flag = false;
	} else {
		document.getElementById('usererror').style.display = 'none';
	}
	if (!password.value) {
		document.getElementById('passworderror').style.display = 'block';
		flag = false;
	} else {
		if (password.value.length < 8) {
			document.getElementById('passworderror').style.display = 'block';
			document.getElementById('passworderror').innerHTML = 'Mật khẩu phải trên 8 ký tự';
			flag = false;
		} else {
			document.getElementById('passworderror').style.display = 'none';
		}
	}
	if (password2.value != password.value) {
		document.getElementById('password2error').style.display = 'block';
		flag = false;
	} else {
		document.getElementById('password2error').style.display = 'none';
	}
	if (flag == false) {
		return false;
	}
	var d = new Date();
	var signupDate = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
	var user = { username: username.value, password: password.value, fullName: fullName.value, address: address.value, phone: phone.value, signupDate: signupDate };
	var userArray = JSON.parse(localStorage.getItem('user'));
	for (var i = 0; i < userArray.length; i++) {
		if (user.username == userArray[i].username) {
			document.getElementById('usererror').style.display = 'block';
			document.getElementById('usererror').innerHTML = 'Tên đăng nhập đã có người sử dụng';
			username.focus();
			return false;
		}
	}
	userArray.push(user);
	localStorage.setItem('user', JSON.stringify(userArray));
	customAlert('Bạn đã đăng ký thành công!', 'success');
	showLogin();
}

function login(e) {
	e.preventDefault();
	var username = document.getElementById('usernameLogin').value;
	var password = document.getElementById('passwordLogin').value;
	var flag = true;
	if (!username) {
		document.getElementById('usernameerror').style.display = 'block';
		flag = false;
	} else {
		document.getElementById('usernameerror').style.display = 'none';
	}
	if (!password) {
		document.getElementById('passwordloginerror').style.display = 'block';
		flag = false;
	} else {
		document.getElementById('passwordloginerror').style.display = 'none';
	}
	if (flag == false) {
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	for (var i = 0; i < userArray.length; i++) {
		if (username == userArray[i].username) {
			if (password == userArray[i].password) {
				closeForm();
				localStorage.setItem('userlogin', JSON.stringify(userArray[i]));
				window.location.reload(true);
				return true;
			}
		}
	}
	document.getElementById('passwordloginerror').style.display = 'block';
	document.getElementById('passwordloginerror').innerHTML = 'Sai thông tin đăng nhập';
	return false;
}
function logout(url) {
	localStorage.removeItem('userlogin');
	localStorage.removeItem('cart');
	location.href = url;
}

function checkLogin() {
	if (localStorage.getItem('userlogin')) {
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s = '';
		if (user.username == 'admin') {
			s = '<li><button onClick="window.location.href=\'admin/product.html\'"><img src="images/icon/settings.svg"></button></li>' +
				'<li><button>' + user.fullName + '</button><button id="btn-logout" onClick="logout(\'index.html\')">LOGOUT</button></li>' +
				'<li><button onClick="location.href=\'file/cart.html\'"><img src="images/icon/carticon.svg"></button></li>' +
				'<li><button onClick="showSearch()"><img src="images/icon/searchicon.svg"></button></li>';
		} else {
			s = '<li><button>' + user.fullName + '</button><button id="btn-logout" onClick="logout(\'index.html\')">LOGOUT</button></li>' +
				'<li><button onClick="location.href=\'file/cart.html\'"><img src="images/icon/carticon.svg"></button></li>' +
				'<li><button onClick="showSearch()"><img src="images/icon/searchicon.svg"></button></li>';
		}
		document.querySelector('.header .top-nav ul.right').innerHTML = s;
	}
}
function checkLogin2() {
	if (localStorage.getItem('user-login')) {
		var user = JSON.parse(localStorage.getItem('user-login'));
		var s = '';
		if (user.username == 'admin') {
			s = '<li><button onClick="window.location.href=\'../admin/product.html\'"><img src="../images/icon/settings.svg"></button></li>' +
				'<li><button>' + user.fullName + '</button><button id="btn-logout" onClick="logout(\'../index.html\')">LOGOUT</button></li>' +
				'<li><button onClick="location.href=\'../file/cart.html\'"><img src="../images/icon/carticon.svg"></button></li>' +
				'<li><button onClick="showSearch()"><img src="../images/icon/searchicon.svg"></button></li>';
		} else {
			s = '<li><button>' + user.fullName + '</button><button id="btn-logout" onClick="logout(\'../index.html\')">LOGOUT</button></li>' +
				'<li><button onClick="location.href=\'../file/cart.html\'"><img src="../images/icon/carticon.svg"></button></li>' +
				'<li><button onClick="showSearch()"><img src="../images/icon/searchicon.svg"></button></li>';
		}
		document.querySelector('#nav .top-nav ul.right').innerHTML = s;
	}
}
/*END USER*/



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





