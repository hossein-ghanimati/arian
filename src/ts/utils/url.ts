const getUrlParam = (param: string) => {
  const splitedHash = location.hash.split("?");
  const urlParams = new URLSearchParams(splitedHash[1])
  return urlParams.get(param)
}
type ValueType = string | number | boolean

const setUrlParam = (param: string, value: ValueType) => {
  value = `${value}`
  const splitedHash = location.hash.split("?");
  const searchParams = new URLSearchParams(splitedHash[1]);

  searchParams.set(param, value)

  history.pushState({}, "", `${location.pathname}${location.hash}?${searchParams.toString()}`)
}

const removeUrlParam = (param: string) => {
  const splitedHash = location.hash.split("?");
  const searchParams = new URLSearchParams(splitedHash[1]);

  searchParams.delete(param)

  history.pushState({}, "", `${location.pathname}${location.hash}?${searchParams.toString()}`)
}

export{
  getUrlParam,
  setUrlParam,
  removeUrlParam
}