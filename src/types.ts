export interface PhotoType {
  id: string,
 fullPhoto: string,
 smallPhoto: string,
 userName: string,
}



export interface GalleryState {
 photos: PhotoType[]
}