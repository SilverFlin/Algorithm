let taskTable = [];
let memoryTable = [];
let memoryCapacity = 50000;

const resetData = () => {
  taskTable = [
    {
      size: 2710,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 6580,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 3610,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 5760,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 2030,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 7540,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 9140,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 420,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 5950,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 1380,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 6890,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 760,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 3290,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 4190,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 8390,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 3210,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 3820,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 3930,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 9350,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 6990,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 8940,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 2550,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 740,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 7540,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 220,
      status: "En Espera",
      isFinished: false,
    },
  ];
  //size status isFinished
  memoryTable = [
    {
      numProcess: undefined,
      bloque: undefined,
    },
  ];

  memoryCapacity = 50000;
};

resetData();

//------------------Selectores----------------
const taskTableDom = document.getElementById("taskTable");
const memoryTableDom = document.getElementById("memoryTable");
const listItem = document.createElement("li");
const nextBtn = document.querySelector("#nextBtn");
const startBtn = document.querySelector("#startBtn");
const fullBtn = document.querySelector("#fullBtn");
const resetBtn = document.querySelector("#resetBtn");
const autoBtn = document.querySelector("#autoBtn");
const stopAutoBtn = document.querySelector("#stopAutoBtn");
const memoryBar = document.querySelector("#memoryBar");
const memoryQty = document.querySelector("#memoryQty");
memoryBar.style.transition = "all 1s ease-out";

//------------------Funciones ---------
const highlight = (currentTask) => {
  a;
};
const clearTables = () => {
  while (taskTableDom.firstChild) {
    taskTableDom.removeChild(taskTableDom.firstChild);
  }
  while (memoryTableDom.firstChild) {
    memoryTableDom.removeChild(memoryTableDom.firstChild);
  }
};

const resetTables = () => {
  for (const task of taskTable) {
    const listItem = document.createElement("li");
    listItem.style.textAlign = "center";
    listItem.appendChild(
      document.createTextNode(
        `Proceso #${taskTable.indexOf(task) + 1}   |   ${task.size} | ${
          task.status
        }` // Genera los textos
      )
    );

    // Se generan los colores
    if (task.status === "En Espera") {
      taskTableDom
        .appendChild(listItem)
        .classList.add("list-group-item", "list-group-item-danger");
    } else if (task.status === "En Proceso") {
      taskTableDom
        .appendChild(listItem)
        .classList.add("list-group-item", "list-group-item-warning");
    } else if (task.status === "Terminado") {
      taskTableDom
        .appendChild(listItem)
        .classList.add("list-group-item", "list-group-item-success");
    }
  }
  memoryCapacity = 50000;
  if (memoryTable[0]) {
    if (!memoryTable[1] && memoryTable[0].numProcess === undefined) {
      // Genera tabla de memoria vacia
      const listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(` ~ [Vacio] ~`));
      memoryTableDom
        .appendChild(listItem)
        .classList.add("list-group-item", "list-group-item-success");
      listItem.style.textAlign = "center";
    } else {
      for (const memory of memoryTable) {
        const listItem = document.createElement("li");
        // listItem.style.transition = "all 1s ease-out"
        listItem.appendChild(
          document.createTextNode(
            `Bloque No. ${memory.bloque} | Proceso #${
              memory.numProcess + 1
            } | Espacio ${taskTable[memory.numProcess].size}`
          )
        );
        memoryCapacity -= taskTable[memory.numProcess].size;

        memoryTableDom
          .appendChild(listItem)
          .classList.add("list-group-item", "list-group-item-success");
      }
    }
  }

  //<div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuenow="100"
  // aria-valuemin="0" aria-valuemax="100" id="memoryBar">100% [5000/5000]</div>

  // Calc Memory Current Status
  const memoryPercentage = (100 * memoryCapacity) / 50000;
  let colorMemoryBar = "progress-bar bg-success";
  if (memoryPercentage >= 75) {
    colorMemoryBar = "progress-bar bg-success";
  } else if (memoryPercentage >= 50) {
    colorMemoryBar = "progress-bar bg-info";
  } else if (memoryPercentage >= 25) {
    colorMemoryBar = "progress-bar bg-warning";
  } else {
    colorMemoryBar = "progress-bar bg-danger";
  }
  memoryBar.className = `${colorMemoryBar}`;
  memoryBar.style = `width: ${memoryPercentage}%`;
  memoryBar.ariaValueNow = `${Math.round(memoryPercentage)}`;
  memoryQty.innerHTML = `Memoria Actual ${memoryPercentage}% [${memoryCapacity}/50000]`;

  // memoryBar.style.classList.add(currentColorMemoryBar, colorMemoryBar)
  // memoryBar.
  // -- old algorithm --
  // for (const memory of memoryTable) {
  //   const listItem = document.createElement("li");
  //   listItem.appendChild(document.createTextNode(` [${memoryTable.indexOf(memory) + 1}. ${memory.currentSize} de ${memory.maxSize} dips.] - ${memory.currentProcess}`
  //     )
  //   );
  //   if (memory.isWorking) {
  //     memoryTableDom.appendChild(listItem).classList.add("list-group-item", "list-group-item-warning");
  //   } else {
  //     memoryTableDom.appendChild(listItem).classList.add("list-group-item", "list-group-item-success");
  //   }
  // }
};

// const firstIteration = (task) => {
//   for (var taskTracker = 0; taskTracker < task; taskTracker++) {
//     for (var memoryTracker = 0; memoryTracker < memory; memoryTracker++) {

