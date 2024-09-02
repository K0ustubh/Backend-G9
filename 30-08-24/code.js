// Last login: Mon Sep  2 13:42:53 on ttys001
// koustubhkukreti@Koustubhs-MacBook-Air ~ % mongosh
// Current Mongosh Log ID:	66d5751e7de7a6b783c0b777
// Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:		7.0.14
// Using Mongosh:		2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2024-08-29T10:11:29.214+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
//    2024-08-29T10:11:29.214+05:30: You are running this process as the root user, which is not recommended
//    2024-08-29T10:11:29.214+05:30: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning
//    2024-08-29T10:11:29.214+05:30: Soft rlimits for open file descriptors too low
// ------

// test> use koustubh
// switched to db koustubh
// koustubh> show dbs
// admin      40.00 KiB
// config    108.00 KiB
// koustubh  168.00 KiB
// local      40.00 KiB
// student    40.00 KiB
// koustubh> show collections
// faculty
// myCollection
// students
// koustubh> db.students.countDocuments()
// 5
// koustubh> db.faculty.estimatedDocumentCount()
// 5
// koustubh> 

// koustubh> db.students.updateMany({},{$set:{student:"Cloud Computing",address:"Chitkara University,Rajpura"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 0,
//   upsertedCount: 0
// }
// koustubh> db.students.find().pretty()
// [
//   {
//     _id: ObjectId('66d55b89a161fca988ccb804'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb805'),
//     name: 'Himank Pahuja',
//     age: 24,
//     marks: 92,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb806'),
//     name: 'Vivek Mahindra',
//     age: 20,
//     marks: 78,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb807'),
//     name: 'Chaitanya Jolly',
//     age: 23,
//     marks: 64,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb808'),
//     name: 'Jahanvi',
//     age: 21,
//     marks: 88,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   }
// ]
// koustubh> db.students.updateOne({ _id: ObjectId('66d0c7a6a04893b7162710bf') }, { $set: { grade: "A+" } })
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 0
// }
// koustubh> db.students.updateOne({ _id: ObjectId('66d0d3f368c898225a2710bc') }, { $set: { grade: "A" }})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 0
// }
// koustubh> db.students.updateOne({ _id: ObjectId('66d0d3f368c898225a2710be') }, { $set: { grade: "B+" }})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 0
// }
// koustubh> db.students.updateOne({ _id: ObjectId('66d0c7a6a04893b7162710c0') }, { $set: { grade: "B" }})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 0
// }
// koustubh> universityDB> db.students.updateOne({ _id: ObjectId('66d0c7a6a04893b7162710bd') }, { $set: { grade: "B" }})
// ReferenceError: universityDB is not defined
// koustubh> db.students.updateOne({ _id: ObjectId('66d0c7a6a04893b7162710bd') }, { $set: { grade: "B" }})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 0
// }
// koustubh> db.students.find({$and: [{age:22},{marks:85}]})
// [
//   {
//     _id: ObjectId('66d55b89a161fca988ccb804'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   }
// ]
// koustubh> db.students.find({$and: [{age:22},{marks:90}]})

// koustubh>  db.students.find({age:{$gt:18},marks:{$gt:80}})
// [
//   {
//     _id: ObjectId('66d55b89a161fca988ccb804'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb805'),
//     name: 'Himank Pahuja',
//     age: 24,
//     marks: 92,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb808'),
//     name: 'Jahanvi',
//     age: 21,
//     marks: 88,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   }
// ]
// koustubh> db.students.find({grade:"A+"})

// koustubh> db.students.find({$or:[{age:{$gt:20}},{marks:{$gt:95}}]})
// [
//   {
//     _id: ObjectId('66d55b89a161fca988ccb804'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb805'),
//     name: 'Himank Pahuja',
//     age: 24,
//     marks: 92,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb807'),
//     name: 'Chaitanya Jolly',
//     age: 23,
//     marks: 64,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb808'),
//     name: 'Jahanvi',
//     age: 21,
//     marks: 88,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   }
// ]
// koustubh> db.students.find({age:{$not:{$gt:18}}} )

// koustubh> db.students.find({age:{$exists:true}})
// [
//   {
//     _id: ObjectId('66d55b89a161fca988ccb804'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb805'),
//     name: 'Himank Pahuja',
//     age: 24,
//     marks: 92,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb806'),
//     name: 'Vivek Mahindra',
//     age: 20,
//     marks: 78,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb807'),
//     name: 'Chaitanya Jolly',
//     age: 23,
//     marks: 64,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb808'),
//     name: 'Jahanvi',
//     age: 21,
//     marks: 88,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   }
// ]
// koustubh> db.students.find({age:{$type:"number"}})
// [
//   {
//     _id: ObjectId('66d55b89a161fca988ccb804'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb805'),
//     name: 'Himank Pahuja',
//     age: 24,
//     marks: 92,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb806'),
//     name: 'Vivek Mahindra',
//     age: 20,
//     marks: 78,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb807'),
//     name: 'Chaitanya Jolly',
//     age: 23,
//     marks: 64,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   },
//   {
//     _id: ObjectId('66d55b89a161fca988ccb808'),
//     name: 'Jahanvi',
//     age: 21,
//     marks: 88,
//     address: 'Chitkara University,Rajpura',
//     student: 'Cloud Computing'
//   }
// ]
// koustubh>  db.students.find({age:{$type:"string"}})

// koustubh> 
