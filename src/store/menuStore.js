const state = {
  isOpened: false,
  menu: [
    { label: "hotels", isLink: "Y", link: "/hotels", subMenu: [] },
    {
      label: "spcOfr",
      isLink: "N",
      link: "",
      subMenus: [
        { label: "packages", link: "/spcOfr/1" },
        { label: "evNpm", link: "/spcOfr/2" },
        { label: "ambShop", link: "/spcOfr/2" },
      ],
    },
    {
      label: "mbrsh",
      isLink: "N",
      link: "",
      subMenus: [
        { label: "ambClub", link: "/mbrsh/1" },
        { label: "clubAmb", link: "/mbrsh/2" },
        { label: "TriCho", link: "/mbrsh/3" },
        { label: "mbrProm", link: "/mbrsh/4" },
      ],
    },
    { label: "contUs", isLink: "Y", link: "/contact", subMenu: [] },
  ],
  hotels: [
    { srchKey: "pullmanSeoul" },
    { srchKey: "gwjIncheon" },
    { srchKey: "fairmontSeoul" },
    { srchKey: "sofitelSeoul" },
    { srchKey: "naruSeoul" },
    { srchKey: "mercureSeoul" },
    { srchKey: "mercureChangwon" },
    { srchKey: "novotelSuitesYongsan" },
    { srchKey: "novotelGangnam" },
    { srchKey: "novotelYongsan" },
    { srchKey: "novotelDongdaemun" },
    { srchKey: "novotelSuwon" },
    { srchKey: "mercureHongdae" },
    { srchKey: "mercureUlsan" },
    { srchKey: "mercureJeJu" },
    { srchKey: "ibisStylesGangnam" },
    { srchKey: "ibisStylesMyeongdong" },
    { srchKey: "ibisStylesYongsan" },
    { srchKey: "ibisStylesIncheon" },
    { srchKey: "ibisMyeongdong" },
    { srchKey: "ibisInsadong" },
    { srchKey: "ibisSuwon" },
    { srchKey: "ibisCityCenter" },
    { srchKey: "ibisHaeundae" },
    { srchKey: "ibisBudgetHaeundae" },
    { srchKey: "mondrianItaewon" },
  ],
};
const mutations = {
  initDatas(state) {
    state.hotels = [];
    state.menu = [];
    state.isOpened = false;
  },
  setHotels(state, payload) {
    state.hotels = [].concat(payload);
  },
  setMenus(state, payload) {
    state.hotels = [].concat(payload);
  },
  setOpened(state, payload) {
    state.isOpened = payload;
  },
};
const menuStore = {
  namespaced: true,
  state,
  mutations,
};

export default menuStore;
