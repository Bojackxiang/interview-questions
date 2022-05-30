const { schemas } = require("./q2_sample_data");

function authoriseDocuments(currentUser, documents) {
  // check if the user or documents
  if (!currentUser || documents.length === 0) {
    return [];
  }

  // find the highest access level for the current user tags for each owner
  const { tags } = currentUser;
  const userAccessLevels = parseUserIdAndLevel(tags);

  return documents.filter((doc) => {
    const ownerId = doc.owner || doc.id;
    const accessLevel = userAccessLevels[ownerId];

    if (accessLevel && accessLevel.has(doc.schema)) {
      return doc;
    }
  });
}

/**
 * Parse the user id and access level
 * @param {Array} tags
 * @returns {[string]: Set}
 */
const parseUserIdAndLevel = (tags) => {
  const accessLevelCollection = [];

  tags.forEach((tag) => {
    const [id, accessLevel] = tag.split("_");
    let accessSet = null;
    if (!accessLevelCollection[id]) {
      accessSet = new Set();
    } else {
      accessSet = accessLevelCollection[id];
    }
    accessLevelCollection[id] = accessSetTransfer(accessSet, accessLevel);
  });

  return accessLevelCollection;
};

/**
 * Transfer the category to schemas
 * @param {Set} existingSet
 * @param {String} accessLevel
 * @returns
 */
const accessSetTransfer = (existingSet, accessLevel) => {
  const accessSet = existingSet ?? new Set();
  const categorySchema = schemas.filter(
    (schema) => schema.Category === accessLevel
  )[0];

  categorySchema.Schemas.split(",").forEach((schema) => accessSet.add(schema));

  return accessSet;
};

module.exports = authoriseDocuments;
