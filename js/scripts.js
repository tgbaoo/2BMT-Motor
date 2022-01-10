// Script file

createProduct();
// createAdmin();
function currency(num) {

	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}

function showMenu() {
	var menuList = ['HONDA', 'SUZUKI', 'YAMAHA', 'KAWASAKI'];
	var ul = document.getElementById('navbar-list-top');
	var li = '<li class="navbar-logo"><a href="./index.html" class="logo"><img src="./assets/img/header/navLogo.PNG" alt="2BMT MOTOR" /></a></li>' +
	'<li class="navbar-item1"><a class="home" href="./index.html">TRANG CHỦ</a></li>'+
	'<li id="main-menu" class="navbar-item1"><a class="home" href="./index.html">SẢN PHẨM <i class="fas fa-angle-down"></i></a>' +
		
	'</li>'+
	'<li class="navbar-item1"><a class="home intro" href="./intro.html">GIỚI THIỆU</a></li>'+
             '<li class="navbar-item1"><a class="home pm" href="./pm.html">LIÊN HỆ</a></li>';
	ul.innerHTML = li;
	var main_menu = document.getElementById('main-menu');
	var li_ul = '<ul id="sub-menu"></ul>';
	var li_sub = '';
	main_menu.innerHTML += li_ul;
	var sub = document.getElementById('sub-menu');
	for (var i = 0; i < menuList.length; i++) {
		li_sub += '<li><a class="brand ' + menuList[i].toLowerCase() + '" href="index.html?' + menuList[i].toLowerCase() + '&0">' + menuList[i] + '</a></li>';
		sub.innerHTML = li_sub;
	}
}

function showMenu2() {
	var menuList = ['HONDA', 'SUZUKI', 'YAMAHA', 'KAWASAKI'];
	var ul = document.getElementById('navbar-list-top');
	var li = '<li class="navbar-logo"><a href="../index.html" class="logo"><img src="../assets/img/header/navLogo.PNG" alt="2BMT MOTOR" /></a></li>' +
	'<li class="navbar-item1"><a class="home" href="../index.html">TRANG CHỦ</a></li>'+
	'<li id="main-menu" class="navbar-item1"><a class="home" href="../index.html">SẢN PHẨM <i class="fas fa-angle-down"></i></a>' +
		
	'</li>'+
	'<li class="navbar-item1"><a class="home intro" href="./intro.html">GIỚI THIỆU</a></li>'+
             '<li class="navbar-item1"><a class="home pm" href="./pm.html">LIÊN HỆ</a></li>';
	ul.innerHTML = li;
	var main_menu = document.getElementById('main-menu');
	var li_ul = '<ul id="sub-menu"></ul>';
	var li_sub = '';
	main_menu.innerHTML += li_ul;
	var sub = document.getElementById('sub-menu');
	for (var i = 0; i < menuList.length; i++) {
		li_sub += '<li><a class="brand ' + menuList[i].toLowerCase() + '" href="../index.html?' + menuList[i].toLowerCase() + '&0">' + menuList[i] + '</a></li>';
		sub.innerHTML = li_sub;
	}
}

function showMenuMobile() {
	var btn = document.getElementById('btn-menu');
	if (btn.className == "") {
		document.getElementById('btnmenu').classList.add('show');
		document.getElementById('btnmenu').innerHTML = '&times;';
		document.getElementById('navmenu').classList.add('active');

	} else {
		document.getElementById('btnmenu').classList.remove('show');
		document.getElementById('btnmenu').innerHTML = '&#9776;';
		document.getElementById('navmenu').classList.remove('active');
	}

}

// hero-slide
var slideIndex = 0;
showSlide();

var timer = setInterval(showSlide, 3000);
var slideContainer = document.querySelector('.hero-section')
var slideControl = document.querySelector('.slide-control')

slideContainer.onmouseover = function(){
  clearInterval(timer);
}

slideControl.onmouseover = function(){
  clearInterval(timer);
}

slideContainer.onmouseleave = function(){
  timer = setInterval(showSlide,3000);
}

slideControl.onmouseleave = function(){
  timer = setInterval(showSlide, 3000);
}

