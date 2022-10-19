module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    try {
        let testSetting = process.env.test
    } catch (error) {
        let testSetting = "unknown"
    }
    const responseMessage = "TestSetting = " + testSetting;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}