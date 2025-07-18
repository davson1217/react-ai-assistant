import { useState } from "react";
import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import type { IGenAiResponse } from "../Interfaces/IGenAiResponse.ts";
import { useAppDispatch } from "../store/hooks.ts";
import { addPrompt, updatePromptRetry } from "../store/slices/chatsSlice.ts";

export interface IClientMethods {
  /**
   * Makes http request to the AI server, sending along user prompt
   *
   * @param prompt user input
   * @param isRetry when true, it resends a prompt to the ai server
   * */
  sendPrompt: (prompt: string, isRetry?: boolean) => void;
  getHistory: () => void;
}

const useAI = () => {
  const [isBusy, setIsBusy] = useState(false);
  const dispatch = useAppDispatch();

  const http: AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5000",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const sendPrompt = (prompt: string, isRetry = false) => {
    const promptTime = Date.now();
    if (!isRetry) {
      dispatch(
        addPrompt({
          timestamp: promptTime,
          isUserPrompt: true,
          prompt,
        })
      );
    }

    setIsBusy(true);

    http
      .post("/prompt", { prompt })
      .then((res: AxiosResponse<IGenAiResponse>) => {
        const { created, message } = res.data;
        dispatch(
          addPrompt({
            timestamp: created,
            prompt: message,
            isUserPrompt: false,
          })
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          updatePromptRetry({
            timestamp: promptTime,
          })
        );
      })
      .finally(() => {
        setIsBusy(false);
      });
  };

  const getHistory = () => {
    //
  };

  const actions: IClientMethods = {
    sendPrompt,
    getHistory,
  };

  const hookTuple: [boolean, IClientMethods] = [isBusy, actions];

  return hookTuple;
};

// exporting a file as default exemplifies SRP: A module should serve only one purpose -- in react context
// here, this means that there cannot be another logic exported from this module

export default useAI;
