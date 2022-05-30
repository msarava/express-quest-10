const User = require('./models/user');

User.hashPassword('myPlainPassword').then((hashedPassword) => {
  console.log(hashedPassword);
});

User.verifyPassword(
  'myPlainPassword',
  '$argon2id$v=19$m=65536,t=5,p=1$A5wc4pU1uVRbXRqUlWhKrA$FQNVmqNcU7Tgt5uutjJft6kAJoAlO6jHgqPwhp3xCcM'
).then((passwordIsCorrect) => {
  console.log(passwordIsCorrect);
});
