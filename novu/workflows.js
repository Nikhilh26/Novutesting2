const { workflow } = require('@novu/framework');
const { z } = require('zod');
const pushNotificationWorkflow = workflow(
    "push-notification-workflow",
    async ({ step, payload }) => {
        console.log(payload);
        await step.inApp("send-push", async () => {
            return {
                subject: "Hello world",
                title: "New Notification",
                content: `Hello ${payload.name}, you have a new notification!`,
                body: "Droop"
            };
        });
    },
    { payloadSchema: z.object({ body: z.string(), title: z.string() }) }
);
// headless
module.exports = { pushNotificationWorkflow };