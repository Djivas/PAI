const socket = new WebSocket('ws://your-websocket-url'); // заменить на свой
import { useReceiptStore } from '../receiptStoreWs';

socket.onopen = () => {
  console.log('Соединение установлено');
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  
  if (data.tablet_id) {
    useReceiptStore.setState({ data });
  }
};

socket.onerror = (event) => {
  console.log(`Ошибка: ${event}`);
};

socket.onclose = (event) => {
  if (event.wasClean) {
    console.log(`Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
  } else {
    console.log('Соединение прервано');
  }
};

export default socket;