interface IChatInput {
  inputValue: string;

  handleInput: (event: Event) => void;
}

class ChatInput implements IChatInput {
  inputValue: string;

  constructor(inputValue: string) {
    this.inputValue = inputValue;
  }

  handleInput(event: Event) {
    console.log(event.target);
  }
}

export default ChatInput;
