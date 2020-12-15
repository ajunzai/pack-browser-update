interface TextOption {
  msg: string,
  msgMore: string,
  btnUpdatetext: string,
  btnIgnore: string
}

interface Options {
  chrome?: number | string | boolean,
  firefox?: number | string | boolean,
  edge?: number | string | boolean,
  uc?: number | string | boolean,
  safari?: number | string | boolean,
  ie?: number | string | boolean,
  opera?: number | string | boolean,
  reminder?: number,
  reminderClosed?: number,
  lang?: string,
  test?: boolean,
  text?: string | TextOption,
  noCloseBtn?: boolean,
  url?: string
}

export default function browserUpdate(options: Options):void