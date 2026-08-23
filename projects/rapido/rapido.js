function bike() {
  let bikedata = document.querySelector("#bike").value;
  confirm(`THE TOTAL FARE FOR THE BIKE RIDE IS ${bikedata * 10}`);
  alert("BIKE HAS BEEN BOOKED SUCCESSFULLY ✅ ! - enjoy the ride . ");
}

let auto = () => {
  let autodata = document.querySelector("#auto").value;
  confirm(`THE TOTAL FARE FOR THE AUTO RIDE IS ${autodata * 20}`);
  alert("AUTO HAS BEEN BOOKED SUCCESSFULLY ✅ ! - enjoy the auto ride . ");
};

let car = () => {
  let cardata = document.querySelector("#car").value;
  confirm(`THE TOTAL FARE FOR THE CAR RIDE IS ${cardata * 100}`);
  alert("CAR HAS BEEN BOOKED SUCCESSFULLY ✅ ! - enjoy the car ride . ");
};
