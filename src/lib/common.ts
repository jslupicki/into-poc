export function renderSurvey(
    parentElementId: string,
    FirstName: string,
    LastName: string,
    locale: string,
    Country: string
) {
    const se = new SurveyEmbed(
        "YlDbY-R8Kk6K6KePGJTtr_WQ_yJ_JSJHs3g0Y_9VxU9UOVdRV1Y2NzlUTzlDS05BNlVRNUwyNkFYRC4u", 
        "https://customervoice.microsoft.com/", 
        "https://mfpembedcdnweu.azureedge.net/mfpembedcontweu/", 
        "true"
    );
    const context = {"First Name": FirstName, "Last Name": LastName, "locale": locale, "Country": Country,};
    se.renderInline(parentElementId, context);
}
