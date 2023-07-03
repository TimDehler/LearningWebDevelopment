const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve P1"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve P2"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve P3"), 1000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve P4"), 1000);
});

Promise.all([p1, p2, p3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message));
