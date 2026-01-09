import 'dotenv/config'
import cron from "cron";
import https from "https";

const url = `${process.env.API_URL}/api/v1/health-check`

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(url, (res) => {
      if (res.statusCode === 200) console.log("GET request sent successfully");
      else console.log("GET request failed", res.statusCode);
    })
    .on("error", (e) => console.error("Error while sending request", e));
});

export default job;