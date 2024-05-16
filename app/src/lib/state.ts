// this is a global state file
// Here I export the Jotai Atoms

import { atomWithStorage } from "jotai/utils"

export const isLoggedInAtom = atomWithStorage<boolean>("isLoggedIn", false)
export const usernameAtom = atomWithStorage<string>("username", "")
export const emailAtom = atomWithStorage<string>("email", "")
export const passwordAtom = atomWithStorage<string>("password", "")
