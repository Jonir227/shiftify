chrome.webNavigation.onDOMContentLoaded.addListener(
  (detail: chrome.webNavigation.WebNavigationFramedCallbackDetails) => {
    const BLLocation = {
      SHIFT: "SHIFT",
      WIKI: "WIKI"
    } as const;

    const getLocation = (url: string) => {
      if (url.includes("http://orcz.com/Borderlands_3:_Golden_Key")) {
        return BLLocation.WIKI;
      }
      if (
        url.includes("https://borderlands.com/") &&
        url.endsWith("/vip-codes/")
      ) {
        return BLLocation.SHIFT;
      }
      throw Error("Location is invalid");
    };
    const currentLocation = getLocation(detail.url);
    switch (currentLocation) {
      case BLLocation.SHIFT: {
        chrome.tabs.executeScript(detail.tabId, {
          code: "bg/shift/index.js"
        });
      }
      case BLLocation.WIKI: {
        chrome.tabs.executeScript(detail.tabId, { code: "bg/wiki/index.js" });
      }
    }
  }
);
