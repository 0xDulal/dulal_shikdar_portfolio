import { createSlice } from '@reduxjs/toolkit'

export interface UIState {
    isMobileMenuOpen: boolean
    bookingUrl: string
}

const initialState: UIState = {
    isMobileMenuOpen: false,
    bookingUrl: "https://cal.com/0xdulal/website-growth-consultancy",
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMobileMenu: (state) => {
            state.isMobileMenuOpen = !state.isMobileMenuOpen
        },
        closeMobileMenu: (state) => {
            state.isMobileMenuOpen = false
        },
        openMobileMenu: (state) => {
            state.isMobileMenuOpen = true
        },
    },
})

export const { toggleMobileMenu, closeMobileMenu, openMobileMenu } = uiSlice.actions

export default uiSlice.reducer
