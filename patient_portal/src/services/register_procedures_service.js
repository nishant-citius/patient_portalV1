import { Code } from "@material-ui/icons";
import axios from "axios";
import { id } from "date-fns/locale";
import * as URLS from "./url_list";

class procedureServices {

    getAllProcedure() {
        const url = `${URLS.BASE_URL}/procedures`;
        return axios.get(url);
    }
    getProcedureById(name){
        const url=`${URLS.BASE_URL}/procedures/?procedureByname=${name}`;
        return axios.get(url);
    }
    UpdateProcedure(id, data){
        let url = `${URLS.BASE_URL}/procedures/?procedureid=${id}`;
        let config = {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        };
        return axios.put(url, JSON.stringify(data), config);
      }
    

}

export {procedureServices};