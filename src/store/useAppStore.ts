import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TwinProfile } from '../types';
import { INITIAL_TWINS } from '../data/twins';

interface DopamintStore {
  twins: TwinProfile[];
  activeTwin: TwinProfile;
  selectedTwinForCall: TwinProfile | null;
  isFaceTimeOpen: boolean;
  isCreatorStudioModalOpen: boolean;
  activeCategory: string;
  searchQuery: string;
  audioPlayingTwinId: string | null;
  liveViewersCount: number;
  totalCallsMade: number;
  
  // Actions
  setActiveTwin: (twin: TwinProfile) => void;
  setActiveCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  openFaceTimeCall: (twin?: TwinProfile) => void;
  closeFaceTimeCall: () => void;
  toggleCreatorStudioModal: (open?: boolean) => void;
  setAudioPlayingTwinId: (id: string | null) => void;
  addCustomTwin: (twin: TwinProfile) => void;
  deleteCustomTwin: (id: string) => void;
  incrementCallCount: () => void;
}

export const useAppStore = create<DopamintStore>()(
  persist(
    (set, get) => ({
      twins: INITIAL_TWINS,
      activeTwin: INITIAL_TWINS[0],
      selectedTwinForCall: null,
      isFaceTimeOpen: false,
      isCreatorStudioModalOpen: false,
      activeCategory: 'All',
      searchQuery: '',
      audioPlayingTwinId: null,
      liveViewersCount: 18492,
      totalCallsMade: 4892401,

      setActiveTwin: (twin) => set({ activeTwin: twin }),
      setActiveCategory: (category) => set({ activeCategory: category }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      
      openFaceTimeCall: (twin) => {
        const targetTwin = twin || get().activeTwin;
        set({ 
          selectedTwinForCall: targetTwin, 
          isFaceTimeOpen: true,
          totalCallsMade: get().totalCallsMade + 1
        });
      },

      closeFaceTimeCall: () => set({ 
        isFaceTimeOpen: false, 
        selectedTwinForCall: null 
      }),

      toggleCreatorStudioModal: (open) => set((state) => ({
        isCreatorStudioModalOpen: open !== undefined ? open : !state.isCreatorStudioModalOpen
      })),

      setAudioPlayingTwinId: (id) => set({ audioPlayingTwinId: id }),

      addCustomTwin: (newTwin) => set((state) => ({
        twins: [newTwin, ...state.twins],
        activeTwin: newTwin,
      })),

      deleteCustomTwin: (id) => set((state) => ({
        twins: state.twins.filter((t) => t.id !== id),
        activeTwin: state.activeTwin.id === id ? INITIAL_TWINS[0] : state.activeTwin,
      })),

      incrementCallCount: () => set((state) => ({
        totalCallsMade: state.totalCallsMade + 1
      }))
    }),
    {
      name: 'dopamint-storage-v1',
      partialize: (state) => ({
        twins: state.twins,
        totalCallsMade: state.totalCallsMade,
      }),
    }
  )
);
