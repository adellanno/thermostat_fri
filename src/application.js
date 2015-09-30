$( document ).ready(function(){
  thermostat = new Thermostat();
  power = new Power();

  $("#temp").text(thermostat.temperature);

  $("#up").click(function(){
    $("#temp").text(thermostat.increase_temp(power));
  });

  $("#down").click(function(){
    $("#temp").text(thermostat.decrease_temp());
  });

   if($('power_save').prop('checked',true)) {
      power.switch_on();
    } else {
      power.switch_off();
    };
    });



//   $( document ).ready(function(){
//     $( "a" ).click(function( event ) {
//       alert( "Come back soon" );
//       event.preventDefault();
//       $( this ).hide( "slow" );
//     });
//   });

// document.getElementById("output").innerHTML=name;

// function somefunction(){
//   var somevalue = "Data to be inserted";
//   $("#SecondDiv").text(somevalue);
// }