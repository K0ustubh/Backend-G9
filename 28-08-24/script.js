// Last login: Mon Sep  2 11:49:19 on ttys004
// koustubhkukreti@Koustubhs-MacBook-Air ~ % mongosh
// Current Mongosh Log ID:	66d55b32a161fca988ccb803
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

// test> show dbs
// admin    40.00 KiB
// config   96.00 KiB
// local    40.00 KiB
// student  40.00 KiB
// test> use koustubh
// switched to db koustubh
// koustubh> db.students.insert([{"name": "Pratham Grover", "age": 22, "marks": 85},{"name": "Himank Pahuja", "age": 24, "marks": 92},{"name": "Vivek Mahindra", "age": 20, "marks": 78},{"name": "Chaitanya Jolly", "age": 23, "marks": 64},{"name": "Jahanvi", "age": 21, "marks": 88}])
// DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d55b89a161fca988ccb804'),
//     '1': ObjectId('66d55b89a161fca988ccb805'),
//     '2': ObjectId('66d55b89a161fca988ccb806'),
//     '3': ObjectId('66d55b89a161fca988ccb807'),
//     '4': ObjectId('66d55b89a161fca988ccb808')
//   }
// koustubh> db.faculty.insert([{"name": "Dr.Vaibhav Singla" , "age": 22, "subject": "c++", "rating": 4.5},{"name": "Dr.Abhinav Jain" , "age": 24, "subject": "java", "rating": 4.8},{ "name": "Dr.Neerav Singla" , "age": 20, "subject": "DBMS", "rating": 4.2},{"name": "Dr.Brahmjot Singh" , "age": 23, "subject": "BEE", "rating": 3.9},{ "name": "Dr.Khushi Bhatia", "age": 21, "subject": "Python", "rating": 4.7}])
// DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d56d0a19a169aef4dab9a8'),
//     '1': ObjectId('66d56d0a19a169aef4dab9a9'),
//     '2': ObjectId('66d56d0a19a169aef4dab9aa'),
//     '3': ObjectId('66d56d0a19a169aef4dab9ab'),
//     '4': ObjectId('66d56d0a19a169aef4dab9ac')
//   }
// }