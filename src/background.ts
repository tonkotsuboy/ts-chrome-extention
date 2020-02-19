/**
 * eventListener
 * chrome.cookies should be called in this file
 */
chrome.runtime.onMessage.addListener(
  (request: { message: string; name: string; value: string }) => {
    const { message, name, value } = request;
    if (message == "setCookies") {
      chrome.cookies.set({
        url: "hogehoge.com",
        name,
        value
      });
    }

    return true;
  }
);
