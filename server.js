import express from "express"
const app = express();
import mongoose from "mongoose";
import cors from "cors"
import authRoutes from "./server/routes/auth.js"
mongoose.set('strict',false);


mongoose.connect('mongodb://0.0.0.0:27017/PriceWise', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB successfully connected");
})
.catch((error) => {
  console.error("Error connecting to DB:", error);
});

app.use(cors())
app.use(express.json())

app.use('/',authRoutes)

app.listen(5000, function () {
  console.log("Server is running on port 3000");
});
