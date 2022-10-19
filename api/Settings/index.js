module.exports = async function (context, req) {
    let test = process.env["test"];

    const responseMessage = "test = " + test;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
