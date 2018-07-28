'user strict';

const querystring = require('querystring');

module.exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event));
    const submitted = querystring.parse(event.body).link;
    const prefix = event.headers.Referer || 'http://mysite.com';
    callback(null, {
        statusCode: 200,
        body:`
        <html>
            <body>
                <h3>URL ${submitted} has been shortened: 
                <a href="${submitted}">${prefix}fake</a>
                </h3>

            </body>
        </html>
        `,
        headers: {'Content-Type': 'text/html'}
    })
}