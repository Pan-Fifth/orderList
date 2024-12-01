import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useUserStore = create(
    persist((set) => ({
        title: {},
        addTitle: (title) => {
            set({ title: title })
        },
        storeData: Array(5).fill().map((el, index) => ({
            no: index + 1,
            code: "",
            quantity: "",
            weight: "",
            price: "",
            unit: "",
            priceBeforeDis: "",
            Dis: "",
            net: ""
        })),
        tNote:"",
        sNote:"",
        addTable: (data,tnote,snote) => {
            set({ storeData: data }),
            set({tNote:tnote}),
            set({sNote:snote})
        }
    }), {
        name: "User",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useUserStore

