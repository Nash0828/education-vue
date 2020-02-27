import AreaList from './area'
export function getCountyValue(cityName, countyName) {
  let cityList = AreaList.city_list
  let countyList = AreaList.county_list
  let cityKeys = Object.keys(cityList)
  let cityKey = ''
  for (let i = 0; i < cityKeys.length; i++) {
    if (cityList[cityKeys[i]] === cityName) {
      cityKey = cityKeys[i]
      break
    }
  }
  let countyKeys = Object.keys(countyList)
  for (let i = 0; i < countyKeys.length; i++) {
    if (countyList[countyKeys[i]] === countyName && (countyKeys[i] + '').substring(0, 3) === cityKey.substring(0, 3)) {
      return countyKeys[i]
    }
  }
}
