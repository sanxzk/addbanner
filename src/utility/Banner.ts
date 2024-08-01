import { Banner } from "./Types";

const key = "bannerData";

export const fetchAllBanners = (): Banner[] => {
  const stringData: string | null = window.localStorage.getItem(key);
  if (stringData === null) {
    localStorage.setItem(key, "[]");
    return [];
  }
  const data: Banner[] = JSON.parse(stringData || "[]");
  return data;
};
const saveBannerData = (bannerData: Banner[]) => {
  const stringData: string = JSON.stringify(bannerData);
  localStorage.setItem(key, stringData);
};

export const saveBanner = (banner: Banner) => {
  try {
    const data: Banner[] = fetchAllBanners();
    const index = data.findIndex((item) => item.id === banner.id);
    if (index !== -1) {
      data[index] = banner;
    } else {
      data.push(banner);
    }
    saveBannerData(data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteBanner = (id: string) => {
  const allBanners: Banner[] = fetchAllBanners();
  const filteredBanners = allBanners.filter((banner) => banner.id !== id);
  saveBannerData(filteredBanners);
};
