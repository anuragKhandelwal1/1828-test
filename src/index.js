const f = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) return callback(new Error("firstName is required"));
    const fullName = `${firstName} Turing`;
    return callback(fullName);
  }, 2000);
};
f("Alan", console.log);
f(null, console.log);

const f1 = (firstName) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!firstName) rej(new Error("firstName is required"));
      const fullName = `${firstName} Turing`;
      res(fullName);
    }, 2000);
  });
};

f1("Alan").then(
  (data) => console.log(data),
  (err) => console.log(err)
);
f1(null).then(
  (data) => console.log(data),
  (err) => console.log(err)
);
