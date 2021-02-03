import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.11:3333'
//baseURL: 'http://localhost:3333'    caso esteja utilizando emulador de dispositivo iOS
//caso seja emulador android, rode no terminal "reverse tcp:3333 tcp:3333" sem as aspas e use
// localhost assim como no exemplo de cima também
// obs: IP da máquina funciona de todas as formas e pode mudar. Atenção ao iniciar o expo
});

export default api;