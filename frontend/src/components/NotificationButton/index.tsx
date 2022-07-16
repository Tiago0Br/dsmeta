import axios from 'axios'
import { toast } from 'react-toastify'
import notificationIcon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request'
import './styles.css'

type Props = {
    saleId: number
}

function handleClick(id: number) {
    toast.info('Por favor, aguarde!')
    axios.get(`${BASE_URL}/sales/${id}/notification`)
        .then(() => {
            toast.success('SMS enviado com sucesso!')
        })
        .catch(err => {
            toast.error('Não foi possível enviar o SMS, tente novamente mais tarde.')
            console.log(err)
        })
}

export default function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={notificationIcon} alt="Notificar" />
        </div>
    )
}