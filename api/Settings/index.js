module.exports = async function (context, req) {
    let contextString = JSON.stringify(context);
    let reqString = JSON.stringify(req);
    let env = JSON.stringify(process.env);

   const responseMessage = "req = " + reqString + ", context = " + contextString + ", env = " + env;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}