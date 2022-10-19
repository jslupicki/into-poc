module.exports = async function (context, req) {
    let contextString = JSON.stringify(context)
    let reqString = JSON.stringify(req)
    let processString = JSON.stringify(process)
    
    try {
        let testSetting = process.env.test
    } catch (e) {
        console.log(e)
        let testSetting = "error"
    }

   const responseMessage = "test = " + testSetting + ", process = " + processString + ", req = " + reqString + ", context = " + contextString;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}