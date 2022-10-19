module.exports = async function (context, req) {

    const responseMessage = {
            test: process.env["test"]
        };

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
