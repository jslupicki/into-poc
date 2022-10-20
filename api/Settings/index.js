module.exports = async function (context, req) {

    const responseMessage = {
            test: process.env["test"],
            into_upload_file_url: process.env["into_upload_file_url"]
        };

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
