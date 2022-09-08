import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9') 
    return response.data
  } catch (error: any) {
    throw Error (error.message)
  }
}