class HttpException extends Error {
  status: number;
  // message: string; new Error('asdasdasd')
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    // this.message = message;
  }
}

export default HttpException;
