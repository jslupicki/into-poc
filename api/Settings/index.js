module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

   let testSetting = "unknown"

   const responseMessage = "TestSetting = " + testSetting;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}