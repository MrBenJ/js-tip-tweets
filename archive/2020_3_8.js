
// TIP: Have you tried destructuring
// with a RegExp match?

const phone = '5558082195';

const [
  fullPhoneNumber,
  area,
  office,
  line
] = phone.match(/^(\d{3})(\d{3})(\d{4})$/);

const formatted = `(${area}) ${office}-${line}`;
// => '(555) 808-2195'


