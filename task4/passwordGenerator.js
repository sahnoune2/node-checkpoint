const generator = require("generate-password");

const passwordGenerator = () => {
  const password = generator.generate({
    length: 10,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: false,
  });

  console.log(password);
};

passwordGenerator();
