const {schemas, documents, users} = require('./q2_sample_data')
const authoriseDocuments = require("./q2")

const sampleUser = users[2]
authoriseDocuments(sampleUser, documents)




