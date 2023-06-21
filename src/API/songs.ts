import axiosRequest from './_index';

export const fetchSongsData = async () => {
  const url = `rest/v1/songs?select=*`;
  return await axiosRequest.get(url);
};

export const fetchSongDetailData = async (id: number) => {
  const url = `rest/v1/songs?id=eq.${id}&select=*`;
  return await axiosRequest.get(url);
};

export const fetchFavsSongData = async (id: string | undefined) =>{
  const url = `rest/v1/favoritesList?userId=eq.${id}&select=songId,id,songs(id,songName,image,artistName)`;
  return await axiosRequest.get(url)
}

export const deleteFavSong =async (id:string | undefined) => {
  const url = `https://povqcjufmbtvlhvbgtmq.supabase.co/rest/v1/favoritesList?songId=eq.4`;
}


