// learn more about HTTP functions here: https://arc.codes/http
const { pantheonService } = require("@architect/shared/PantheonService");


exports.handler = async function http(req) {

    let message = "ERROR!";

    try {
      message = await pantheonService(req);
    } catch (error) {
      message = error;
    }
    return {
        statusCode: 200,
        headers: {
          "cache-control":
            "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
          "content-type": "text/html; charset=utf8",
        },
        body: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sync cannabis.ca.gov content</title>
      </head>
      <!-- called via POST -->
      <body class="padding-32">
        <div class="max-width-320">
          <div class="margin-left-8">
            <div>
              <code>
                ${message}
              </code>
            </div>
          </div>
        </div>
      </body>
      </html>
      `,
      };
}