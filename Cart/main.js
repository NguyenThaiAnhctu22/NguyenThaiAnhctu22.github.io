function taoCart(){
    var cart = [
     {
      'tensp':'Iphone 11 - green - 128Gb', 
      'gia': 12090000, 'tien':0,
      'hinh':'data/img/iphone-11-green.jpg',
      'soluong':1 
     },
     { 
      'tensp':'Headphone-Sony WH-CH510', 
      'gia': 1090000, 'tien':0,
       'hinh':'data/img/Headphone-Sony WH-CH510.jpg', 
      'soluong':3
     },
     { 
      'tensp':'Samsung-galaxy-tab-s7-fe-green', 
      'gia': 12790000, 'tien':0,
      'hinh':'data/img/samsung-galaxy-tab-s7-fe-green.jpg', 
      'soluong':3
     },
     { 
      'tensp':'iphone-12-pro-max-silver', 
      'gia': 10750000, 'tien':0,
      'hinh':'data/img/iphone-12-pro-max-silver.jpg', 
      'soluong':2  
     }
    ];
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert('Đã tạo cart xong trong sessionStorage')
}



