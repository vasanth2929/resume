import {writable} from 'svelte/store'
import type { Data } from '../types/data.type'

export const store =writable<Data>(null) 