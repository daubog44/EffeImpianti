import { create } from "zustand";
import navigationData, { Tpages, Tlinks } from "../navigation";

type TnavigationData = typeof navigationData;

interface Store {
  emailSend: boolean;
  navigationData: TnavigationData;
  setEmailSend: (by: boolean) => void;
  handleClickLinkNav: (page: Tpages | Tlinks) => void;
}

const useStore = create<Store>()((set) => ({
  emailSend: false,
  navigationData,
  setEmailSend: (val) => set((state) => ({ ...state, emailSend: val })),
  handleClickLinkNav: (page) =>
    set((state) => ({
      ...state,
      navigationData: state.navigationData.map((el) => {
        if (el.name === page || el.href === page) {
          el.current = true;
          return el;
        }
        el.current = false;
        return el;
      }),
    })),
}));

export default useStore;
