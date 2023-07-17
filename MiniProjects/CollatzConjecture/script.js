const output_field = document.getElementById("output");
const number_input_element = document.getElementById("input");
const table_body = document.getElementById("tbody");

const makeSequenz = (number) => {
  let arr = [];
  arr.push(number);

  const recursiveSubFunction = (number) => {
    if (number !== 1) {
      let newNumber;

      if (number % 2 === 0) {
        newNumber = number / 2;
      } else {
        newNumber = number * 3 + 1;
      }
      arr.push(newNumber);
      return recursiveSubFunction(newNumber);
    } else {
      return;
    }
  };
  recursiveSubFunction(number);
  return arr;
};

const check_If_n_Is_PositiveInteger = (n) => {
  return n > 0 && n % 1 === 0 ? true : false;
};

const createSequenzes_For_n_Height = () => {
  table_body.innerHTML = "";
  let arr = [];
  const n = number_input_element.value;

  if (check_If_n_Is_PositiveInteger(n)) {
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
  } else {
    output_field.textContent = "Invalid number try again";
    setTimeout(() => {
      output_field.textContent = "";
      number_input_element.value = "";
    }, 1500);
  }
  create_TwoDimensional_Sequenz(arr);
};

const create_TwoDimensional_Sequenz = (arrOfN) => {
  let arr = [];
  arrOfN.map((n) => {
    arr.push(makeSequenz(n));
  });
  createTableFromArr(arr);
  console.log(arr);
  drawChart(arr);
};

const createTableFromArr = (arr) => {
  arr.map((index) => {
    let tr_Element = document.createElement("tr");
    tr_Element.setAttribute("id", `${arr.indexOf(index) + 1}`);
    table_body.appendChild(tr_Element);

    let appendTo = document.getElementById(`${arr.indexOf(index) + 1}`);

    const n_element = document.createElement("td");
    n_element.textContent = arr.indexOf(index) + 1;

    const sequenz_element = document.createElement("td");
    sequenz_element.textContent = index;

    appendTo.appendChild(n_element);
    appendTo.appendChild(sequenz_element);
  });
};

function drawChart(data) {
  // Set up the SVG container
  const svg = d3.select("#chart").attr("width", 400).attr("height", 300);

  // Calculate the maximum values for x and y axes
  const maxX = d3.max(data, (d) => d.length - 1);
  const maxY = d3.max(data.flat());

  // Define the scales for x and y axes
  const xScale = d3.scaleLinear().domain([0, maxX]).range([40, 360]);
  const yScale = d3.scaleLinear().domain([1, maxY]).range([260, 40]);

  // Define the line function
  const line = d3
    .line()
    .x((d, i) => xScale(i))
    .y((d) => yScale(d));

  // Create the lines
  for (let i = 0; i < data.length; i++) {
    svg.append("path").datum(data[i]).attr("class", "line").attr("d", line);
  }

  // Create the x-axis
  svg
    .append("g")
    .attr("transform", "translate(0, 260)")
    .call(d3.axisBottom(xScale));

  // Create the y-axis
  svg
    .append("g")
    .attr("transform", "translate(40, 0)")
    .call(d3.axisLeft(yScale).ticks(maxY));

  // Remove displaying of x-axis values
  svg.selectAll(".tick text").remove();

  // Remove displaying of y-axis values
  svg.selectAll(".tick line").remove();
}
