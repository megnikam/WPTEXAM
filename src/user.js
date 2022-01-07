const mysql = require("mysql");
const Promise = require("bluebird");
const Connection = require("mysql/lib/Connection");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "welcome2",
  database: "project3",
};

const record = {
  sender: "amruta",
  receiver: "krish",
  msg: "how area you",
};

async function checkconnection() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connection created");
  await connection.endAsync();
}

const addrecord = async (record) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `insert into message(sender,receiver,msg) values(?,?,?)`;
  await connection.queryAsync(sql, [
    record.sender,
    record.receiver,
    record.msg,
  ]);
  console.log("record added");
  await connection.endAsync();
};

const getrecord = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `select * from message`;
  const list = await connection.queryAsync(sql, []);
  //console.log(list);
  await connection.endAsync();
  return list;
};

//checkconnection();

//const record = { msg: "hey" };
//adduser(record);
//selectuser();
module.exports = { getrecord, addrecord };
