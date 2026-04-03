import "dotenv/config";
import Express from "express";
import { connectToDb } from "./lib/db.js";
import { bugReportRouter } from "./routes/bug.report.route.js";

const main = async () => {
  const app = Express();
  const port = process.env.PORT;

  await connectToDb();

  app.get("/", (req, res) => {
    res.status(200).json({ name: "Bug report API", version: "v1.0.0" });
  });

  app.use(Express.json());
  app.use("/bug", bugReportRouter);

  app.listen(port, () => {
    console.log(`Server is started at http://localhost:${port}`);
  });
};

main();
