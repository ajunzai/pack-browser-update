interface TextOption {
  msg: string,
  msgMore: string,
  btnUpdatetext: string,
  btnIgnore: string
}

interface BrowserVersion {
  chrome?: number | string | boolean,
  firefox?: number | string | boolean,
  edge?: number | string | boolean,
  uc?: number | string | boolean,
  safari?: number | string | boolean,
  ie?: number | string | boolean,
  opera?: number | string | boolean,
  samsung?: number | string,
  yandex?: number | string,
  vivaldi?: number | string,
}

interface Options {
  required?: BrowserVersion
  reminder?: number,
  reminderClosed?: number,
  lang?: string,
  test?: boolean,
  text?: string | TextOption,
  noCloseBtn?: boolean,
  url?: string
}

declare global {
  interface Window {
    browserUp: (options?: Options) => void
  }
}
export default Window