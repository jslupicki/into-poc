module.exports = async function (context, req) {

    const responseMessage = {
            into_upload_file_url: process.env["into_upload_file_url"],
            environment: process.env["environment"]
        };

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
