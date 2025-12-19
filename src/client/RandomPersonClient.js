import axios from "axios";

const consumirAPI = async () => {
    const respuesta = await axios.get('https://randomuser.me/api/').then(r => r.data);
    return respuesta;
}

export async function consumirAPIFacade(){
    return await consumirAPI();
}