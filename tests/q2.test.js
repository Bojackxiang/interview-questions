const { schemas, documents, users } = require("../q2_sample_data");
const authoriseDocuments = require("../q2");
describe("Test for the q2", () => {
  let user1 = null;
  let user2 = null;

  beforeEach(() => {
    user1 = users[0];
    user2 = users[1];
    user3 = users[2];
  });

  it("should return [] if invalid input", () => {
    const invalidDocuments = authoriseDocuments(user1, []);
    expect(invalidDocuments).toEqual([]);

    const invalidNullUser = authoriseDocuments(null, documents);
    expect(invalidNullUser).toEqual([]);

    const undefinedInvalidUser = authoriseDocuments(undefined, documents);
    expect(undefinedInvalidUser).toEqual([]);
  });

  it(`user 1 tag 
  79210e32-db9f-4614-9bce-7258172366e6_All,
  79210e32-db9f-4614-9bce-7258172366e6_AccountManagement,
  79210e32-db9f-4614-9bce-7258172366e6_OrderManagement
  `, () => {
    user1 = users[0];
    const result = authoriseDocuments(user1, documents);
    const filtered = documents.filter((doc) => {
      return (
        doc.owner === "79210e32-db9f-4614-9bce-7258172366e6" ||
        doc.id === "79210e32-db9f-4614-9bce-7258172366e6"
      );
    });

    expect(result).toEqual(filtered);
  });

  it(`user 2 with tag 
  79210e32-db9f-4614-9bce-7258172366e6_All 
  & 05dcd054-a756-4c16-bb6c-a0322d7a0d5b_AccountManagement
  should be able to access to all documents with owner id 79210e32-db9f-4614-9bce-7258172366e6,
  but only account, and address with owner id 05dcd054-a756-4c16-bb6c-a0322d7a0d5b
  `, () => {
    user2 = users[1];
    const result = authoriseDocuments(user2, documents);

    const firstDocumentSlice = documents.filter(
      (doc) => (doc.id || doc.owner) === "79210e32-db9f-4614-9bce-7258172366e6"
    );

    const secondDocumentSlice = documents.filter(
      (doc) =>
        (doc.id || doc.owner) === "05dcd054-a756-4c16-bb6c-a0322d7a0d5b" &&
        doc &&
        doc.schema !== "Product"
    );

    expect(result).toEqual([...firstDocumentSlice, ...secondDocumentSlice]);
  });

  it(`user 3 with tag 
  79210e32-db9f-4614-9bce-7258172366e6_All 
  should be able to access to all documents with owner id 79210e32-db9f-4614-9bce-7258172366e6,
  but only account, and address with owner id 05dcd054-a756-4c16-bb6c-a0322d7a0d5b
  `, () => {
    const result = authoriseDocuments(user3, documents);

    const firstDocumentSlice = documents.filter(
      (doc) =>
        (doc.id || doc.owner) === "79210e32-db9f-4614-9bce-7258172366e6" &&
        doc.schema === "Order"
    );

    const secondDocumentSlice = documents.filter(
      (doc) =>
        (doc.id || doc.owner) === "79210e32-db9f-4614-9bce-7258172366e6" &&
        doc &&
        doc.schema === "Account"
    );

    expect(result).toEqual([ ...secondDocumentSlice, ...firstDocumentSlice]);
  });
});
