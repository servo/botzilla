let { request } = require("../utils");

async function postStandup(client, msg, extra) {
    if (!msg.body.startsWith("standups:")) {
        return;
    }
    let form = {
        secret: extra.standups,
        user: msg.sender,
        message: msg.body.replace('standups:', '').trim()
    };
    await request.post({
        url: 'https://build.servo.org/standups/record',
        form: form
    });
    client.sendText(msg.room, "Recorded status update at https://build.servo.org/standups/user/" + msg.sender);
}

module.exports = {
  handler: postStandup,

  help:
    "Post a standups entry to https://build.servo.org/standups/."
};
