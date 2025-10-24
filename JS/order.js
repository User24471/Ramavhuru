// js/order.js
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your order! We’ll contact you shortly.");
  this.reset();
});
