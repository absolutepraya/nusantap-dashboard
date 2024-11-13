import { create } from 'zustand';

type ProfileState = {
    profileIndex: number;
    setProfileIndex: (index: number) => void;
};

export const useProfileState = create<ProfileState>((set) => ({
    profileIndex: 0,
    setProfileIndex: (index) => set({ profileIndex: index }),
}));