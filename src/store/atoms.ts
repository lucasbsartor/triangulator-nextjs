import { atom } from 'jotai'
import { Triangle } from '@/lib/triangle'

export const triangleListAtom = atom<Triangle[]>([])
export const triangleAtom = atom<Triangle | undefined | null>(undefined)
