import { apiConfig } from "../Configs/AxiosUtils"
const userData = JSON.parse(localStorage.getItem('userData'));
const jwtToken = userData?.data?.token || " ";
export const HotelSearchService = {
 
    CitySearch: async function (request, cancel = false) {
        return await apiConfig.request({
          url: `hotelBooking/citySearch`,
          method: "POST",
          data: request,
          headers: { 
              Authorization: `Bearer ${jwtToken}`
          }
         
        })
       
      },
      HotelSearch: async function (request, cancel = false) {
        return await apiConfig.request({
          url: `/hotelBooking/search`,
          method: "POST",
          data: request,
          headers: { 
              Authorization: `Bearer ${jwtToken}`
          }
         
        })
       
      },
}