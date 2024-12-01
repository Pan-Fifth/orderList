import { create } from "zustand";

const useTableStore = create((set, get) => ({

    products: {},
    sTotalPrice: null,
    sDiscount: null,
    sAfterDis: null,
    sVat: null,
    sGrandTotal: null,
    upDatePrice: (a,b,c,d,e) => {
        set({
            sTotalPrice: a,
            sDiscount: b,
            sAfterDis: c,
            sVat: d,
            sGrandTotal: e,
        })
    },
    addProduct: () => {
        set({ products: product })
    }
}))

export default useTableStore