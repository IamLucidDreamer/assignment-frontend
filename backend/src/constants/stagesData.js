const stagesData = [
  {
    id: 1,
    name: "Stage 1",
    type: "folder",
    status: 2,
    children: [
      {
        id: 1.1,
        name: "Stage 1.1",
        type: "folder",
        status: 2,
        children: [
          {
            id: 1.11,
            name: "Stage 1.11 Doc",
            type: "file",
          },
        ],
      },
      {
        id: 1.2,
        name: "Stage 1 Doc",
        type: "file",
      },
    ],
  },
  {
    id: 2,
    name: "Stage 2",
    type: "folder",
    status: 1,
    children: [
      {
        id: 2.1,
        name: "Stage 2 Doc",
        type: "file",
      },
    ],
  },
  {
    id: 3,
    name: "Stage 3",
    status: 3,
    type: "folder",
    children: [
      {
        id: 3.1,
        name: "Stage 2 Doc",
        type: "file",
      },
    ],
  },
  {
    id: 4,
    name: "Stage 4",
    status: 2,
    type: "folder",
    children: [
      {
        id: 4.1,
        name: "Stage 2 Doc",
        type: "file",
      },
    ],
  },
  {
    id: 5,
    name: "Stage 5",
    type: "folder",
    status: 3,
    children: [
      {
        id: 5.1,
        name: "Stage 2 Doc",
        type: "file",
      },
    ],
  },
  {
    id: 6,
    name: "Stage 6",
    type: "folder",
    status: 6,
    children: [
      {
        id: 6.1,
        name: "Stage 2 Doc",
        type: "file",
      },
    ],
  },
  {
    id: 7,
    name: "Stage 7",
    type: "folder",
    status: 3,
    children: [{ id: 7.1, name: "Stage 2 Doc", type: "file" }],
  },
  {
    id: 8,
    name: "Stage 8",
    type: "folder",
    status: 1,
    children: [
      {
        id: 8.1,
        name: "Stage 2 Doc",
        type: "file",
      },
    ],
  },
];

module.exports = stagesData;