//       if (taskTable[taskTracker].size <= memoryTable[memoryTracker].maxSize &&!memoryTable[memoryTracker].isWorking) {
//         memoryTable[memoryTracker].currentSize -= taskTable[taskTracker].size;
//         memoryTable[memoryTracker].currentProcess = `Process No.${taskTable.indexOf(taskTable[taskTracker]) + 1} (${taskTable[taskTracker].size})`;
//         memoryTable[memoryTracker].numProcess = taskTracker;
//         taskTable[taskTracker].status = "En Proceso";
//         memoryTable[memoryTracker].isWorking =!memoryTable[memoryTracker].isWorking;
//         break;
//       }
//     }
//   }

//   clearTables();
//   resetTables();
// };
//size status isFinished
// memoryTable = [
//   {
//     numProcess: undefined,
//     bloque: undefined,
//   },

// memoryTable only numProcess
let stepTracker = 0;
let memorySlotTracker = 1;
let isFull = false;
const actionMemoryTable = () => {
  if (memoryTable[0].numProcess === undefined) {
    memoryTable.shift();
  }
  if (isFull && stepTracker === 25) {
    memoryCapacity += taskTable[memoryTable[0].numProcess].size;
    taskTable[memoryTable[0].numProcess].status = "Terminado";
    memoryTable.shift();
  }
  if (stepTracker === 25) stepTracker = 0;
  for (let i = stepTracker; i < stepTracker + 1; i++) {
    if (
      memoryCapacity >= taskTable[i].size &&
      taskTable[i].status === "En Espera"
    ) {
      memoryCapacity -= taskTable[i].size;
      memoryTable.push({ numProcess: i, bloque: memorySlotTracker });
      memorySlotTracker++;
      taskTable[i].status = "En Proceso";
      isFull = false;
    } else if (memoryCapacity <= taskTable[i].size) {
      isFull = true;
    }
  }

  clearTables();
  resetTables();
  taskTableDom.children[stepTracker].style.backgroundColor = "#79edec";
  stepTracker++;
};

// const nextIteration = () => {
// if(stepTracker===10) stepTracker = 0;

//   for (let i = stepTracker; i < stepTracker+1; i++) {

//     if (memoryTable[i].isWorking) {
//       memoryTable[i].isWorking = false;
//       memoryTable[i].currentSize = memoryTable[i].maxSize;
//       memoryTable[i].currentProcess = "Sin Uso";
//       taskTable[memoryTable[i].numProcess].isFinished = true;
//       taskTable[memoryTable[i].numProcess].status = "Terminado";
//     }

//     for (let j = 0; j < 25; j++) {
//       if (!taskTable[j].isFinished &&taskTable[j].size <= memoryTable[i].maxSize &&!memoryTable[i].isWorking &&taskTable[j].status !== "En Proceso") {
//         memoryTable[i].currentSize -= taskTable[j].size;
//         memoryTable[i].currentProcess = `Process No.${taskTable.indexOf(taskTable[j]) + 1} (${taskTable[j].size})`;
//         memoryTable[i].numProcess = j;
//         taskTable[j].status = "En Proceso";
//         memoryTable[i].isWorking = true;
//       }
//     }
//   }
//   stepTracker++
//   clearTables();
//   resetTables();

// };

//----Para que aparezcan las tablas---
resetTables();

// Logic - Buttons

resetBtn.hidden = true;
stopAutoBtn.hidden = true;
// nextBtn.hidden = true;

//start
// TODO agregar multiples pasos ayudandome del steptracker
startBtn.addEventListener("click", () => {
  if (!memoryTable[0]) {
    alert("No quedan más trabajos");
  } else {
    actionMemoryTable();
    resetBtn.hidden = false;
  }

  // startBtn.hidden = true;
  // nextBtn.hidden = false;
});
//next
nextBtn.addEventListener("click", () => {
  try {
    if (!memoryTable[0]) {
      alert("No quedan más trabajos");
    } else {
      for (let i = 0; i < 5; i++) {
        actionMemoryTable();
      }
      resetBtn.hidden = false;
    }
  } catch (e) {
    console.log("Trabajos Finalizados");
  }
});
//reset
fullBtn.addEventListener("click", () => {
  try {
    if (!memoryTable[0]) {
      alert("No quedan más trabajos");
    } else {
      for (let i = 0; i < 25; i++) {
        actionMemoryTable();
      }
      resetBtn.hidden = false;
    }
  } catch (e) {
    console.log("Trabajos Finalizados");
  }
});

autoBtn.addEventListener("click", () => {
  try {
    if (!memoryTable[0]) {
      alert("No quedan más trabajos");
    } else {
      const idAuto = setInterval(() => {
        actionMemoryTable();
      }, 300);
      resetBtn.hidden = false;
      stopAutoBtn.hidden = false;
      autoBtn.hidden = true;
      stopAutoBtn.addEventListener("click", () => {
        clearInterval(idAuto);

        stopAutoBtn.hidden = true;
        autoBtn.hidden = false;
      });
    }
  } catch (e) {
    console.log("Trabajos Finalizados");
  }
});

resetBtn.addEventListener("click", () => {
  try {
    resetData();
    clearTables();
    resetTables();
    memorySlotTracker = 1;

    resetBtn.hidden = true;
    // nextBtn.hidden = true;
    startBtn.hidden = false;
    stepTracker = 0;
  } catch (e) {
    console.log("Trabajos Finalizados");
  }
});

/* <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%;" aria-valuenow="100"
                            aria-valuemin="0" aria-valuemax="100">100% [5000/5000]</div>
                    </div> */
