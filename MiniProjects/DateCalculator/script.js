const p = document.getElementById("output");

const createDate = () => {
  const today = new Date();
  return [today.getDate(), today.getMonth(), today.getFullYear()];
};

const checkForZero = (toCheck) => {
  return toCheck.substring(0, 1) == 0 ? toCheck.slice(1, 2) : toCheck;
};

const checkIfWasBirthday = (user_input, today) => {
  if (today[1] < user_input[1]) return 1;
  if (today[1] === user_input[1]) {
    if (today[0] < user_input[0]) return 1;
  }
  return 0;
};

const destruct = () => {
  const input = document.getElementById("date-input");
  const days = input.value.substring(8, 10);
  const month = input.value.substring(5, 7);
  const year = input.value.substring(0, 4);
  return [checkForZero(days), checkForZero(month), checkForZero(year)];
};

const datePickerSubmitted = () => {
  const user_input = destruct();
  const today = createDate();
  calcAge(today, user_input);
};

const submitButtonPressed = () => {
  if (
    document.getElementById("day").value &&
    document.getElementById("month").value &&
    document.getElementById("year").value
  ) {
    const today = createDate();
    const dateOfBirth = [
      checkForZero(document.getElementById("day").value),
      checkForZero(document.getElementById("month").value),
      checkForZero(document.getElementById("year").value),
    ];
    calcAge(today, dateOfBirth);
  } else {
    p.textContent = "Invalid input";
  }
};

const calcAge = (today, user_input) => {
  calcSubStats(
    today[2] - user_input[2] - checkIfWasBirthday(user_input, today)
  );
};

const calcSubStats = (age) => {
  const lived_days = age * 365;
  const lived_months = age * 12;
  const lived_hours = lived_days * 24;

  p.textContent = `Your age is ${age}. That would be ${lived_months} months or ${lived_days} days or ${lived_hours} hours`;
};
