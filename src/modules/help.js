let { RichReply } = require("matrix-bot-sdk");

module.exports = {
  handler: function(client, msg, extra) {
    if (msg.body.indexOf("!help") === -1) {
      return;
    }

    let text =
      "Hi there! Botzilla <https://github.com/bnjbvr/botzilla> is a bot trying to help you.";
    let html =
      "<p>Hi there! <a href='https://github.com/bnjbvr/botzilla'>Botzilla</a> is a bot trying to help you.</p>";

    if (extra.handlerNames.length) {
      text += "\nModules enabled:\n\n";
      text += extra.handlerNames
        .map(name => `- ${name} : ${extra.helpMessages[name]}`)
        .join("\n");

      html += "<p>Modules enabled:";
      html += "<ul>";
      html += extra.handlerNames
        .map(
          name =>
            `<li><strong>${name}</strong> : ${extra.helpMessages[name]}</li>`
        )
        .join("\n");
      html += "</ul>";
      html += "</p>";
    } else {
      let notice = "No modules enabled for this instance of Botzilla!";
      text += `\n${notice}`;
      html += `<p>${notice}</p>`;
    }

    if (typeof extra.owner !== "undefined") {
      let notice = `The owner of this bot is ${extra.owner}. In case the bot misbehaves in any ways, feel free to get in touch with its owner.`;
      html += `<p>${notice}</p>`;
      text += `\n${notice}`;
    }

    client.sendMessage(msg.room, {
      msgtype: "m.notice",
      body: text,
      format: "org.matrix.custom.html",
      formatted_body: html
    });
  },

  help: "Well, this is what you're looking at :)"
};
