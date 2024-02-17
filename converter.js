$(document).ready(function () {



var obj;

  $.ajax({
            type: 'GET',
              dataType:"json",
            url: 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_lKyL7HcWzpdeAxmcd7HSGOlblrVsFVQOc1USloe3',
             success: function (data) {
              //console.log(data);
             dataObject=data.data
             obj=dataObject
             $.each(dataObject, function (key, value){ 
              //console.log(value)
              $(".currency").append(`<option  value="${key}"> ${key} </option>`)
                
              })
            }
  

          })

var amount;
var amount2;

$("#amount1").on('keyup mouseup', function () {
  // console.log("fffffffffff");
  var amt = $(this).val()
  amount=amt
  console.log(amount);
});


$("#amount2").on('keyup mouseup', function () {
  // console.log("fffffffffff");
  var amt = $(this).val()
  amount2=amt
  console.log(amount2);
});




//console.log(amount);

$("#amount1").keyup(function (e) { 
  //e.preventDefault();
  
    var code_one= $("#c_code").val();
  var code_two= $("#c_code2").val();
  //console.log(code_two)
  // $.ajax({
  //   type: 'GET',
  //     dataType:"json",
  //   url: 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_lKyL7HcWzpdeAxmcd7HSGOlblrVsFVQOc1USloe3',
  //    success: function (data) {
      //console.log(code_two);
        // console.log(data/)
      //var obj=data.data;
      var amt1=obj[code_one]
      var amt2=obj[code_two]
      console.log(amt1)
      console.log(amt2)
     
      var result = amt2/amt1*amount;
      console.log(result);
      if (result<0)
      {
        $("#amount2").val('0');
      }
      else
      {
      $("#amount2").val('0');
      $("#amount2").val(result)
      }
    
    // }
      

  //})
  
  

});


$("#amount2").keyup(function (e) { 
  //e.preventDefault();
  if(amount2>=0)
  {
    var code_one= $("#c_code").val();
  var code_two= $("#c_code2").val();
  //console.log(code_two)
  // $.ajax({
  //   type: 'GET',
  //     dataType:"json",
  //   url: 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_lKyL7HcWzpdeAxmcd7HSGOlblrVsFVQOc1USloe3',
  //    success: function (data) {
  //     //console.log(code_two);
  //       // console.log(data/)
     // var obj=data.data;
      var amt1=obj[code_one]
      var amt2=obj[code_two]
      console.log(amt1)
      console.log(amt2)
     
      var result = amt1/amt2*amount2;

      if (result<0)
      {
        $("#amount1").val('0');
      }
      else
      {
      console.log(result);
      $("#amount1").val('0');
      $("#amount1").val(result)
      }
    
    //}
      

  //})
  
  }

});







})