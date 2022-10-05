// alert("hfeubfesjfoe")

const getuote =async ()=>{

  
  var picArr = ['p1.jpg','p2.jpg','p3.jpg','p4.jpg','p5.jpg','p6.jpg','p7.jpg','p8.jpg','p9.jpg','p10.jpg','p11.jpg','p12.jpg','p13.jpg','p14.jpg','p15.jpg'];

    //  const imageResponse = await fetch("https://api.unsplash.com/photos/random?client_id=z3_d8Ik9OJJ4HA3BuAAea3CIJ_1k_-sF1d_IX_ZFJHM&orientation=landscape&query=mountain+sky",
    //  {
    //      method:"GET",
    //      headers: {
    //         'Access-Control-Allow-Credentials' : true,
    //         'Access-Control-Allow-Origin':'*',
    //         'Access-Control-Allow-Methods':'GET',
    //         'Access-Control-Allow-Headers':'application/json',
    //       },
    //      },
    //      );

    // const imageData = await imageResponse.json();
    // console.log("I am herere1")
    // console.log(imageData.urls.raw)
    
    
    var myNumber = Math.floor((Math.random()*15) + 1);
    console.log(myNumber);
    document.getElementById("background").style.backgroundImage = `url(${picArr[myNumber]})`;
    console.log("I am herere2")
    // console.log(data[random]);
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    console.log(data);
    const random = Math.floor(Math.random()*data.length);
    document.getElementById("quote").innerHTML = data[random].text;
    document.getElementById("author").innerHTML = data[random].author;

}


const myHeading = document.getElementById('quote');

getuote();