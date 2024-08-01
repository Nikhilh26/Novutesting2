const express = require("express");
const { serve } = require("@novu/framework/express");
require('dotenv').config();
const { pushNotificationWorkflow } = require("./novu/workflows");
const app = express();
app.use(express.json()); // Required for Novu POST requests

app.use("/api/novu", serve({ workflows: [pushNotificationWorkflow] }));

app.listen(4000);