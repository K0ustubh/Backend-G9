// Last login: Mon Sep  2 13:20:47 on ttys001
// koustubhkukreti@Koustubhs-MacBook-Air ~ % mongosh
// Current Mongosh Log ID:	66d56fdc12c6a924a97447ee
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
// admin      40.00 KiB
// config    108.00 KiB
// koustubh  120.00 KiB
// local      40.00 KiB
// student    40.00 KiB
// test> use koustubh
// switched to db koustubh
// koustubh> db.myCollection.insertOne({x:1})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d5700812c6a924a97447ef')
// }
// koustubh> db.myCollection.insertOne({date: ISODate()})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d5701312c6a924a97447f0')
// }
// koustubh> db.myCollection.find()
// [
//   { _id: ObjectId('66d56f3740e7bad1af4f385b'), x: 1 },
//   { _id: ObjectId('66d5700812c6a924a97447ef'), x: 1 },
//   {
//     _id: ObjectId('66d5701312c6a924a97447f0'),
//     date: ISODate('2024-09-02T07:58:11.594Z')
//   }
// ]
// koustubh> db.myCollection.insertMany([{name:"Koustubh Kukreti"},{rollNo:"221"},{hobby:"Cricket"},{Course:"CSE"}])"
// Uncaught:
// SyntaxError: Unterminated string constant. (1:103)

// > 1 | db.myCollection.insertMany([{name:"Koustubh Kukreti"},{rollNo:"221"},{hobby:"Cricket"},{Course:"CSE"}])"
//     |                                                                                                        ^
//   2 |

// koustubh> db.myCollection.insertMany([{name:"Koustubh Kukreti"},{rollNo:"221"},{hobby:"Cricket"},{Course:"CSE"}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d570af12c6a924a97447f1'),
//     '1': ObjectId('66d570af12c6a924a97447f2'),
//     '2': ObjectId('66d570af12c6a924a97447f3'),
//     '3': ObjectId('66d570af12c6a924a97447f4')
//   }
// }
// koustubh> db.myCollection.find()
// [
//   { _id: ObjectId('66d56f3740e7bad1af4f385b'), x: 1 },
//   { _id: ObjectId('66d5700812c6a924a97447ef'), x: 1 },
//   {
//     _id: ObjectId('66d5701312c6a924a97447f0'),
//     date: ISODate('2024-09-02T07:58:11.594Z')
//   },
//   {
//     _id: ObjectId('66d570af12c6a924a97447f1'),
//     name: 'Koustubh Kukreti'
//   },
//   { _id: ObjectId('66d570af12c6a924a97447f2'), rollNo: '221' },
//   { _id: ObjectId('66d570af12c6a924a97447f3'), hobby: 'Cricket' },
//   { _id: ObjectId('66d570af12c6a924a97447f4'), Course: 'CSE' }
// ]
// koustubh> db.myCollection.find().pretty()
// [
//   { _id: ObjectId('66d56f3740e7bad1af4f385b'), x: 1 },
//   { _id: ObjectId('66d5700812c6a924a97447ef'), x: 1 },
//   {
//     _id: ObjectId('66d5701312c6a924a97447f0'),
//     date: ISODate('2024-09-02T07:58:11.594Z')
//   },
//   {
//     _id: ObjectId('66d570af12c6a924a97447f1'),
//     name: 'Koustubh Kukreti'
//   },
//   { _id: ObjectId('66d570af12c6a924a97447f2'), rollNo: '221' },
//   { _id: ObjectId('66d570af12c6a924a97447f3'), hobby: 'Cricket' },
//   { _id: ObjectId('66d570af12c6a924a97447f4'), Course: 'CSE' }
// ]
// koustubh> 