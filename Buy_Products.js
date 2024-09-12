function myspecial() {
    var a =document.getElementById("size1");
    var aa =document.getElementById("size11");
    var aaa =document.getElementById("size111");
    var b =document.getElementById("size2");
    var bb =document.getElementById("size22");
    var bbb =document.getElementById("size222");
    var c =document.getElementById("size3");
    var cc =document.getElementById("size33");
    var ccc =document.getElementById("size333");
    var d =document.getElementById("size4");
    var dd =document.getElementById("size44");
    var ddd =document.getElementById("size444");
    var e =document.getElementById("size5");
    var ee =document.getElementById("size55");
    var eee =document.getElementById("size555");
    var f =document.getElementById("size7");
    var ff =document.getElementById("size77");
    var fff =document.getElementById("size777");
    var g =document.getElementById("size8");
    var gg =document.getElementById("size88");
    var ggg =document.getElementById("size888");
    var h =document.getElementById("size9");
    var hh =document.getElementById("size99");
    var hhh =document.getElementById("size999");
    var i =document.getElementById("size0");
    var ii =document.getElementById("size00");
    var iii =document.getElementById("size000");
    var j=document.getElementById("sizeA");
    var jj =document.getElementById("sizeAA");
    var jjj =document.getElementById("sizeAAA");
    

    if (a.checked == true){
        var totala = 100;
    }else if(aa.checked==true){var totala=300;} else if(aaa.checked==true){var totala=500;}
    else{var totala=0;}

    if (b.checked == true){
        var totalb = 150;
    }else if(bb.checked==true){var totalb=350;} else if(bbb.checked==true){var totalb=550;}
    else{var totalb=0;}

    if (c.checked == true){
        var totalc = 100;
    }else if(cc.checked==true){var totalc=300;} else if(ccc.checked==true){var totalc=500;}
    else{var totalc=0;}

    if (d.checked == true){
        var totald = 160;
    }else if(dd.checked==true){var totald=360;} else if(ddd.checked==true){var totald=560;}
    else{var totald=0;}

    if (e.checked == true){
        var totale = 170;
    }else if(ee.checked==true){var totale=370;} else if(eee.checked==true){var totale=570;}
    else{var totale=0;}

    if (f.checked == true){
        var totalf = 300;
    }else if(ff.checked==true){var totalf=500;} else if(fff.checked==true){var totalf=1000;}
    else{var totalf=0;}

    if (g.checked == true){
        var totalg = 150;
    }else if(gg.checked==true){var totalg=350;} else if(ggg.checked==true){var totalg=550;}
    else{var totalg=0;}

    if (h.checked == true){
        var totalh = 100;
    }else if(hh.checked==true){var totalh=300;} else if(hhh.checked==true){var totalh=500;}
    else{var totalh=0;}

    if (i.checked == true){
        var totali = 50;
    }else if(ii.checked==true){var totali=100;} else if(iii.checked==true){var totali=300;}
    else{var totali=0;}

    if (j.checked == true){
        var totalj = 50;
    }else if(jj.checked==true){var totalj=100;} else if(jjj.checked==true){var totalj=300;}
    else{var totalj=0;}

   

    

    var total=totala+totalb+totalc+totald+totale+totalf+totalg+totalh+totali+totalj ;
    document.getElementById('order').innerHTML="Name : " +document.getElementById('fname').value + "\nEmail : " +document.getElementById('mail').value +  "\nAddress : " +document.getElementById('address').value +  "\nMobile No. : " +document.getElementById('mobile').value + "\nOrder Total = " +total;
     
      
}

//function which validates user first name input
function userFname(fname) {
    //check whether the first name input field is empty
    if (fname == "") {
      return false;
    } else {
      return true;
    }
  }
  //function which validates user Email
  function userEmail(mail) {
    //check whether the email input field is empty
    if (
      mail == "" ||
      mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == null
    ) {
      return false;
    } else {
      return true;
    }
  }
   //function which validates user address input
   function userAddress(address) {
    //check whether the address input field is empty
    if (address == "") {
      return false;
    } else {
      return true;
    }
  }
   //function which validates user card number input
   function userCn1(ccn) {
    //check whether the card number input field is empty
    if (ccn == "" || ccn.match(/^[0-9]+$/) == null) {
      return false;
    } else {
      return true;
    }
  }
   //function which validates users contact
   function userContact(tel) {
    //check whether the contact field is not empty and has 10digits
    if (
      tel == "" ||
      tel.length !== 10 ||
      tel.match(/[A-Za-z\s]/) !== null
    ) {
      return false;
    } else {
      return true;
    }
  }


  function saveData() {
    // Getting Values in the form
  
    // Getting the first name of the user
    let fname = document.getElementById("fn").value;
    //getting the address of the user
    let address = document.getElementById("address").value;
    //getting the contact of the user
    let tel = document.getElementById("tel").value;
    //getting the email of the user
    let mail = document.getElementById("mail").value;
    //getting the credit card no of the user
    let ccn = document.getElementById("ccn").value;

  

   //DISPLAY POPUP FOR VALIDATION

   if (userFname(fname) == false) {
    swal({
      text: "Please Enter Your First Name",
    });
  } else if (userAddress(address) == false) {
    swal({
      text: "Please Enter The Address",
    });
  } else if (userContact(tel) == false) {
    swal({
      text: "Please Enter Your Contact Number",
    });
  } else if (userEmail(mail) == false) {
    swal({
      text: "Please Enter Your Email",
    });
  } else if (userCn1(ccn) == false) {
    swal({
      text: "Please Enter the First 16 Numbers of the Card",
    });
  } else {
    swal({
      text: "All Good!, Your Data has been Saved, Success",
    });
  }
  }