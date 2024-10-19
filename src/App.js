import { Console } from "@woowacourse/mission-utils";
const separators = [",", ":"];
const regex = new RegExp(separators.map((s) => `\\${s}`).join("|"), "g");
class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

      const numArr = input.split(regex).map(Number);
      const sum = 0;
      Console.print(sum);
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
