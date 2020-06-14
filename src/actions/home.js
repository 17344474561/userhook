import api from '@/services/api'
import { get } from '@/uilts/request'

export function homDatas () {
    return {
        type: 'HOME_DATA',
        payload: get(api.list )
    }
}