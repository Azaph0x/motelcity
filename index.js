const name = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const cpf = document.querySelector("#cpf");
const service = document.querySelector("#service");
const date = document.querySelector("#date");
const suite = document.querySelector("#suite");
const value_total = document.querySelector(".total-value");

const booking = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  cpf: "",
  services: {
    name: "",
    value: "",
  },
  date: "",
  hour: "",
  suite: {
    name: "",
    value: "",
  },
};

suits = [
  { name: "RAPIDINHA", value: 70 },
  { name: "PREMIUM", value: 100 },
  { name: "DELUX", value: 150 },
];

services = [
  { name: "RAPIDINHA", value: 20 },
  { name: "CINEMINHA NETFLIX 1", value: 30 },
  { name: "CINEMINHA NETFLIX 2", value: 50 },
  { name: "VINHO COM MORANGOS E CHANTILLY", value: 204 },
  { name: "Nenhum", value: 0 },
];

function init() {
  booking.suite = suits[0];
  booking.services = services[4];
  updateBooking();
}

Cart = {
  apply(input, func) {
    setTimeout(() => {
      input.value = Cart[func](input.value);
    }, 1);
  },
  suite(value) {
    value = value.replace(/\D/g, "");
    booking.suite = suits[Number(value)];
    updateBooking();
    // value_total.innerHTML = booking.suite.value;
    return value;
  },
  services(value) {
    value = value.replace(/\D/g, "");
    booking.services = services[Number(value)];
    updateBooking();
    // value_total.innerHTML = booking.suite.value;
    return value;
  },
  cpf(value) {
    value = value.replace(/\D/g, "");
    if (value.length > 11) {
      value = value.slice(0, -1);
    } // suporte logico, caso algo de errado no html

    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // 111.111
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // 111.11
    value = value.replace(/(\d{3})(\d)/, "$1-$2"); // 111-11111111....
    return value;
  },
};

function updateBooking() {
  document.querySelector("#date").value = booking.datel;
  document.querySelector(
    ".services-value"
  ).innerHTML = `${booking.services.name} - R$${booking.services.value}`;
  document.querySelector(
    ".suite-value"
  ).innerHTML = `${booking.suite.name} - R$${booking.suite.value}`;
  value_total.innerHTML = booking.suite.value + booking.services.value;
}

function submit() {
  console.log(booking);
}
init();
