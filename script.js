// agenda

let agendaGridElement = document.getElementById('agendaGrid');

let agendaData = [
  {
    "day" : "Time",
    "todo" : [
      "4 AM",
      "5 AM",
      "6 AM",
      "7 AM",
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
      "6 PM",
      "7 PM",
      "8 PM",
      "9 PM",
      "10 PM",
     ]
  },
  {
    "day" : "Mon",
    "todo" : [
      "Wake up at 4:00 am for a sunrise yoga session",
      "Journal for 30 minutes",
      "Meditate for 20 minutes",
      "Prepare a nutritious breakfast while listening to a self-help audiobook",
      "Work on your side hustle for 4 hours",
      "Attend a virtual networking event during lunch break",
      "Take a 30-minute break to work on your calligraphy skills",
      "Attend a dance class in the evening",
      "Prepare a healthy dinner while listening to a TED talk",
      "Read 100 pages of a non-fiction book before going to bed"
     ]
  },
  {
    "day" : "Tue",
    "todo" : ["workout", "study", "clean"]
  },
  {
    "day" : "Wed",
    "todo" : ["workout", "study", "clean"]
  },
  {
    "day" : "Thu",
    "todo" : ["workout", "study", "clean"]
  },
  {
    "day" : "Fri",
    "todo" : ["workout", "study", "clean"]
  },
  {
    "day" : "Sat",
    "todo" : ["workout", "study", "clean"]
  },
  {
    "day" : "Sun",
    "todo" : ["workout", "study", "clean"]
  }
];

for (var i = 0; i < agendaData.length; i++) {
  createAgendaElement(agendaData[i]);
}

function createAgendaElement(incomingJSON) {

  /// create whole content item div and set class
  let newAgendaElement = document.createElement("DIV");
  newAgendaElement.classList.add('agendaItem');

  /// create and add name to the item
  let newAgendaDay = document.createElement("DIV");
  newAgendaDay.classList.add('agendaDay');
  newAgendaDay.innerText = incomingJSON['day'];
  newAgendaElement.appendChild(newAgendaDay);

  /// create and add bullet point list to the item
  let newAgendaList = document.createElement("UL");
  newAgendaList.classList.add('agendaList');

  incomingJSON['todo'].forEach(function(item) {
    let newAgendaListItem = document.createElement("UL");
    newAgendaListItem.innerText = item;
    newAgendaList.appendChild(newAgendaListItem);
  });

  newAgendaElement.appendChild(newAgendaList);

  /// add the item to the page
  agendaGridElement.appendChild(newAgendaElement);
}