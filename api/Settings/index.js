module.exports = async function (context, req) {
    let contextString = JSON.stringify(context)
    let reqString = JSON.stringify(req)

   const responseMessage = "req = " + reqString + ", context = " + contextString;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}