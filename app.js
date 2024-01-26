const express = require("express");
const {exec} = require("child_process")
// exec("sudo apt update",(error,stdout,stderr)=>{
//   if(error){
//     console.log(error)
//   }else if(stderr){
//     console.log(stderr)
//   }else{
//     console.log(stdout)
//   }
// })
// const { initializeApp } = require("firebase/app");
// const Firestore = require("firebase/firestore");

const app = express();
const port = process.env.PORT || 8000;

// const firebaseConfig = {
//   apiKey: "AIzaSyASjnMpLYCFiCi536P_Ni9Yp70WncRTuaM",
//   authDomain: "node-js-db-check.firebaseapp.com",
//   projectId: "node-js-db-check",
//   storageBucket: "node-js-db-check.appspot.com",
//   messagingSenderId: "931879353303",
//   appId: "1:931879353303:web:79a4c7c3bdcffb3ecfa992",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const db = Firestore.getFirestore(firebaseApp);
// app.get("/addUser", async (req, res) => {
//   try {
//     const docRef = await Firestore.addDoc(Firestore.collection(db, "users/docc/subcoll"), {
//       userName: "harsh",
//       password: "hashed hopin",
//     });
//     res.send(docRef);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// });

// app.get("/getUsers/:userName", async (req, res)=>{
//     try{
//         const userName = req.params.userName
//         const query = Firestore.query(Firestore.collection(db, "users"), Firestore.where("userName","==",userName))
//         const collSnap = await Firestore.getDocs(query)
//         // collSnap.docs.forEach((doc)=>{
//         //     res.write(doc.data)
//         // })
//         res.send()
//         // res.send(collSnap.docs)
//     }catch(err){
//         res.status(404).send(err)
//     }

// })

app.get("/", (req, res) => {
  res.send("running smoooothly");
});

app.listen(port, () => {
  console.log("listening to port:", port);
});
