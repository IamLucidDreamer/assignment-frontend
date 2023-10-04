const stagesData = [
  {
    id: 1,
    name: "Stage 1",
    type: "folder",
    children: [
      {
        name: "Stage 1.1",
        type: "folder",
        children: [
          {
            id: 1.1,
            name: "Stage 1.1 Doc",
            type: "file",
            children: [
              {
                id: 1.11,
                name: "Stage 1.1 Doc",
                type: "file",
              },
            ],
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
    children: [{ id: 7.1, name: "Stage 2 Doc", type: "file" }],
  },
  {
    id: 8,
    name: "Stage 8",
    type: "folder",
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