function showSlide(){
 
   var slides = document.querySelectorAll('.slide-item');
   var dots = document.querySelectorAll(".dot");

   slides.forEach(function(slide , index){
      slides[index].style.display = 'none'
      slides[index].classList.remove('active')
   })

   dots.forEach(function(dot,index){
     dots[index].classList.remove("active");
   })

   slideIndex++;
   if(slideIndex > slides.length) slideIndex = 1;
   slides[slideIndex-1].style.display = "block";
   slides[slideIndex-1].classList.add('active')
   dots[slideIndex-1].classList.add("active");
}

function chooseSlide(n){
  slideIndex = n;
  showSlide();
  clearInterval(timer);
}

/*PRODUCT*/
function createProduct() {
	if (localStorage.getItem('product') === null) {
		var productArray = [
			{ productId: 10052, brand: 'kawasaki', img: './assets/img/product/kawasaki/kawasaki Z400 ABS.png', name: 'kawasaki Z400 ABS', price:149000000 },
			{ productId: 10001, brand: 'honda', img: './assets/img/product/honda/Honda CBR250RR 2021.jpg', name: 'Honda CBR250RR 2021', price: 160000000 },
			{ productId: 10053, brand: 'kawasaki', img: './assets/img/product/kawasaki/kawasaki Z650 ABS.png', name: 'kawasaki Z650 ABS', price:187000000 },
			{ productId: 10032, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha R7.jpg', name: 'Yamaha R7', price: 480000000 },
			{ productId: 10016, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki-GSX-R750.jpg', name: 'Suzuki-GSX-R750', price: 290000000 },
			{ productId: 10039, brand: 'yamaha', img: './assets/img/product/yamaha/yamaha YZF-R15.png', name: 'Yamaha YZF-R15' , price:156000000},
			{ productId: 10006, brand: 'honda', img: './assets/img/product/honda/Honda CBR1000RR SP2.jpg', name: 'Honda CBR1000RR SP2', price: 950000000 },
			{ productId: 10047, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki ZH2.jpg', name: 'Kawasaki ZH2', price: 690000000 },
			{ productId: 10011, brand: 'honda', img: './assets/img/product/honda/Honda Fury 1300.jpg', name:'Honda Fury 1300' , price:580000000 },
			{ productId: 10018, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki GSX-S1000.jpg', name: 'Suzuki GSX-S1000', price: 399900000 },
			{ productId: 10000, brand: 'honda', img: './assets/img/product/honda/Honda CBR150R 2021.jpg', name: 'Honda CBR150R 2021', price: 72490000 },
			{ productId: 10015, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki GIXXER SF250.jpg', name: 'Suzuki GIXXER SF250', price: 125900000 },
			{ productId: 10031, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha XSR700.jpg', name: 'Yamaha XSR700', price: 197000000 },
			{ productId: 10017, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki GSXR1000 ABS Special Edittion.jpg', name: 'Suzuki GSXR1000 ABS Special Edittion', price: 880000000 },
			{ productId: 10044, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki Ninja 400 ABS.jpg', name: 'Kawasaki Ninja 400 ABS', price: 162000000 },
			{ productId: 10019, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki V-STROM 1050ABS.jpg', name: 'Suzuki V-STROM 1050ABS', price: 419000000 },
			{ productId: 10012, brand: 'honda', img: './assets/img/product/honda/Honda Gold Wing 1800 DCT 2019.jpg', name:'Honda Gold Wing 1800 DCT 2019' , price:880000000 },
			{ productId: 10021, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki Boulevard C90T.jpg', name: 'Suzuki Boulevard C90T', price: 400000000 },
			{ productId: 10008, brand: 'honda', img: './assets/img/product/honda/Honda Africa Twin Adventure Sport.png', name:'Honda Africa Twin Adventure Sport' , price:689990000 },
			{ productId: 10022, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki Hayabusa GSX1300R.jpg', name:'Suzuki Hayabusa GSX1300R' , price:890000000},
			{ productId: 10024, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki V-Strom 650A.jpg', name:'Suzuki V-Strom 650A' , price:263000000},
			{ productId: 10055, brand: 'kawasaki', img: './assets/img/product/kawasaki/kawasaki Z1000 ABS.png', name: 'kawasaki Z1000 ABS', price:425000000 },
			{ productId: 10036, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha MT-09.jpg', name: 'Yamaha MT-09' , price:17099000},
			{ productId: 10028, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha YB 125 SP.jpg', name: 'Yamaha YB 125 SP', price: 43000000 },
			{ productId: 10049, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki Z1000 ABS.jpg', name: 'Kawasaki Z1000 ABS', price: 412000000 },
			{ productId: 10026, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki-GSX150-Bandit 2020.jpg', name:'Suzuki GSX150 bandit' , price:69800000},
			{ productId: 10046, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki Z900 ABS.jpg', name: 'Kawasaki Z900 ABS', price: 288000000 },
			{ productId: 10029, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha 250 V-Star.jpg', name: 'Yamaha V-Star 250', price: 280000000 },
			{ productId: 10009, brand: 'honda', img: './assets/img/product/honda/Honda CBR600RR.jpg', name:'Honda CBR600RR' , price:520000000 },
			{ productId: 10020, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki Hayabusa 2018.jpg', name: 'Suzuki Hayabusa 2018', price: 494000000 },
			{ productId: 10003, brand: 'honda', img: './assets/img/product/honda/Honda CB500F.jpg', name: 'Honda CB500F', price: 177500000 },
			{ productId: 10033, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha Bolt R950.jpg', name: 'Yamaha Bolt R950', price: 420000000 },
			{ productId: 10025, brand: 'suzuki', img: './assets/img/product/suzuki/suzuki-Bandit-1250S-ABS.jpg', name:'Suzuki Bandit 1250S ABS' , price:228000000},
			{ productId: 10034, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha MT10.jpg', name: 'Yamaha MT10', price: 623000000 },
			{ productId: 10010, brand: 'honda', img: './assets/img/product/honda/Honda CBR650R.jpg', name:'Honda CBR650R' , price:252000000 },
			{ productId: 10035, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha YZF-R1.jpg', name: 'Yamaha YZF-R1', price: 638000000 },
			{ productId: 10042, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki W175 SE.jpg', name: 'Kawasaki W175 SE', price: 69500000 },
			{ productId: 10005, brand: 'honda', img: './assets/img/product/honda/Honda Shadow Aero 750 ABS.jpg', name: 'Honda Shadow Aero 750 ABS', price: 475000000 },
			{ productId: 10037, brand: 'yamaha', img: './assets/img/product/yamaha/yamaha TFX 150.png', name: 'Yamaha TFX 150' , price:15600000},
			{ productId: 10004, brand: 'honda', img: './assets/img/product/honda/Honda CBR600RR HRC MotoGP.jpg', name: 'Honda CBR600RR HRC MotoGP', price: 720000000 },
			{ productId: 10013, brand: 'honda', img: './assets/img/product/honda/Honda ST1300.jpg', name:'Honda ST1300' , price:480000000 },	
			{ productId: 10038, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha Tracer 900 GT 2020.jpg', name: 'Yamaha Tracer 900 GT 2020' , price:15600000},
			{ productId: 10040, brand: 'yamaha', img: './assets/img/product/yamaha/yamaha-YZF-R6.jpg', name: 'Yamaha YZF R6' , price:15600000},
			{ productId: 10027, brand: 'suzuki', img: './assets/img/product/suzuki/suzuki-v-strom-1000-.jpg', name:'Suzuki V-Strom 1000GT' , price:419000000},
			{ productId: 10041, brand: 'yamaha', img: './assets/img/product/yamaha/yamaha-YZF-R25-2019.jpg', name: 'Yamaha YZF R25 2019' , price:15600000},
			{ productId: 10043, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki Ninja ZX25R ABS KRT EDITION.png', name: 'Kawasaki Ninja ZX25R ABS KRT EDITTION', price: 189000000 },
			{ productId: 10023, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki SV650 2017.jpg', name:'Suzuki SV650 2017' , price:194000000},
			{ productId: 10045, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki Vulcan S 650.jpg', name: 'Kawasaki Vulcan S 650', price: 239000000 },
			{ productId: 10007, brand: 'honda', img: './assets/img/product/honda/Honda Rebel 1100 DTC.jpg', name: 'Honda Rebel 1100 DTC', price: 620000000 },
			{ productId: 10048, brand: 'kawasaki', img: './assets/img/product/kawasaki/Kawasaki ZX10R ABS.jpg', name: 'Kawasaki ZX10R ABS', price: 571000000 },
			{ productId: 10014, brand: 'suzuki', img: './assets/img/product/suzuki/Suzuki GSX-R150.jpg', name: 'Suzuki GSX-R150', price: 71990000 },
			{ productId: 10050, brand: 'kawasaki', img: './assets/img/product/kawasaki/kawasaki NINJA H2 CARBON.png', name: 'kawasaki NINJA H2 CARBON', price:1299000000 },
			{ productId: 10030, brand: 'yamaha', img: './assets/img/product/yamaha/Yamaha YZF-R6.jpg', name: 'Yamaha YZF-R6', price: 283000000 },
			{ productId: 10051, brand: 'kawasaki', img: './assets/img/product/kawasaki/kawasaki VERSYS-X 300 ABS CITY.png', name: 'kawasaki VERSYS-X 300 ABS CITY', price:145400000},
			{ productId: 10002, brand: 'honda', img: './assets/img/product/honda/Honda Rebel 300.jpg', name: 'Honda Rebel 300', price: 124000000 },
			{ productId: 10054, brand: 'kawasaki', img: './assets/img/product/kawasaki/kawasaki Z900RS.png', name: 'kawasaki Z900RS', price:415000000 },
	
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
		console.log("alo all");
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
				'<p class="product-name">' + productArray[i].name + '</p>' +
				'<p class="product-price"> Giá: ' + currency(productArray[i].price) + '</p>' +
				'<button class="btn" onClick="showProductInfo(' + productArray[i].productId + ')">Chi tiết</button></div>';
			count++;
			if (count == 9)
				break;
		}
		pageNum = Math.ceil(productArray.length / 9);
		var link = '';
		for (var i = 1; i <= pageNum; i++) {
			pos = (i - 1) * 9;
			var a = '<a href="index.html?all&' + pos + '">' + i + '</a>';
			link += '<div class="pageNumber">' + a + '</div>';
		}
		document.getElementById('page').innerHTML = link;
	}
	else {
		console.log("alo");
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
				'<p class="product-name">' + arrTemp[i].name + '</p>' +
				'<p class="product-price"> Giá: ' + currency(arrTemp[i].price) + '</p>' +
				'<button class="btn" onClick="showProductInfo(' + arrTemp[i].productId + ')">Chi tiết</button></div>';
			count++;
			if (count == 6)
				break;
		}
		pageNum = Math.ceil(arrTemp.length / 6);
		var link = '';
		for (var i = 1; i <= pageNum; i++) {
			pos = (i - 1) * 6;
			var a = '<a href="index.html?' + brand + '&' + pos + '">' + i + '</a>';
			link += '<div class="pageNumber">' + a + '</div>';
		}
		document.getElementById('page').innerHTML = link;
	}
	document.getElementById('product').innerHTML = s;
}

function showProductInfo(productid) {
	document.getElementById('productInfo').style.display = 'block';
	var productArray = JSON.parse(localStorage.getItem('product'));
	for (var i = 0; i < productArray.length; i++) {
		if (productArray[i].productId == productid) {
			document.getElementById('productname').innerHTML = productArray[i].name;
			document.getElementById('productprice').innerHTML = 'Giá: ' + currency(productArray[i].price);
			document.getElementById('imgbig').src = productArray[i].img;
			document.getElementById('version').value = 'non-abs';
			document.getElementById('quantity').value = 1;
			document.querySelector('#info .right button.addtocart').setAttribute('onClick', 'addToCart(' + productid + ')');
		}
	}
}

function closeProductInfo() {
	document.getElementById('productInfo').style.display = 'none';
}

/*END PRODUCT*/


/*CART*/
function addToCart(productid1){
	var version = document.getElementById('version').value;
	var quantity = document.getElementById('quantity').value;
	var productArray = JSON.parse(localStorage.getItem('product'));
	var producttemp;
	for(var i=0; i<productArray.length;i++){
		if(productArray[i].productId==productid1){
			producttemp = productArray[i];
		}
	}
	if(localStorage.getItem('cart')===null){
		var cartArray = [];
		producttemp.quantity = quantity;
		producttemp.version = version;
		producttemp.totalprice = quantity*producttemp.price;
		cartArray.unshift(producttemp);
		localStorage.setItem('cart',JSON.stringify(cartArray));
	}else{
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		producttemp.quantity = quantity;
		producttemp.version = version;
		producttemp.totalprice = quantity*producttemp.price;
		cartArray.unshift(producttemp);
		localStorage.setItem('cart',JSON.stringify(cartArray));		
	}
	closeProductInfo();
}

function showCartTable(){
	if (localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		var s='<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';
		document.getElementById('carttable').innerHTML=s;
		document.getElementById('totalprice').innerHTML=0;
	}else {
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		var s='<tr><th></th><th>Tên xe</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr>';
		var totalprice=0;
		for (var i = 0; i < cartArray.length; i++){
			s+=  '<tr>'+
					'<td><img src="../'+cartArray[i].img+'"></td>'+
					'<td>'+
						'<div>'+cartArray[i].name+'</div>'+
						'<div>Phiên bản: '+cartArray[i].version+'</div>'+
					'</td>'+
					'<td>'+currency(cartArray[i].price)+'</td>'+
					'<td>'+
						'<button onClick="quantityDown2('+cartArray[i].productId+')">-</button>'+
						'<input id="quantity" type="text" disabled value="'+cartArray[i].quantity+'" onchange="updateCart(this.value,'+cartArray[i].productId+')">'+
						'<button onClick="quantityUp2('+cartArray[i].productId+')">+</button>'+
					'</td>'+
					'<td>'+currency(cartArray[i].price*cartArray[i].quantity)+'</td>'+
					'<td><button onClick="deleteCartItem('+cartArray[i].productId+')">&times;</buttom></td>'+
				'</tr>';
			totalprice+=cartArray[i].price*cartArray[i].quantity;
		}
		document.getElementById('carttable').innerHTML=s;
		document.getElementById('totalprice').innerHTML=currency(totalprice);
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

function buy(){
	if(localStorage.getItem('userlogin')===null){
		customAlert('Bạn phải đăng nhập để mua sản phẩm','warning');
		return false;
	}
	var info = '';
	var totalprice = 0;
	if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		return false;
	}
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
			info+=cartArray[i].name+' version '+ cartArray[i].version+' x '+cartArray[i].quantity+'; ';
			totalprice+=cartArray[i].quantity*cartArray[i].price;
	}
	var customer = JSON.parse(localStorage.getItem('userlogin'));
	var date = new Date();
	var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
	if(localStorage.getItem('bill')===null){
		var billArray = [];
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Đang chờ'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else{
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Đang chờ'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}	
	localStorage.removeItem('cart');
	showCartTable();
	showBill();
}

function showBill(){
	if (localStorage.getItem('bill')===null){
		document.getElementById('bill').style.display = 'none';
	}
	else{
		var user = JSON.parse(localStorage.getItem('userlogin'))
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var s='<h2>Đơn hàng đã đặt</h2>';
		for (var i = 0; i < billArray.length; i++) {
			if(user.username==billArray[i].customer.username){
				document.getElementById('bill').style.display = 'block';
				s+='<div class="billcontent">'+
					'<div>'+billArray[i].info+'</div>'+
					'<div>'+currency(billArray[i].totalprice)+'</div>'+
					'<div>'+billArray[i].date+'</div>'+
					'<div>'+billArray[i].status+'</div>'+
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
		document.querySelector('#searchsection .searchbox button img').src = '../assets/img/icon/arrow2.svg';
	}
	else {
		document.getElementById('searchextend').classList.remove('active');
		document.querySelector('#searchsection .searchbox button img').src = '../assets/img/icon/arrow.svg';
		var priceForm = document.getElementById('priceform').value = "";
		var priceTo = document.getElementById('priceto').value = "";
	}
}
/*END SEARCH*/




/*USER*/
function createAdmin() {
	if (localStorage.getItem('user') === null) {
		var userArray = [];
		var user = { username: 'admin', password: 'admin', fullname: 'admin', address: '273 An Dương Vương, P3, Quận 5, TPHCM', phone: '0123456789', datesginup: '5-12-2022' };
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
const modal = document.querySelector('.js-modal');
document.getElementById('signupform').addEventListener('submit', createUser);
document.getElementById('loginform').addEventListener('submit', login);
document.getElementById('user').addEventListener('click', closeForm);
modal.addEventListener('click', closeProductInfo)
document.getElementById('loginform').addEventListener('click', function(event) {
	event.stopPropagation();
});
document.getElementById('signupform').addEventListener('click', function(event) {
	event.stopPropagation();
});
document.getElementById('info').addEventListener('click', function(event) {
	event.stopPropagation();
});


function createUser(e) {
	e.preventDefault();
	var fullname = document.getElementById('fullname');
	var address = document.getElementById('address');
	var phone = document.getElementById('phone');
	var username = document.getElementById('usernameSignUp');
	var password = document.getElementById('passwordSignUp');
	var password2 = document.getElementById('passwordSignUp2');
	var flag = true;
	if (!fullname.value) {
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
	var datesignup = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
	var user = { username: username.value, password: password.value, fullname: fullname.value, address: address.value, phone: phone.value, datesignup: datesignup };
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
	showFormLogin();
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
			s = '<li class="nav-user"><button onClick="window.location.href=\'admin/product.html\'"><i class="fas fa-tools"></i></button></li>' +
				'<li class="nav-user"><button>' + user.fullname + '</button><button id="btnlogout" onClick="logout(\'index.html\')"><i class="fas fa-sign-out-alt"></i></button></li>' +
				'<li class="navbar-item2"><a class="shopping" href="./admin/cart.html">GIỎ HÀNG <i style="font-size: 14px;" class="fas fa-shopping-cart"></i></a></li>' + 
				'<li class="navbar-item2"><a class="search-icon search-btn" onClick="showSearch()"><i style="font-size: 20px;" class="fas fa-search"></i></a></li>';
		} else {
			s = '<li class="nav-user"><button>' + user.fullname + '</button><button id="btnlogout" onClick="logout(\'index.html\')"><i class="fas fa-sign-out-alt"></i></button></li>' +
				'<li class="navbar-item2"><a class="shopping" href="./admin/cart.html">GIỎ HÀNG <i style="font-size: 14px;" class="fas fa-shopping-cart"></i></a></li>' + 
				'<li class="navbar-item2"><a class="search-icon search-btn" onClick="showSearch()"><i style="font-size: 20px;" class="fas fa-search"></i></a></li>';
		}
		document.querySelector('.header .navbar #navbar-list-bottom').innerHTML = s;
	}
}
function checkLogin2() {
	if (localStorage.getItem('userlogin')) {
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s = '';
		if (user.username == 'admin') {
			s = '<li class="nav-user"><button onClick="window.location.href=\'../admin/product.html\'"><i class="fas fa-tools"></i></button></li>' +
			'<li class="nav-user"><button>' + user.fullname + '</button><button id="btnlogout" onClick="logout(\'index.html\')"><i class="fas fa-sign-out-alt"></i></button></li>' +
			'<li class="navbar-item2"><a class="shopping" href="../admin/cart.html">GIỎ HÀNG <i style="font-size: 14px;" class="fas fa-shopping-cart"></i></a></li>' + 
			'<li class="navbar-item2"><a class="search-icon search-btn" onClick="showSearch()"><i style="font-size: 20px;" class="fas fa-search"></i></a></li>';
		} else {
			s = '<li class="nav-user"><button>' + user.fullname + '</button><button id="btnlogout" onClick="logout(\'../index.html\')"><i class="fas fa-sign-out-alt"></i></button></li>' +
			'<li class="navbar-item2"><a class="shopping" href="../admin/cart.html">GIỎ HÀNG <i style="font-size: 14px;" class="fas fa-shopping-cart"></i></a></li>' + 
			'<li class="navbar-item2"><a class="search-icon search-btn" onClick="showSearch()"><i style="font-size: 20px;" class="fas fa-search"></i></a></li>';
		}
		document.querySelector('.cart-main .navbar #navbar-list-bottom').innerHTML = s;
	}
}
/*END USER*/



/*CUSTOM ALERT BOX*/
function customAlert(message, type) {
	if (type == 'success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';
	}
	if (type == 'warning') {
		document.getElementById("customalert").style.backgroundColor = '#f44336';
	}
	document.getElementById("customalert").innerHTML = message;
	var x = document.getElementById("customalert");
	x.className = "show";
	setTimeout(function () { x.className = x.classList.remove("show"); }, 3500);
}





