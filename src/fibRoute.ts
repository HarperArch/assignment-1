// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
  const num = parseInt(req.params.num, 10);

  const fibN = fibonacci(num);
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};