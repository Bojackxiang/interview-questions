const schemas = [
  { Category: "All", Schemas: "Account,Address,Product,Order" },
  { Category: "AccountManagement", Schemas: "Account,Address" },
  { Category: "OrderManagement", Schemas: "Account,Order" },
];

const documents = [
  {
    schema: "Account",
    owner: null,
    id: "79210e32-db9f-4614-9bce-7258172366e6",
  },
  {
    schema: "Order",
    owner: null,
    id: "79210e32-db9f-4614-9bce-7258172366e6",
  },
  {
    schema: "Address",
    owner: "79210e32-db9f-4614-9bce-7258172366e6",
    id: "79210e32-db9f-4614-9bce-7258172366e6",
  },
  { schema: "Order", owner: null, id: "c796ddce-150e-4517-a8b4-d22d73161117" },
  {
    schema: "Address",
    owner: "05dcd054-a756-4c16-bb6c-a0322d7a0d5b",
    id: "05dcd054-a756-4c16-bb6c-a0322d7a0d5b",
  },
  {
    schema: "Product",
    id: "05dcd054-a756-4c16-bb6c-a0322d7a0d5b",
  },
  
];

const users = [
    // user 1
  {
    tags: [
      "79210e32-db9f-4614-9bce-7258172366e6_All",
      "79210e32-db9f-4614-9bce-7258172366e6_AccountManagement",
      "79210e32-db9f-4614-9bce-7258172366e6_OrderManagement",
    ],
  },
  // user 2
  {
    tags: [
      "79210e32-db9f-4614-9bce-7258172366e6_All",
      "05dcd054-a756-4c16-bb6c-a0322d7a0d5b_AccountManagement",
    ],
  },
  // user 3
  {
    tags: [
      "79210e32-db9f-4614-9bce-7258172366e6_OrderManagement",
    ],
  },
];

module.exports = {
  schemas,
  documents,
  users,
};
