const storage = {
  set<T>(key: string, data: T) {
    return new Promise<void>(res =>
      chrome.storage.sync.set({ [key]: data }, () => res())
    );
  },
  get<V>(key: string) {
    return new Promise<{ [key: string]: V | undefined }>(res =>
      chrome.storage.sync.get([key], res)
    );
  }
};

export default storage;
