// this is a global state file
// Here I export the Jotai Atoms

import { atom } from "jotai"

export const isLoggedInAtom = atom(false)
export const usernameAtom = atom("")
export const emailAtom = atom("")
export const passwordAtom = atom("")
