console.log("Hello Back in request body ");
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    details.requestBody.formData.status="Change the tweet and watching it if it works or not ";
    //   console.log(details);
    console.log(details.url);
    if(details.method == "POST") {
      console.log(details.requestBody.formData);

      if(details.requestBody.formData.status!=null && details.requestBody.formData.status!=undefined ){
        console.log("Inside if loop");
        console.log(details.requestBody.formData.status);
        console.log("Changing the content in loop");
        //details.requestBody.formData.status="Change the tweet and watching it if it works or not ";
        console.log(details.requestBody.formData.status);
      }
    }
  },
  {urls: ["<all_urls>"]},
  ["requestBody"]
);