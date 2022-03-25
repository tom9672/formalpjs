import express from 'express'
import db from './models/index.js'
import emanagerRoutes from './routes/emanagerRoute.js'
db.sequelize.sync()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/emanager',emanagerRoutes)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});