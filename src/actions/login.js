import api from '@/services/api'
import { post } from '@/uilts/request'

export function getLoign (options) {
    return {
        type: 'FETCH_LOG',
        payload: post(api.log,options)
    }
}
export function getReg (options) {
    return {
        type: 'FETCH_REG',
        payload: post(api.regs,options)
    }
}