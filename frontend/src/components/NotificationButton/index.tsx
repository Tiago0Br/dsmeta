import axios from 'axios'
import notificationIcon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request'
import './styles.css'

type Props = {
    saleId: number
}

function handleClick(id: number) {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
        .then(() => console.log('Notificação enviada'))
        .catch(err => console.log('Erro', err))
}

export default function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={notificationIcon} alt="Notificar" />
        </div>
    )
}